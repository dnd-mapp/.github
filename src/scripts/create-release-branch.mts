import { createReleaseBranch } from '@/branch-manager';
import { createGithubClient } from '@/github-client';
import { fileURLToPath } from 'url';

export async function run(): Promise<void> {
    const [owner, repo] = process.env['GITHUB_REPOSITORY']!.split('/');

    await createReleaseBranch(createGithubClient(process.env['GH_TOKEN']!), {
        owner: owner!,
        repo: repo!,
        branchName: process.env['RELEASE_BRANCH_NAME']!,
    });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    await run();
}
