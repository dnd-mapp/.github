import { extractPrereleaseDelta, extractStableNotes } from '@/changelog-manager';
import { createGithubClient } from '@/github-client';
import { publishRelease } from '@/release-publisher';
import * as core from '@actions/core';
import { context } from '@actions/github';
import { readFile } from 'fs/promises';
import semver from 'semver';
export async function run() {
    const { owner, repo } = context.repo;
    const changelogPath = process.env['CHANGELOG_PATH'] ?? 'CHANGELOG.md';

    const manifest = JSON.parse(await readFile(`${process.env['GITHUB_WORKSPACE']!}/package.json`, 'utf-8')) as {
        version: string;
    };
    const version = manifest.version;
    const isPrerelease = semver.prerelease(version) !== null;

    core.info(`Publishing release v${version}`);
    core.debug(`Prerelease: ${isPrerelease}`);

    const releaseNotes = isPrerelease
        ? await extractPrereleaseDelta(changelogPath)
        : await extractStableNotes(changelogPath, version);

    const octokit = createGithubClient(process.env['GH_TOKEN']!);

    await publishRelease(octokit, {
        owner,
        repo,
        tagName: `v${version}`,
        commitSha: context.sha,
        releaseNotes,
        isPrerelease,
    });

    core.setOutput('is-prerelease', isPrerelease);
}

/* c8 ignore start */
if (process.env['GITHUB_ACTIONS'] === 'true') {
    run().catch((error) => core.setFailed(error instanceof Error ? error.message : String(error)));
}
/* c8 ignore stop */
