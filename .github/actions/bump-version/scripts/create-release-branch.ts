import { createReleaseBranch } from '@/branch-manager';
import { createGithubClient } from '@/github-client';

const [owner, repo] = process.env['GITHUB_REPOSITORY']!.split('/');

await createReleaseBranch(createGithubClient(process.env['GH_TOKEN']!), {
    owner: owner!,
    repo: repo!,
    branchName: process.env['RELEASE_BRANCH_NAME']!,
});
