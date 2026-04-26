import { createReleaseBranch } from '../../../../src/branch-manager/branch-manager.ts';
import { createGithubClient } from '../../../../src/github-client/github-client.ts';

const [owner, repo] = process.env['GITHUB_REPOSITORY']!.split('/');

await createReleaseBranch(createGithubClient(process.env['GH_TOKEN']!), {
    owner: owner!,
    repo: repo!,
    branchName: process.env['RELEASE_BRANCH_NAME']!,
});
