import { deleteReleaseBranch, mergeReleaseBranch } from '../../../../src/branch-manager/branch-manager.ts';
import { createGithubClient } from '../../../../src/github-client/github-client.ts';

const [owner, repo] = process.env['GITHUB_REPOSITORY']!.split('/');
const releaseBranch = process.env['RELEASE_BRANCH']!;

const octokit = createGithubClient(process.env['GH_TOKEN']!);

await mergeReleaseBranch(octokit, { owner: owner!, repo: repo!, releaseBranch });
await deleteReleaseBranch(octokit, { owner: owner!, repo: repo!, branch: releaseBranch });
