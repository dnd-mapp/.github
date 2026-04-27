import { deleteReleaseBranch, mergeReleaseBranch } from '@/branch-manager';
import { createGithubClient } from '@/github-client';
import { fileURLToPath } from 'url';

export async function run(): Promise<void> {
    const [owner, repo] = process.env['GITHUB_REPOSITORY']!.split('/');
    const releaseBranch = process.env['RELEASE_BRANCH']!;

    const octokit = createGithubClient(process.env['GH_TOKEN']!);

    await mergeReleaseBranch(octokit, { owner: owner!, repo: repo!, releaseBranch });
    await deleteReleaseBranch(octokit, { owner: owner!, repo: repo!, branch: releaseBranch });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    await run();
}
