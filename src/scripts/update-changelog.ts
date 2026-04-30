import { insertOrUpdateWatermark, stampStableVersion } from '@/changelog-manager';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

export async function run(): Promise<void> {
    const isPrerelease = process.env['IS_PRERELEASE'] === 'true';
    const version = process.env['CLEAN_VERSION']!;
    const changelogPath = process.env['CHANGELOG_PATH'] ?? 'CHANGELOG.md';

    if (isPrerelease) {
        await insertOrUpdateWatermark(changelogPath, `v${version}`);
    } else {
        const templatePath = process.env['RELEASE_NOTES_TEMPLATE_PATH']!;
        const unreleasedTemplate = await readFile(templatePath, { encoding: 'utf-8' });

        await stampStableVersion(changelogPath, version, unreleasedTemplate);
    }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    await run();
}
