import { deleteReleaseBranch, mergeReleaseBranch } from '@/branch-manager';
import { createGithubClient } from '@/github-client';
import * as core from '@actions/core';
import { context } from '@actions/github';
import { fileURLToPath } from 'url';

export async function run() {
    const { owner, repo } = context.repo;
    const releaseBranch = process.env['RELEASE_BRANCH']!;

    core.startGroup('Merge release branch');

    const octokit = createGithubClient(process.env['GH_TOKEN']!);

    core.info(`Merging ${releaseBranch} into main`);
    await mergeReleaseBranch(octokit, { owner, repo, releaseBranch });

    core.info(`Deleting branch ${releaseBranch}`);
    await deleteReleaseBranch(octokit, { owner, repo, branch: releaseBranch });

    core.endGroup();
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
