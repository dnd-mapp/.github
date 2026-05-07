import { validateRelease } from '@/branch-validator';
import { createGithubClient } from '@/github-client';
import * as core from '@actions/core';
import { context } from '@actions/github';
import { readFile } from 'fs/promises';

export async function run() {
    const { owner, repo } = context.repo;
    const currentBranch = process.env['GITHUB_REF_NAME']!;
    const manifest = JSON.parse(await readFile(`${process.env['GITHUB_WORKSPACE']!}/package.json`, 'utf-8')) as {
        version: string;
    };

    core.info('Validating release configuration');
    core.debug(`Branch: ${currentBranch}, version input: ${process.env['VERSION']}`);

    const { isPrerelease } = await validateRelease(createGithubClient(process.env['GITHUB_TOKEN']!), {
        owner,
        repo,
        currentBranch,
        versionInput: process.env['VERSION']!,
        prereleaseIdInput: process.env['PRERELEASE_ID']!,
        currentVersion: manifest.version,
    });

    core.setOutput('is-prerelease', isPrerelease);
}

/* c8 ignore start */
if (process.env['GITHUB_ACTIONS'] === 'true') {
    run().catch((error) => core.setFailed(error instanceof Error ? error.message : String(error)));
}
/* c8 ignore stop */
