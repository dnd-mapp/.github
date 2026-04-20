import { Octokit } from '@octokit/rest';

// --- Constants ---

const ALLOWED_VERSIONS = ['major', 'minor', 'patch', 'premajor', 'preminor', 'prepatch', 'prerelease'];
const ALLOWED_PRERELEASE_IDS = ['alpha', 'beta', 'rc', 'none'];
const PRERELEASE_ID_WEIGHT: Record<string, number> = { alpha: 0, beta: 1, rc: 2, none: 3 };
const PRERELEASE_INIT_TYPES = ['premajor', 'preminor', 'prepatch'];

// --- SemVer helpers ---

interface ParsedVersion {
    major: number;
    minor: number;
    patch: number;
    prerelease: string[];
}

function parseSemVer(version: string): ParsedVersion {
    const plusIndex = version.indexOf('+');
    const base = plusIndex === -1 ? version : version.slice(0, plusIndex);
    const dashIndex = base.indexOf('-');
    const corePart = dashIndex === -1 ? base : base.slice(0, dashIndex);
    const prereleasePart = dashIndex === -1 ? null : base.slice(dashIndex + 1);
    const corePieces = corePart.split('.');

    if (corePieces.length !== 3) {
        throw new Error(`Invalid version format: "${version}"`);
    }

    const [major, minor, patch] = corePieces.map((n) => {
        if (!/^\d+$/.test(n)) throw new Error(`Invalid version segment "${n}" in "${version}"`);
        return Number(n);
    });

    return { major, minor, patch, prerelease: prereleasePart ? prereleasePart.split('.') : [] };
}

function isPrereleaseVersion(parsed: ParsedVersion): boolean {
    return parsed.prerelease.length > 0;
}

function getPrereleaseTrack(parsed: ParsedVersion): 'premajor' | 'preminor' | 'prepatch' | null {
    if (!isPrereleaseVersion(parsed)) return null;
    if (parsed.minor === 0 && parsed.patch === 0) return 'premajor';
    if (parsed.patch === 0) return 'preminor';
    return 'prepatch';
}

function getPrereleaseId(parsed: ParsedVersion): string | null {
    for (const segment of parsed.prerelease) {
        if (Number.isNaN(Number(segment))) return segment;
    }
    return null;
}

function validateEnum(value: string, allowed: string[], inputName: string): void {
    if (!allowed.includes(value)) {
        throw new Error(`Invalid ${inputName} "${value}". Must be one of: ${allowed.join(', ')}.`);
    }
}

// --- Input-shape validation (Rules 1–9) ---

function validateInputShape(versionInput: string, prereleaseIdInput: string, currentVersion: string): void {
    validateEnum(versionInput, ALLOWED_VERSIONS, 'version');
    validateEnum(prereleaseIdInput, ALLOWED_PRERELEASE_IDS, 'prerelease-id');

    const parsed = parseSemVer(currentVersion);
    const isCurrentPrerelease = isPrereleaseVersion(parsed);
    const currentTrack = getPrereleaseTrack(parsed);
    const currentPrereleaseId = getPrereleaseId(parsed);

    // Rule 1
    if (PRERELEASE_INIT_TYPES.includes(versionInput) && prereleaseIdInput === 'none') {
        throw new Error(
            `Rule 1 violation: Starting a new prerelease track ("${versionInput}") requires an explicit prerelease-id (alpha | beta | rc). "none" is not allowed here.`
        );
    }

    // Rule 2
    if (!isCurrentPrerelease && versionInput === 'prerelease') {
        throw new Error(
            `Rule 2 violation: Cannot use version "prerelease" when the current version (${currentVersion}) is not already a prerelease.`
        );
    }

    // Rules 4/5/6
    if (isCurrentPrerelease) {
        if (currentTrack === 'premajor') {
            if (versionInput !== 'prerelease' && versionInput !== 'major') {
                throw new Error(
                    `Rule 4 violation: Current version (${currentVersion}) is on the premajor track. Next version must be "prerelease" or "major", got "${versionInput}".`
                );
            }
        } else if (currentTrack === 'preminor') {
            const allowed = ['prerelease', 'minor', 'premajor'];

            if (!allowed.includes(versionInput)) {
                throw new Error(
                    `Rule 5 violation: Current version (${currentVersion}) is on the preminor track. Next version must be one of: ${allowed.join(', ')}, got "${versionInput}".`
                );
            }
        } else if (currentTrack === 'prepatch') {
            const allowed = ['prerelease', 'patch', 'preminor', 'premajor'];

            if (!allowed.includes(versionInput)) {
                throw new Error(
                    `Rule 6 violation: Current version (${currentVersion}) is on the prepatch track. Next version must be one of: ${allowed.join(', ')}, got "${versionInput}".`
                );
            }
        }
    }

    // Rules 7/8/9
    if (versionInput === 'prerelease' && isCurrentPrerelease && currentPrereleaseId !== null) {
        if (prereleaseIdInput !== 'none') {
            const currentWeight = PRERELEASE_ID_WEIGHT[currentPrereleaseId];
            const nextWeight = PRERELEASE_ID_WEIGHT[prereleaseIdInput];

            if (nextWeight < currentWeight) {
                throw new Error(
                    `Rules 7-9 violation (Forward-Only): Cannot move prerelease identifier from "${currentPrereleaseId}" to "${prereleaseIdInput}". Identifier progression is: alpha -> beta -> rc -> (stable).`
                );
            }
        }
    }
}

// --- Public API ---

export async function validateRelease(
    octokit: Octokit,
    params: {
        owner: string;
        repo: string;
        currentBranch: string;
        versionInput: string;
        prereleaseIdInput: string;
        currentVersion: string;
    }
): Promise<{ isPrerelease: boolean }> {
    validateInputShape(params.versionInput, params.prereleaseIdInput, params.currentVersion);

    const { data: branches } = await octokit.repos.listBranches({
        owner: params.owner,
        repo: params.repo,
        per_page: 100,
    });

    const releaseBranches = branches.filter((b) => b.name.startsWith('release/'));
    const hasActiveBranch = releaseBranches.length > 0;
    const onReleaseBranch = params.currentBranch.startsWith('release/');
    const onMain = params.currentBranch === 'main';

    // Rule A
    if (onReleaseBranch && PRERELEASE_INIT_TYPES.includes(params.versionInput)) {
        throw new Error(
            `Rule A violation: Cannot start a new prerelease track from a release branch. Use "prerelease" to continue the current track.`
        );
    }

    // Rule B
    if (onMain && hasActiveBranch && ['major', 'minor', 'patch'].includes(params.versionInput)) {
        throw new Error(
            `Rule B violation: Cannot create a stable release from main while a release branch is active. Finish or merge the existing release branch first.`
        );
    }

    // Rule C
    if (onMain && hasActiveBranch && PRERELEASE_INIT_TYPES.includes(params.versionInput)) {
        throw new Error(
            `Rule C violation: A concurrent release branch already exists. Only one release branch is allowed at a time.`
        );
    }

    const isPrerelease = PRERELEASE_INIT_TYPES.includes(params.versionInput) || params.versionInput === 'prerelease';

    return { isPrerelease };
}
