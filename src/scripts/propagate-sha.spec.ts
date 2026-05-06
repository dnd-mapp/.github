import type { GithubClient } from '@/github-client';
import { createGithubClient } from '@/github-client';
import { propagateSha } from '@/sha-propagator';
import { run } from './propagate-sha';

vi.mock('@/github-client', () => ({ createGithubClient: vi.fn() }));
vi.mock('@/sha-propagator', () => ({ propagateSha: vi.fn() }));
vi.mock('@actions/core', () => ({ info: vi.fn(), debug: vi.fn(), setFailed: vi.fn() }));

const mockOctokit = {} as unknown as GithubClient;

beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(createGithubClient).mockReturnValue(mockOctokit);
    vi.mocked(propagateSha).mockResolvedValue(undefined);
    process.env['SIBLING_REPOS'] = 'dnd-mapp/shared-backend';
    process.env['NEW_SHA'] = 'ffff6666eeee7777dddd8888cccc9999bbbb0000';
    process.env['GH_TOKEN'] = 'gh-token-123';
});

afterEach(() => {
    delete process.env['SIBLING_REPOS'];
    delete process.env['NEW_SHA'];
    delete process.env['GH_TOKEN'];
});

describe('propagate-sha script', () => {
    it('creates a github client with the provided token', async () => {
        await run();

        expect(createGithubClient).toHaveBeenCalledWith('gh-token-123');
    });

    it('calls propagateSha for each repo in SIBLING_REPOS', async () => {
        process.env['SIBLING_REPOS'] = 'dnd-mapp/shared-backend dnd-mapp/other-repo';

        await run();

        expect(propagateSha).toHaveBeenCalledTimes(2);
        expect(propagateSha).toHaveBeenCalledWith(
            mockOctokit,
            expect.objectContaining({ owner: 'dnd-mapp', repo: 'shared-backend' })
        );
        expect(propagateSha).toHaveBeenCalledWith(
            mockOctokit,
            expect.objectContaining({ owner: 'dnd-mapp', repo: 'other-repo' })
        );
    });

    it('passes NEW_SHA to propagateSha', async () => {
        await run();

        expect(propagateSha).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({ newSha: 'ffff6666eeee7777dddd8888cccc9999bbbb0000' })
        );
    });

    it('handles extra spaces in SIBLING_REPOS gracefully', async () => {
        process.env['SIBLING_REPOS'] = '  dnd-mapp/shared-backend  ';

        await run();

        expect(propagateSha).toHaveBeenCalledOnce();
    });
});
