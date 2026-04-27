import { createReleaseBranch } from '@/branch-manager';
import { createGithubClient } from '@/github-client';
import { Octokit } from '@octokit/rest';
import { run } from './create-release-branch.mts';

vi.mock('@/branch-manager', () => ({
    createReleaseBranch: vi.fn(),
}));

vi.mock('@/github-client', () => ({
    createGithubClient: vi.fn(),
}));

const mockOctokit = {} as unknown as Octokit;

beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(createGithubClient).mockReturnValue(mockOctokit);
    vi.mocked(createReleaseBranch).mockResolvedValue(undefined as never);
    process.env['GITHUB_REPOSITORY'] = 'dnd-mapp/.github';
    process.env['GH_TOKEN'] = 'gh-token-123';
    process.env['RELEASE_BRANCH_NAME'] = 'release/v2.0.0';
});

afterEach(() => {
    delete process.env['GITHUB_REPOSITORY'];
    delete process.env['GH_TOKEN'];
    delete process.env['RELEASE_BRANCH_NAME'];
});

describe('create-release-branch script', () => {
    it('splits GITHUB_REPOSITORY to pass owner and repo separately', async () => {
        await run();

        expect(createReleaseBranch).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({ owner: 'dnd-mapp', repo: '.github' })
        );
    });

    it('passes RELEASE_BRANCH_NAME as branchName', async () => {
        await run();

        expect(createReleaseBranch).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({ branchName: 'release/v2.0.0' })
        );
    });

    it('creates the github client with GH_TOKEN', async () => {
        await run();

        expect(createGithubClient).toHaveBeenCalledWith('gh-token-123');
    });

    it('passes the octokit instance to createReleaseBranch', async () => {
        await run();

        expect(createReleaseBranch).toHaveBeenCalledWith(mockOctokit, expect.anything());
    });
});
