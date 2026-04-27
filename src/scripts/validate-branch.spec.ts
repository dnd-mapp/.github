import { validateRelease } from '@/branch-validator';
import { createGithubClient } from '@/github-client';
import { Octokit } from '@octokit/rest';
import { appendFile, readFile } from 'fs/promises';
import { run } from './validate-branch';

vi.mock('fs/promises', () => ({
    readFile: vi.fn(),
    appendFile: vi.fn(),
}));

vi.mock('@/branch-validator', () => ({
    validateRelease: vi.fn(),
}));

vi.mock('@/github-client', () => ({
    createGithubClient: vi.fn(),
}));

const mockOctokit = {} as unknown as Octokit;

beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(readFile).mockResolvedValue('{"version":"1.0.0"}');
    vi.mocked(validateRelease).mockResolvedValue({ isPrerelease: false });
    vi.mocked(createGithubClient).mockReturnValue(mockOctokit);
    vi.mocked(appendFile).mockResolvedValue();
    process.env['GITHUB_REPOSITORY'] = 'dnd-mapp/.github';
    process.env['GITHUB_WORKSPACE'] = '/workspace';
    process.env['GITHUB_TOKEN'] = 'github-token-123';
    process.env['GITHUB_REF_NAME'] = 'main';
    process.env['VERSION'] = 'minor';
    process.env['PRERELEASE_ID'] = 'none';
    process.env['GITHUB_OUTPUT'] = '/output';
});

afterEach(() => {
    delete process.env['GITHUB_REPOSITORY'];
    delete process.env['GITHUB_WORKSPACE'];
    delete process.env['GITHUB_TOKEN'];
    delete process.env['GITHUB_REF_NAME'];
    delete process.env['VERSION'];
    delete process.env['PRERELEASE_ID'];
    delete process.env['GITHUB_OUTPUT'];
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

    it('passes all env vars to validateRelease', async () => {
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

    it('writes is-prerelease=true when validateRelease returns isPrerelease: true', async () => {
        vi.mocked(validateRelease).mockResolvedValue({ isPrerelease: true });

        await run();

        expect(appendFile).toHaveBeenCalledWith('/output', 'is-prerelease=true\n');
    });

    it('writes is-prerelease=false when validateRelease returns isPrerelease: false', async () => {
        vi.mocked(validateRelease).mockResolvedValue({ isPrerelease: false });

        await run();

        expect(appendFile).toHaveBeenCalledWith('/output', 'is-prerelease=false\n');
    });
});
