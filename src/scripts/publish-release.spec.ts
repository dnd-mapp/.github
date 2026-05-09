import { extractPrereleaseDelta, extractStableNotes } from '@/changelog-manager';
import type { GithubClient } from '@/github-client';
import { createGithubClient } from '@/github-client';
import { publishRelease } from '@/release-publisher';
import * as core from '@actions/core';
import { readFile } from 'fs/promises';
import { run } from './publish-release';

vi.mock('fs/promises', () => ({
    readFile: vi.fn(),
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

vi.mock('@actions/github', () => ({
    context: { repo: { owner: 'dnd-mapp', repo: '.github' }, sha: 'deadbeefcafe' },
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
    vi.mocked(createGithubClient).mockReturnValue(mockOctokit);
    vi.mocked(extractPrereleaseDelta).mockResolvedValue('prerelease notes');
    vi.mocked(extractStableNotes).mockResolvedValue('stable notes');
    vi.mocked(publishRelease).mockResolvedValue(undefined);
    process.env['GITHUB_WORKSPACE'] = '/workspace';
    process.env['GH_TOKEN'] = 'gh-token-123';
    process.env['BOT_NAME'] = 'dnd-mapp[bot]';
    process.env['BOT_EMAIL'] = '208279662+dnd-mapp[bot]@users.noreply.github.com';
    delete process.env['CHANGELOG_PATH'];
});

afterEach(() => {
    delete process.env['GITHUB_WORKSPACE'];
    delete process.env['GH_TOKEN'];
    delete process.env['BOT_NAME'];
    delete process.env['BOT_EMAIL'];
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

    it('sets is-prerelease output to true', async () => {
        await run();

        expect(core.setOutput).toHaveBeenCalledWith('is-prerelease', true);
    });

    it('passes context.sha as commitSha to publishRelease', async () => {
        await run();

        expect(publishRelease).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({ commitSha: 'deadbeefcafe' })
        );
    });

    it('passes BOT_NAME as taggerName to publishRelease', async () => {
        await run();

        expect(publishRelease).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({ taggerName: 'dnd-mapp[bot]' })
        );
    });

    it('passes BOT_EMAIL as taggerEmail to publishRelease', async () => {
        await run();

        expect(publishRelease).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({ taggerEmail: '208279662+dnd-mapp[bot]@users.noreply.github.com' })
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

        expect(extractStableNotes).toHaveBeenCalledWith('CHANGELOG.md', '1.2.3');
    });

    it('uses CHANGELOG_PATH when set', async () => {
        process.env['CHANGELOG_PATH'] = 'custom/CHANGELOG.md';

        await run();

        expect(extractStableNotes).toHaveBeenCalledWith('custom/CHANGELOG.md', '1.2.3');
    });

    it('sets is-prerelease output to false', async () => {
        await run();

        expect(core.setOutput).toHaveBeenCalledWith('is-prerelease', false);
    });
});
