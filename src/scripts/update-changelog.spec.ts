import {
    extractPrereleaseDelta,
    extractStableNotes,
    insertOrUpdateWatermark,
    stampStableVersion,
} from '@/changelog-manager';
import { run } from './update-changelog';

vi.mock('@/changelog-manager', () => ({
    extractPrereleaseDelta: vi.fn(),
    extractStableNotes: vi.fn(),
    insertOrUpdateWatermark: vi.fn(),
    stampStableVersion: vi.fn(),
}));

beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(extractPrereleaseDelta).mockResolvedValue('');
    vi.mocked(extractStableNotes).mockResolvedValue('');
    vi.mocked(insertOrUpdateWatermark).mockResolvedValue();
    vi.mocked(stampStableVersion).mockResolvedValue();
    process.env['CLEAN_VERSION'] = '2.0.0';
    delete process.env['CHANGELOG_PATH'];
});

afterEach(() => {
    delete process.env['IS_PRERELEASE'];
    delete process.env['CLEAN_VERSION'];
    delete process.env['CHANGELOG_PATH'];
});

describe('update-changelog script — prerelease path', () => {
    beforeEach(() => {
        process.env['IS_PRERELEASE'] = 'true';
    });

    it('calls extractPrereleaseDelta with changelogPath', async () => {
        await run();

        expect(extractPrereleaseDelta).toHaveBeenCalledWith('CHANGELOG.md');
    });

    it('calls insertOrUpdateWatermark with v-prefixed version', async () => {
        await run();

        expect(insertOrUpdateWatermark).toHaveBeenCalledWith('CHANGELOG.md', 'v2.0.0');
    });

    it('does not call extractStableNotes or stampStableVersion', async () => {
        await run();

        expect(extractStableNotes).not.toHaveBeenCalled();
        expect(stampStableVersion).not.toHaveBeenCalled();
    });

    it('uses custom CHANGELOG_PATH when set', async () => {
        process.env['CHANGELOG_PATH'] = 'custom/CHANGELOG.md';

        await run();

        expect(extractPrereleaseDelta).toHaveBeenCalledWith('custom/CHANGELOG.md');
        expect(insertOrUpdateWatermark).toHaveBeenCalledWith('custom/CHANGELOG.md', 'v2.0.0');
    });
});

describe('update-changelog script — stable path', () => {
    beforeEach(() => {
        process.env['IS_PRERELEASE'] = 'false';
    });

    it('calls extractStableNotes with changelogPath', async () => {
        await run();

        expect(extractStableNotes).toHaveBeenCalledWith('CHANGELOG.md');
    });

    it('calls stampStableVersion without v prefix', async () => {
        await run();

        expect(stampStableVersion).toHaveBeenCalledWith('CHANGELOG.md', '2.0.0');
    });

    it('does not call extractPrereleaseDelta or insertOrUpdateWatermark', async () => {
        await run();

        expect(extractPrereleaseDelta).not.toHaveBeenCalled();
        expect(insertOrUpdateWatermark).not.toHaveBeenCalled();
    });

    it('uses custom CHANGELOG_PATH when set', async () => {
        process.env['CHANGELOG_PATH'] = 'custom/CHANGELOG.md';

        await run();

        expect(extractStableNotes).toHaveBeenCalledWith('custom/CHANGELOG.md');
        expect(stampStableVersion).toHaveBeenCalledWith('custom/CHANGELOG.md', '2.0.0');
    });

    it('defaults changelogPath to CHANGELOG.md when CHANGELOG_PATH not set', async () => {
        await run();

        expect(extractStableNotes).toHaveBeenCalledWith('CHANGELOG.md');
    });
});
