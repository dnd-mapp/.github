import { createGithubClient } from '@/github-client';
import { propagateSha } from '@/sha-propagator';
import * as core from '@actions/core';
import { fileURLToPath } from 'url';

export async function run() {
    const siblingRepos = process.env['SIBLING_REPOS']!.split(/\s+/).filter(Boolean);
    const newSha = process.env['NEW_SHA']!;
    const token = process.env['GH_TOKEN']!;

    core.info(`Propagating SHA ${newSha.slice(0, 7)} to ${siblingRepos.length} repo(s)`);
    core.debug(`Repos: ${siblingRepos.join(', ')}`);

    const octokit = createGithubClient(token);

    for (const fullName of siblingRepos) {
        const [owner, repo] = fullName.split('/');

        await propagateSha(octokit, { owner: owner!, repo: repo!, newSha });
    }
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
