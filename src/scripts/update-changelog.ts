import {
    extractPrereleaseDelta,
    extractStableNotes,
    insertOrUpdateWatermark,
    stampStableVersion,
} from '@/changelog-manager';
import { fileURLToPath } from 'url';

export async function run(): Promise<void> {
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
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    await run();
}
