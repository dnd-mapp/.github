import { Octokit } from '@octokit/rest';
import { commitFiles, createReleaseBranch, deleteReleaseBranch, mergeReleaseBranch } from './branch-manager';

const MAIN_SHA = 'abc123mainshadef456';
const TAG_SHA = 'def456tagsha789';

const makeOctokit = () =>
    ({
        git: {
            getRef: vi.fn().mockResolvedValue({ data: { object: { sha: MAIN_SHA } } }),
            createRef: vi.fn().mockResolvedValue({}),
            deleteRef: vi.fn().mockResolvedValue({}),
        },
        repos: {
            getContent: vi.fn().mockResolvedValue({ data: { sha: TAG_SHA } }),
            createOrUpdateFileContents: vi.fn().mockResolvedValue({}),
            merge: vi.fn().mockResolvedValue({ data: { sha: 'mergesha' } }),
        },
    }) as unknown as Octokit;

const OWNER = 'dnd-mapp';
const REPO = '.github';

beforeEach(() => {
    vi.resetAllMocks();
});

describe('createReleaseBranch', () => {
    it('fetches main HEAD SHA and creates a new ref', async () => {
        const octokit = makeOctokit();

        await createReleaseBranch(octokit, { owner: OWNER, repo: REPO, branchName: 'release/v2.0.0' });

        expect(octokit.git.getRef).toHaveBeenCalledOnce();
        expect(octokit.git.getRef).toHaveBeenCalledWith({ owner: OWNER, repo: REPO, ref: 'heads/main' });
        expect(octokit.git.createRef).toHaveBeenCalledOnce();
        expect(octokit.git.createRef).toHaveBeenCalledWith({
            owner: OWNER,
            repo: REPO,
            ref: 'refs/heads/release/v2.0.0',
            sha: MAIN_SHA,
        });
    });
});

describe('commitFiles', () => {
    it('gets existing blob SHA and commits each file to the correct branch', async () => {
        const octokit = makeOctokit();
        const files = [
            { path: 'package.json', content: '{"version":"2.0.0"}', message: 'chore: bump version' },
            { path: 'CHANGELOG.md', content: '# Changelog', message: 'docs: update changelog' },
        ];

        await commitFiles(octokit, { owner: OWNER, repo: REPO, branch: 'release/v2.0.0', files });

        expect(octokit.repos.getContent).toHaveBeenCalledTimes(2);
        expect(octokit.repos.createOrUpdateFileContents).toHaveBeenCalledTimes(2);

        expect(octokit.repos.createOrUpdateFileContents).toHaveBeenCalledWith(
            expect.objectContaining({
                path: 'package.json',
                branch: 'release/v2.0.0',
                content: Buffer.from('{"version":"2.0.0"}').toString('base64'),
                sha: TAG_SHA,
            })
        );
    });
});

describe('mergeReleaseBranch', () => {
    it('merges with the exact conventional commit message', async () => {
        const octokit = makeOctokit();

        await mergeReleaseBranch(octokit, { owner: OWNER, repo: REPO, releaseBranch: 'release/v2.0.0' });

        expect(octokit.repos.merge).toHaveBeenCalledOnce();
        expect(octokit.repos.merge).toHaveBeenCalledWith({
            owner: OWNER,
            repo: REPO,
            base: 'main',
            head: 'release/v2.0.0',
            commit_message: 'chore: merge release/v2.0.0 into main',
        });
    });

    it('throws a descriptive error on merge conflict (status 409)', async () => {
        const octokit = makeOctokit();

        (octokit.repos.merge as ReturnType<typeof vi.fn>).mockRejectedValue({ status: 409 });

        await expect(
            mergeReleaseBranch(octokit, { owner: OWNER, repo: REPO, releaseBranch: 'release/v2.0.0' })
        ).rejects.toThrow('Merge conflict');
    });

    it('rethrows non-conflict errors', async () => {
        const octokit = makeOctokit();

        (octokit.repos.merge as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('Network error'));

        await expect(
            mergeReleaseBranch(octokit, { owner: OWNER, repo: REPO, releaseBranch: 'release/v2.0.0' })
        ).rejects.toThrow('Network error');
    });
});

describe('deleteReleaseBranch', () => {
    it('deletes the branch via ref', async () => {
        const octokit = makeOctokit();

        await deleteReleaseBranch(octokit, { owner: OWNER, repo: REPO, branch: 'release/v2.0.0' });

        expect(octokit.git.deleteRef).toHaveBeenCalledOnce();
        expect(octokit.git.deleteRef).toHaveBeenCalledWith({
            owner: OWNER,
            repo: REPO,
            ref: 'heads/release/v2.0.0',
        });
    });
});
