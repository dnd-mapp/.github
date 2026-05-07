import type { GithubClient } from '@/github-client';
import { propagateSha } from './sha-propagator';

vi.mock('@actions/core', () => ({
    startGroup: vi.fn(),
    endGroup: vi.fn(),
    info: vi.fn(),
    debug: vi.fn(),
}));

const OLD_SHA = 'aaaa1111bbbb2222cccc3333dddd4444eeee5555';
const NEW_SHA = 'ffff6666eeee7777dddd8888cccc9999bbbb0000';
const MAIN_SHA = '1234567890abcdef1234567890abcdef12345678';
const TREE_SHA = 'tree1234567890abcdef1234567890abcdef1234';
const NEW_TREE_SHA = 'newtree1234567890abcdef1234567890abcdef1';
const NEW_COMMIT_SHA = 'newcommit1234567890abcdef1234567890abcde';
const FILE_BLOB_SHA = 'blobsha1234567890abcdef1234567890abcdef12';
const OWNER = 'dnd-mapp';
const REPO = 'shared-backend';

const SHORT_NEW_SHA = NEW_SHA.slice(0, 7);
const BRANCH_NAME = `ci/update-sha-references-${SHORT_NEW_SHA}`;

function makeFileContent(sha: string): string {
    return `on:\n  workflow_call:\njobs:\n  release:\n    uses: dnd-mapp/.github/.github/workflows/release.yaml@${sha}\n`;
}

function toBase64(content: string): string {
    return Buffer.from(content).toString('base64');
}

function makeOctokit() {
    const getContent = vi.fn();
    const getRef = vi.fn().mockResolvedValue({ data: { object: { sha: MAIN_SHA } } });
    const createRef = vi.fn().mockResolvedValue({});
    const getCommit = vi.fn().mockResolvedValue({ data: { tree: { sha: TREE_SHA } } });
    const createTree = vi.fn().mockResolvedValue({ data: { sha: NEW_TREE_SHA } });
    const createCommit = vi.fn().mockResolvedValue({ data: { sha: NEW_COMMIT_SHA } });
    const updateRef = vi.fn().mockResolvedValue({});
    const createPr = vi.fn().mockResolvedValue({});

    const octokit = {
        rest: {
            repos: { getContent },
            git: { getRef, createRef, getCommit, createTree, createCommit, updateRef },
            pulls: { create: createPr },
        },
    } as unknown as GithubClient;

    return { octokit, getContent, getRef, createRef, getCommit, createTree, createCommit, updateRef, createPr };
}

function setupDirectoryThenFile(getContent: ReturnType<typeof vi.fn>, fileContent: string): void {
    getContent
        .mockResolvedValueOnce({
            data: [{ name: 'release.yaml', path: '.github/workflows/release.yaml', type: 'file' }],
        })
        .mockResolvedValueOnce({ data: [] }) // .github/actions — empty, no subdirs
        .mockResolvedValueOnce({ data: { content: toBase64(fileContent) } });
}

beforeEach(() => {
    vi.resetAllMocks();
});

describe('propagateSha — no outdated references', () => {
    it('does nothing when no SHA references are present', async () => {
        const { octokit, getContent, createRef } = makeOctokit();

        setupDirectoryThenFile(getContent, 'on:\n  push:\n');

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        expect(createRef).not.toHaveBeenCalled();
    });

    it('does nothing when all SHA references are already up to date', async () => {
        const { octokit, getContent, createRef } = makeOctokit();

        setupDirectoryThenFile(getContent, makeFileContent(NEW_SHA));

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        expect(createRef).not.toHaveBeenCalled();
    });

    it('skips non-yaml files in the workflow directory', async () => {
        const { octokit, getContent, createRef } = makeOctokit();

        getContent
            .mockResolvedValueOnce({
                data: [{ name: 'README.md', path: '.github/workflows/README.md', type: 'file' }],
            })
            .mockResolvedValueOnce({ data: [] }); // .github/actions — empty

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        expect(createRef).not.toHaveBeenCalled();
    });
});

