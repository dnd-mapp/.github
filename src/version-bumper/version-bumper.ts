import { readFile, writeFile } from 'fs/promises';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const semver = require('semver') as typeof import('semver');

type ReleaseType = 'major' | 'minor' | 'patch' | 'premajor' | 'preminor' | 'prepatch' | 'prerelease';

export function bumpVersion(params: { currentVersion: string; bumpType: string; preid?: string }): string {
    const result = semver.inc(params.currentVersion, params.bumpType as ReleaseType, params.preid);

    if (!result) {
        throw new Error(`Cannot bump version "${params.currentVersion}" with type "${params.bumpType}".`);
    }

    return result;
}

export function deriveReleaseBranchName(newVersion: string): string | null {
    const parsed = semver.parse(newVersion);

    if (!parsed) {
        throw new Error(`Invalid version: "${newVersion}"`);
    }

    if (parsed.prerelease.length > 0) {
        return `release/v${parsed.major}.${parsed.minor}.${parsed.patch}`;
    }

    return null;
}

export async function writePackageVersion(params: { manifestPath: string; newVersion: string }): Promise<void> {
    const raw = await readFile(params.manifestPath, { encoding: 'utf-8' });
    const manifest = JSON.parse(raw) as Record<string, unknown>;

    manifest['version'] = params.newVersion;

    await writeFile(params.manifestPath, JSON.stringify(manifest, null, 2) + '\n', { encoding: 'utf-8' });
}
