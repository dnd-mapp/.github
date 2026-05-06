import { createGithubClient } from '@/github-client';
import { propagateSha } from '@/sha-propagator';
import { fileURLToPath } from 'url';

export async function run(): Promise<void> {
    const siblingRepos = process.env['SIBLING_REPOS']!.split(' ').filter(Boolean);
    const newSha = process.env['NEW_SHA']!;
    const token = process.env['GH_TOKEN']!;

    const octokit = createGithubClient(token);

    for (const fullName of siblingRepos) {
        const [owner, repo] = fullName.split('/');

        await propagateSha(octokit, { owner: owner!, repo: repo!, newSha });
    }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    await run();
}
