import {
    extractPrereleaseDelta,
    extractStableNotes,
    insertOrUpdateWatermark,
    stampStableVersion,
} from '@/changelog-manager';

const isPrerelease = process.env['IS_PRERELEASE'] === 'true';
const version = process.env['CLEAN_VERSION']!;
const changelogPath = process.env['CHANGELOG_PATH'] ?? 'CHANGELOG.md';

if (isPrerelease) {
    await extractPrereleaseDelta(changelogPath);
    await insertOrUpdateWatermark(changelogPath, `v${version}`);
} else {
    await extractStableNotes(changelogPath);
    await stampStableVersion(changelogPath, version);
}
