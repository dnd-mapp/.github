import { getOctokit } from '@actions/github';
import { createGithubClient } from './github-client';

vi.mock('@actions/github', () => ({
    getOctokit: vi.fn().mockReturnValue({}),
}));

describe('createGithubClient', () => {
    it('calls getOctokit with the provided token', () => {
        createGithubClient('ghp_test_token');

        expect(getOctokit).toHaveBeenCalledOnce();
        expect(getOctokit).toHaveBeenCalledWith('ghp_test_token');
    });

    it('returns what getOctokit returns', () => {
        const fakeClient = { rest: {} };
        vi.mocked(getOctokit).mockReturnValueOnce(fakeClient as never);

        const result = createGithubClient('ghp_test_token');

        expect(result).toBe(fakeClient);
    });
});
