import { insertOrUpdateWatermark, stampStableVersion } from '@/changelog-manager';
import * as core from '@actions/core';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

export async function run() {
    const isPrerelease = process.env['IS_PRERELEASE'] === 'true';
    const version = process.env['CLEAN_VERSION']!;
    const changelogPath = process.env['CHANGELOG_PATH'] ?? 'CHANGELOG.md';

    core.info(`Updating changelog for v${version}`);

    if (isPrerelease) {
        core.debug('Prerelease path: inserting watermark');
        await insertOrUpdateWatermark(changelogPath, `v${version}`);
    } else {
        const templatePath = process.env['RELEASE_NOTES_TEMPLATE_PATH']!;
        const unreleasedTemplate = await readFile(templatePath, { encoding: 'utf-8' });

        await stampStableVersion(changelogPath, version, unreleasedTemplate);
    }
}

/* c8 ignore start */
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    try {
        await run();
    } catch (error) {
        core.setFailed(error instanceof Error ? error.message : String(error));
    }
}
/* c8 ignore stop */
