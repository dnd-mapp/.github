import { bumpVersion, deriveReleaseBranchName, writePackageVersion } from '@/version-bumper';
import * as core from '@actions/core';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

export async function run() {
    const versionInput = process.env['VERSION']!;
    const prereleaseIdInput = process.env['PRERELEASE_ID']!;
    const manifestPath = `${process.env['GITHUB_WORKSPACE']!}/package.json`;

    const manifest = JSON.parse(await readFile(manifestPath, 'utf-8')) as { version: string };
    const preid = prereleaseIdInput !== 'none' ? prereleaseIdInput : undefined;

    const newVersion = bumpVersion({ currentVersion: manifest.version, bumpType: versionInput, preid: preid });

    core.info(`Bumping version: ${manifest.version} → ${newVersion}`);

    await writePackageVersion({ manifestPath: manifestPath, newVersion: newVersion });

    const rawVersion = `v${newVersion}`;
    const releaseBranchName = deriveReleaseBranchName(newVersion) ?? '';

    core.setOutput('raw-version', rawVersion);
    core.setOutput('clean-version', newVersion);
    core.setOutput('release-branch-name', releaseBranchName);
}

/* c8 ignore start */
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    try {
        await run();
    } catch (error) {
        core.setFailed(error instanceof Error ? error.message : String(error));
    }
}
/* c8 ignore stop */
