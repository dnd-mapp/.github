import { insertOrUpdateWatermark, stampStableVersion } from '@/changelog-manager';
import { join } from 'path';
import { run } from './update-changelog';

vi.mock('@/changelog-manager', () => ({
    insertOrUpdateWatermark: vi.fn(),
    stampStableVersion: vi.fn(),
}));

beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(insertOrUpdateWatermark).mockResolvedValue();
    vi.mocked(stampStableVersion).mockResolvedValue();
    process.env['CLEAN_VERSION'] = '2.0.0';
    process.env['RELEASE_NOTES_TEMPLATE_PATH'] = join(
        process.cwd(),
        '.github',
        'actions',
        'update-changelog',
        'release-notes-template.md'
    );
    delete process.env['CHANGELOG_PATH'];
});

afterEach(() => {
    delete process.env['IS_PRERELEASE'];
    delete process.env['CLEAN_VERSION'];
    delete process.env['CHANGELOG_PATH'];
    delete process.env['RELEASE_NOTES_TEMPLATE_PATH'];
});

describe('update-changelog script — prerelease path', () => {
    beforeEach(() => {
        process.env['IS_PRERELEASE'] = 'true';
    });

    it('calls insertOrUpdateWatermark with v-prefixed version', async () => {
        await run();

        expect(insertOrUpdateWatermark).toHaveBeenCalledWith('CHANGELOG.md', 'v2.0.0');
    });

    it('does not call stampStableVersion', async () => {
        await run();

        expect(stampStableVersion).not.toHaveBeenCalled();
    });

    it('uses custom CHANGELOG_PATH when set', async () => {
        process.env['CHANGELOG_PATH'] = 'custom/CHANGELOG.md';

        await run();

        expect(insertOrUpdateWatermark).toHaveBeenCalledWith('custom/CHANGELOG.md', 'v2.0.0');
    });
});

describe('update-changelog script — stable path', () => {
    beforeEach(() => {
        process.env['IS_PRERELEASE'] = 'false';
    });

    it('calls stampStableVersion without v prefix', async () => {
        await run();

        expect(stampStableVersion).toHaveBeenCalledWith('CHANGELOG.md', '2.0.0', expect.any(String));
    });

    it('does not call insertOrUpdateWatermark', async () => {
        await run();

        expect(insertOrUpdateWatermark).not.toHaveBeenCalled();
    });

    it('uses custom CHANGELOG_PATH when set', async () => {
        process.env['CHANGELOG_PATH'] = 'custom/CHANGELOG.md';

        await run();

        expect(stampStableVersion).toHaveBeenCalledWith('custom/CHANGELOG.md', '2.0.0', expect.any(String));
    });

    it('defaults changelogPath to CHANGELOG.md when CHANGELOG_PATH not set', async () => {
        await run();

        expect(stampStableVersion).toHaveBeenCalledWith('CHANGELOG.md', '2.0.0', expect.any(String));
    });
});
