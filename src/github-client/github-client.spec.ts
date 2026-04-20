import { Octokit } from '@octokit/rest';
import { createGithubClient } from './github-client';

vi.mock('@octokit/rest');

describe('createGithubClient', () => {
    it('constructs Octokit with the provided token', () => {
        createGithubClient('ghp_test_token');

        expect(Octokit).toHaveBeenCalledOnce();
        expect(Octokit).toHaveBeenCalledWith({ auth: 'ghp_test_token' });
    });

    it('returns an Octokit instance', () => {
        const client = createGithubClient('ghp_test_token');

        expect(client).toBeInstanceOf(Octokit);
    });
});
