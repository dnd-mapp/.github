import { readFile, writeFile } from 'fs/promises';
import { inc, parse } from 'semver';

type ReleaseType = 'major' | 'minor' | 'patch' | 'premajor' | 'preminor' | 'prepatch' | 'prerelease';

interface BumpVersionParams {
    currentVersion: string;
    bumpType: string;
    preid?: string;
}

interface WritePackageVersionParams {
    manifestPath: string;
    newVersion: string;
}

export function bumpVersion(params: BumpVersionParams): string {
    let result: string | null;

    if (params.preid) result = inc(params.currentVersion, params.bumpType as ReleaseType, params.preid);
    else result = inc(params.currentVersion, params.bumpType as ReleaseType);

    if (!result) {
        throw new Error(`Cannot bump version "${params.currentVersion}" with type "${params.bumpType}".`);
    }
    return result;
}

export function deriveReleaseBranchName(newVersion: string): string | null {
    const parsed = parse(newVersion);

    if (!parsed) {
        throw new Error(`Invalid version: "${newVersion}"`);
    }
    if (parsed.prerelease.length > 0) {
        return `release/v${parsed.major}.${parsed.minor}.${parsed.patch}`;
    }
    return null;
}

export async function writePackageVersion(params: WritePackageVersionParams): Promise<void> {
    const raw = await readFile(params.manifestPath, { encoding: 'utf-8' });
    const manifest = JSON.parse(raw) as Record<string, unknown>;

    manifest['version'] = params.newVersion;

    await writeFile(params.manifestPath, JSON.stringify(manifest, null, 2) + '\n', { encoding: 'utf-8' });
}
