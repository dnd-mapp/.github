import { extractPrereleaseDelta, extractStableNotes } from '@/changelog-manager';
import { createGithubClient } from '@/github-client';
import { publishRelease } from '@/release-publisher';
import { Octokit } from '@octokit/rest';
import { appendFile, readFile } from 'fs/promises';
import { run } from './publish-release';

vi.mock('fs/promises', () => ({
    readFile: vi.fn(),
    appendFile: vi.fn(),
}));

vi.mock('@/changelog-manager', () => ({
    extractPrereleaseDelta: vi.fn(),
    extractStableNotes: vi.fn(),
}));

vi.mock('@/github-client', () => ({
    createGithubClient: vi.fn(),
}));

vi.mock('@/release-publisher', () => ({
    publishRelease: vi.fn(),
}));

const mockOctokit = {} as unknown as Octokit;

beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(createGithubClient).mockReturnValue(mockOctokit);
    vi.mocked(extractPrereleaseDelta).mockResolvedValue('prerelease notes');
    vi.mocked(extractStableNotes).mockResolvedValue('stable notes');
    vi.mocked(publishRelease).mockResolvedValue(undefined as never);
    vi.mocked(appendFile).mockResolvedValue();
    process.env['GITHUB_REPOSITORY'] = 'dnd-mapp/.github';
    process.env['GITHUB_WORKSPACE'] = '/workspace';
    process.env['GH_TOKEN'] = 'gh-token-123';
    process.env['GITHUB_SHA'] = 'deadbeefcafe';
    process.env['GITHUB_OUTPUT'] = '/output';
    delete process.env['CHANGELOG_PATH'];
});

afterEach(() => {
    delete process.env['GITHUB_REPOSITORY'];
    delete process.env['GITHUB_WORKSPACE'];
    delete process.env['GH_TOKEN'];
    delete process.env['GITHUB_SHA'];
    delete process.env['GITHUB_OUTPUT'];
    delete process.env['CHANGELOG_PATH'];
});

describe('publish-release script — prerelease version', () => {
    beforeEach(() => {
        vi.mocked(readFile).mockResolvedValue('{"version":"2.0.0-alpha.0"}');
    });

    it('calls extractPrereleaseDelta (not extractStableNotes)', async () => {
        await run();

        expect(extractPrereleaseDelta).toHaveBeenCalledOnce();
        expect(extractStableNotes).not.toHaveBeenCalled();
    });

    it('defaults changelogPath to CHANGELOG.md when CHANGELOG_PATH not set', async () => {
        await run();

        expect(extractPrereleaseDelta).toHaveBeenCalledWith('CHANGELOG.md');
    });

    it('uses CHANGELOG_PATH when set', async () => {
        process.env['CHANGELOG_PATH'] = 'custom/CHANGELOG.md';

        await run();

        expect(extractPrereleaseDelta).toHaveBeenCalledWith('custom/CHANGELOG.md');
    });

    it('writes is-prerelease=true to GITHUB_OUTPUT', async () => {
        await run();

        expect(appendFile).toHaveBeenCalledWith('/output', 'is-prerelease=true\n');
    });

    it('passes GITHUB_SHA as commitSha to publishRelease', async () => {
        await run();

        expect(publishRelease).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({ commitSha: 'deadbeefcafe' })
        );
    });
});

describe('publish-release script — stable version', () => {
    beforeEach(() => {
        vi.mocked(readFile).mockResolvedValue('{"version":"1.2.3"}');
    });

    it('calls extractStableNotes (not extractPrereleaseDelta)', async () => {
        await run();

        expect(extractStableNotes).toHaveBeenCalledOnce();
        expect(extractPrereleaseDelta).not.toHaveBeenCalled();
    });

    it('defaults changelogPath to CHANGELOG.md when CHANGELOG_PATH not set', async () => {
        await run();

        expect(extractStableNotes).toHaveBeenCalledWith('CHANGELOG.md');
    });

    it('uses CHANGELOG_PATH when set', async () => {
        process.env['CHANGELOG_PATH'] = 'custom/CHANGELOG.md';

        await run();

        expect(extractStableNotes).toHaveBeenCalledWith('custom/CHANGELOG.md');
    });

    it('writes is-prerelease=false to GITHUB_OUTPUT', async () => {
        await run();

        expect(appendFile).toHaveBeenCalledWith('/output', 'is-prerelease=false\n');
    });
});
