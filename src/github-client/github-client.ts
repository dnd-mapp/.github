import { Octokit } from '@octokit/rest';

export function createGithubClient(token: string): Octokit {
    return new Octokit({ auth: token });
}