describe('propagateSha — outdated references found', () => {
    it('creates a branch from main HEAD', async () => {
        const { octokit, getContent, getRef, createRef } = makeOctokit();

        setupDirectoryThenFile(getContent, makeFileContent(OLD_SHA));

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        expect(getRef).toHaveBeenCalledWith({ owner: OWNER, repo: REPO, ref: 'heads/main' });
        expect(createRef).toHaveBeenCalledWith({
            owner: OWNER,
            repo: REPO,
            ref: `refs/heads/${BRANCH_NAME}`,
            sha: MAIN_SHA,
        });
    });

    it('commits updated file content to the new branch', async () => {
        const { octokit, getContent, createTree, createCommit, updateRef } = makeOctokit();

        setupDirectoryThenFile(getContent, makeFileContent(OLD_SHA));

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        expect(createTree).toHaveBeenCalledWith(
            expect.objectContaining({
                owner: OWNER,
                repo: REPO,
                base_tree: TREE_SHA,
                tree: [
                    {
                        path: '.github/workflows/release.yaml',
                        mode: '100644',
                        type: 'blob',
                        content: makeFileContent(NEW_SHA),
                    },
                ],
            })
        );
        expect(createCommit).toHaveBeenCalledWith(
            expect.objectContaining({
                owner: OWNER,
                repo: REPO,
                message: `ci: update .github SHA references to ${SHORT_NEW_SHA}`,
                tree: NEW_TREE_SHA,
                parents: [MAIN_SHA],
            })
        );
        expect(updateRef).toHaveBeenCalledWith({
            owner: OWNER,
            repo: REPO,
            ref: `heads/${BRANCH_NAME}`,
            sha: NEW_COMMIT_SHA,
        });
    });

    it('opens a PR targeting main', async () => {
        const { octokit, getContent, createPr } = makeOctokit();

        setupDirectoryThenFile(getContent, makeFileContent(OLD_SHA));

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        expect(createPr).toHaveBeenCalledWith(
            expect.objectContaining({
                owner: OWNER,
                repo: REPO,
                head: BRANCH_NAME,
                base: 'main',
                title: `ci: update .github SHA references to ${SHORT_NEW_SHA}`,
            })
        );
    });

    it('combines multiple file updates into a single commit', async () => {
        const { octokit, getContent, createTree, createCommit, createPr } = makeOctokit();

        getContent
            .mockResolvedValueOnce({
                data: [
                    { name: 'release.yaml', path: '.github/workflows/release.yaml', type: 'file' },
                    { name: 'publish.yaml', path: '.github/workflows/publish.yaml', type: 'file' },
                ],
            })
            .mockResolvedValueOnce({ data: [] }) // .github/actions — empty
            .mockResolvedValueOnce({ data: { content: toBase64(makeFileContent(OLD_SHA)) } })
            .mockResolvedValueOnce({ data: { content: toBase64(makeFileContent(OLD_SHA)) } });

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        expect(createTree).toHaveBeenCalledTimes(1);
        expect(createTree).toHaveBeenCalledWith(
            expect.objectContaining({
                tree: expect.arrayContaining([
                    expect.objectContaining({ path: '.github/workflows/release.yaml' }),
                    expect.objectContaining({ path: '.github/workflows/publish.yaml' }),
                ]),
            })
        );
        expect(createCommit).toHaveBeenCalledTimes(1);
        expect(createPr).toHaveBeenCalledTimes(1);
    });

    it('replaces multiple SHA references within a single file', async () => {
        const { octokit, getContent, createTree } = makeOctokit();
        const multiRefContent =
            `uses: dnd-mapp/.github/.github/workflows/release.yaml@${OLD_SHA}\n` +
            `uses: dnd-mapp/.github/.github/actions/setup-tools@${OLD_SHA}\n`;

        setupDirectoryThenFile(getContent, multiRefContent);

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        const expectedContent =
            `uses: dnd-mapp/.github/.github/workflows/release.yaml@${NEW_SHA}\n` +
            `uses: dnd-mapp/.github/.github/actions/setup-tools@${NEW_SHA}\n`;

        expect(createTree).toHaveBeenCalledWith(
            expect.objectContaining({ tree: [expect.objectContaining({ content: expectedContent })] })
        );
    });
});

describe('propagateSha — action YAML files', () => {
    it('updates SHA references in action YAML files', async () => {
        const { octokit, getContent, createTree } = makeOctokit();
        const actionContent = `runs:\n  using: composite\n  steps:\n    - uses: dnd-mapp/.github/.github/actions/configure-git-bot@${OLD_SHA}\n`;

        getContent
            .mockResolvedValueOnce({ data: [] }) // .github/workflows — empty
            .mockResolvedValueOnce({
                data: [{ name: 'my-action', path: '.github/actions/my-action', type: 'dir' }],
            })
            .mockResolvedValueOnce({
                data: [{ name: 'action.yaml', path: '.github/actions/my-action/action.yaml', type: 'file' }],
            })
            .mockResolvedValueOnce({ data: { content: toBase64(actionContent) } });

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        const expectedContent = actionContent.replace(OLD_SHA, NEW_SHA);
        expect(createTree).toHaveBeenCalledWith(
            expect.objectContaining({
                tree: [
                    expect.objectContaining({
                        path: '.github/actions/my-action/action.yaml',
                        content: expectedContent,
                    }),
                ],
            })
        );
    });

    it('skips non-yaml files in action subdirectories', async () => {
        const { octokit, getContent, createRef } = makeOctokit();

        getContent
            .mockResolvedValueOnce({ data: [] }) // .github/workflows — empty
            .mockResolvedValueOnce({
                data: [{ name: 'my-action', path: '.github/actions/my-action', type: 'dir' }],
            })
            .mockResolvedValueOnce({
                data: [{ name: 'README.md', path: '.github/actions/my-action/README.md', type: 'file' }],
            });

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        expect(createRef).not.toHaveBeenCalled();
    });

    it('proceeds normally when .github/actions directory does not exist', async () => {
        const { octokit, getContent, createRef } = makeOctokit();

        getContent
            .mockResolvedValueOnce({
                data: [{ name: 'release.yaml', path: '.github/workflows/release.yaml', type: 'file' }],
            })
            .mockRejectedValueOnce({ status: 404 }) // .github/actions — not found
            .mockResolvedValueOnce({ data: { content: toBase64(makeFileContent(OLD_SHA)) } });

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        expect(createRef).toHaveBeenCalled();
    });
});

describe('propagateSha — branch already exists', () => {
    it('silently skips when branch creation returns 422', async () => {
        const { octokit, getContent, createRef, createPr } = makeOctokit();

        setupDirectoryThenFile(getContent, makeFileContent(OLD_SHA));
        createRef.mockRejectedValue({ status: 422 });

        await expect(propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA })).resolves.not.toThrow();
        expect(createPr).not.toHaveBeenCalled();
    });

    it('rethrows non-422 errors from branch creation', async () => {
        const { octokit, getContent, createRef } = makeOctokit();

        setupDirectoryThenFile(getContent, makeFileContent(OLD_SHA));
        createRef.mockRejectedValue(new Error('Server error'));

        await expect(propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA })).rejects.toThrow(
            'Server error'
        );
    });
});
