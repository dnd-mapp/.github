import { createGithubClient } from '@/github-client';
import { createReleaseBranch } from '@/branch-manager';

const [owner, repo] = process.env['GITHUB_REPOSITORY']!.split('/');

await createReleaseBranch(createGithubClient(process.env['GH_TOKEN']!), {
    owner: owner!,
    repo: repo!,
    branchName: process.env['RELEASE_BRANCH_NAME']!,
});
