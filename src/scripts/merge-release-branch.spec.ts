import { deleteReleaseBranch, mergeReleaseBranch } from '@/branch-manager';
import type { GithubClient } from '@/github-client';
import { createGithubClient } from '@/github-client';
import { run } from './merge-release-branch';

vi.mock('@/branch-manager', () => ({
    mergeReleaseBranch: vi.fn(),
    deleteReleaseBranch: vi.fn(),
}));

vi.mock('@/github-client', () => ({
    createGithubClient: vi.fn(),
}));

vi.mock('@actions/github', () => ({
    context: { repo: { owner: 'dnd-mapp', repo: '.github' } },
}));

vi.mock('@actions/core', () => ({
    startGroup: vi.fn(),
    endGroup: vi.fn(),
    info: vi.fn(),
    debug: vi.fn(),
    setFailed: vi.fn(),
}));

const mockOctokit = {} as unknown as GithubClient;

beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(createGithubClient).mockReturnValue(mockOctokit);
    vi.mocked(mergeReleaseBranch).mockResolvedValue(undefined as never);
    vi.mocked(deleteReleaseBranch).mockResolvedValue(undefined as never);
    process.env['GH_TOKEN'] = 'gh-token-123';
    process.env['RELEASE_BRANCH'] = 'release/v2.0.0';
});

afterEach(() => {
    delete process.env['GH_TOKEN'];
    delete process.env['RELEASE_BRANCH'];
});

describe('merge-release-branch script', () => {
    it('passes context owner and repo to mergeReleaseBranch', async () => {
        await run();

        expect(mergeReleaseBranch).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({ owner: 'dnd-mapp', repo: '.github' })
        );
    });

    it('passes context owner and repo to deleteReleaseBranch', async () => {
        await run();

        expect(deleteReleaseBranch).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({ owner: 'dnd-mapp', repo: '.github' })
        );
    });

    it('passes RELEASE_BRANCH as releaseBranch to mergeReleaseBranch', async () => {
        await run();

        expect(mergeReleaseBranch).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({ releaseBranch: 'release/v2.0.0' })
        );
    });

    it('passes RELEASE_BRANCH as branch to deleteReleaseBranch', async () => {
        await run();

        expect(deleteReleaseBranch).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({ branch: 'release/v2.0.0' })
        );
    });

    it('calls merge before delete', async () => {
        const order: string[] = [];
        vi.mocked(mergeReleaseBranch).mockImplementation(() => {
            order.push('merge');
            return Promise.resolve(undefined as never);
        });
        vi.mocked(deleteReleaseBranch).mockImplementation(() => {
            order.push('delete');
            return Promise.resolve(undefined as never);
        });

        await run();

        expect(order).toEqual(['merge', 'delete']);
    });

    it('creates the github client with GH_TOKEN', async () => {
        await run();

        expect(createGithubClient).toHaveBeenCalledWith('gh-token-123');
    });
});
