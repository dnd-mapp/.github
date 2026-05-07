import { createReleaseBranch } from '@/branch-manager';
import { createGithubClient } from '@/github-client';
import * as core from '@actions/core';
import { context } from '@actions/github';

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
if (process.env['GITHUB_ACTIONS'] === 'true') {
    run().catch((error) => core.setFailed(error instanceof Error ? error.message : String(error)));
}
/* c8 ignore stop */
