import { Octokit } from '@octokit/rest';
import { propagateSha } from './sha-propagator';

const OLD_SHA = 'aaaa1111bbbb2222cccc3333dddd4444eeee5555';
const NEW_SHA = 'ffff6666eeee7777dddd8888cccc9999bbbb0000';
const MAIN_SHA = '1234567890abcdef1234567890abcdef12345678';
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
    const createOrUpdateFileContents = vi.fn().mockResolvedValue({});
    const getRef = vi.fn().mockResolvedValue({ data: { object: { sha: MAIN_SHA } } });
    const createRef = vi.fn().mockResolvedValue({});
    const createPr = vi.fn().mockResolvedValue({});

    const octokit = {
        repos: { getContent, createOrUpdateFileContents },
        git: { getRef, createRef },
        pulls: { create: createPr },
    } as unknown as Octokit;

    return { octokit, getContent, createOrUpdateFileContents, getRef, createRef, createPr };
}

function setupDirectoryThenFile(getContent: ReturnType<typeof vi.fn>, fileContent: string): void {
    getContent
        .mockResolvedValueOnce({
            data: [{ name: 'release.yaml', path: '.github/workflows/release.yaml', type: 'file' }],
        })
        .mockResolvedValueOnce({ data: { content: toBase64(fileContent), sha: FILE_BLOB_SHA } });
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

        getContent.mockResolvedValueOnce({
            data: [{ name: 'README.md', path: '.github/workflows/README.md', type: 'file' }],
        });

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
        const { octokit, getContent, createOrUpdateFileContents } = makeOctokit();

        setupDirectoryThenFile(getContent, makeFileContent(OLD_SHA));

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        expect(createOrUpdateFileContents).toHaveBeenCalledWith(
            expect.objectContaining({
                owner: OWNER,
                repo: REPO,
                path: '.github/workflows/release.yaml',
                content: toBase64(makeFileContent(NEW_SHA)),
                sha: FILE_BLOB_SHA,
                branch: BRANCH_NAME,
            })
        );
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

    it('handles multiple workflow files with outdated references', async () => {
        const { octokit, getContent, createOrUpdateFileContents, createPr } = makeOctokit();

        getContent
            .mockResolvedValueOnce({
                data: [
                    { name: 'release.yaml', path: '.github/workflows/release.yaml', type: 'file' },
                    { name: 'publish.yaml', path: '.github/workflows/publish.yaml', type: 'file' },
                ],
            })
            .mockResolvedValueOnce({ data: { content: toBase64(makeFileContent(OLD_SHA)), sha: FILE_BLOB_SHA } })
            .mockResolvedValueOnce({ data: { content: toBase64(makeFileContent(OLD_SHA)), sha: FILE_BLOB_SHA } });

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        expect(createOrUpdateFileContents).toHaveBeenCalledTimes(2);
        expect(createPr).toHaveBeenCalledTimes(1);
    });

    it('replaces multiple SHA references within a single file', async () => {
        const { octokit, getContent, createOrUpdateFileContents } = makeOctokit();
        const multiRefContent =
            `uses: dnd-mapp/.github/.github/workflows/release.yaml@${OLD_SHA}\n` +
            `uses: dnd-mapp/.github/.github/actions/setup-tools@${OLD_SHA}\n`;

        setupDirectoryThenFile(getContent, multiRefContent);

        await propagateSha(octokit, { owner: OWNER, repo: REPO, newSha: NEW_SHA });

        const expectedContent =
            `uses: dnd-mapp/.github/.github/workflows/release.yaml@${NEW_SHA}\n` +
            `uses: dnd-mapp/.github/.github/actions/setup-tools@${NEW_SHA}\n`;

        expect(createOrUpdateFileContents).toHaveBeenCalledWith(
            expect.objectContaining({ content: toBase64(expectedContent) })
        );
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
