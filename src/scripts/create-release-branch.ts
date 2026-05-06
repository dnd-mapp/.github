import { createReleaseBranch } from '@/branch-manager';
import { createGithubClient } from '@/github-client';
import * as core from '@actions/core';
import { context } from '@actions/github';
import { fileURLToPath } from 'url';

export async function run() {
    const { owner, repo } = context.repo;
    const branchName = process.env['RELEASE_BRANCH_NAME']!;

    core.info(`Creating release branch: ${branchName}`);

    await createReleaseBranch(createGithubClient(process.env['GH_TOKEN']!), {
        owner,
        repo,
        branchName,
    });
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
