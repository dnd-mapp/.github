import { getOctokit } from '@actions/github';
import { GitHub } from '@actions/github/lib/utils';

export type GithubClient = InstanceType<typeof GitHub>;

export function createGithubClient(token: string) {
    return getOctokit(token);
}
