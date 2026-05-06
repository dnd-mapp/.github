import { validateRelease } from '@/branch-validator';
import type { GithubClient } from '@/github-client';
import { createGithubClient } from '@/github-client';
import * as core from '@actions/core';
import { readFile } from 'fs/promises';
import { run } from './validate-branch';

vi.mock('fs/promises', () => ({
    readFile: vi.fn(),
}));

vi.mock('@/branch-validator', () => ({
    validateRelease: vi.fn(),
}));

vi.mock('@/github-client', () => ({
    createGithubClient: vi.fn(),
}));

vi.mock('@actions/github', () => ({
    context: { repo: { owner: 'dnd-mapp', repo: '.github' } },
}));

vi.mock('@actions/core', () => ({
    info: vi.fn(),
    debug: vi.fn(),
    setOutput: vi.fn(),
    setFailed: vi.fn(),
}));

const mockOctokit = {} as unknown as GithubClient;

beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(readFile).mockResolvedValue('{"version":"1.0.0"}');
    vi.mocked(validateRelease).mockResolvedValue({ isPrerelease: false });
    vi.mocked(createGithubClient).mockReturnValue(mockOctokit);
    process.env['GITHUB_WORKSPACE'] = '/workspace';
    process.env['GITHUB_TOKEN'] = 'github-token-123';
    process.env['GITHUB_REF_NAME'] = 'main';
    process.env['VERSION'] = 'minor';
    process.env['PRERELEASE_ID'] = 'none';
});

afterEach(() => {
    delete process.env['GITHUB_WORKSPACE'];
    delete process.env['GITHUB_TOKEN'];
    delete process.env['GITHUB_REF_NAME'];
    delete process.env['VERSION'];
    delete process.env['PRERELEASE_ID'];
});

describe('validate-branch script', () => {
    it('reads package.json from GITHUB_WORKSPACE', async () => {
        await run();

        expect(readFile).toHaveBeenCalledWith('/workspace/package.json', 'utf-8');
    });

    it('creates github client with GITHUB_TOKEN (not GH_TOKEN)', async () => {
        await run();

        expect(createGithubClient).toHaveBeenCalledWith('github-token-123');
    });

    it('passes context repo and env vars to validateRelease', async () => {
        process.env['GITHUB_REF_NAME'] = 'release/v2.0.0';
        process.env['VERSION'] = 'prerelease';
        process.env['PRERELEASE_ID'] = 'beta';

        await run();

        expect(validateRelease).toHaveBeenCalledWith(
            mockOctokit,
            expect.objectContaining({
                owner: 'dnd-mapp',
                repo: '.github',
                currentBranch: 'release/v2.0.0',
                versionInput: 'prerelease',
                prereleaseIdInput: 'beta',
                currentVersion: '1.0.0',
            })
        );
    });

    it('sets is-prerelease output to true when validateRelease returns isPrerelease: true', async () => {
        vi.mocked(validateRelease).mockResolvedValue({ isPrerelease: true });

        await run();

        expect(core.setOutput).toHaveBeenCalledWith('is-prerelease', true);
    });

    it('sets is-prerelease output to false when validateRelease returns isPrerelease: false', async () => {
        vi.mocked(validateRelease).mockResolvedValue({ isPrerelease: false });

        await run();

        expect(core.setOutput).toHaveBeenCalledWith('is-prerelease', false);
    });
});
