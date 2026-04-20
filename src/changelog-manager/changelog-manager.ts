import { readFile, writeFile } from 'fs/promises';

const WATERMARK_REGEX = /<!-- prerelease: .+? -->/;

function makeWatermark(version: string): string {
    return `<!-- prerelease: ${version} -->`;
}

function splitChangelog(content: string): { before: string; section: string; after: string } {
    const headerText = '## [Unreleased]';
    const start = content.indexOf(headerText);

    if (start === -1) {
        throw new Error('No [Unreleased] section found in changelog.');
    }

    const afterHeader = start + headerText.length;
    const separatorIdx = content.indexOf('\n---', afterHeader);
    const nextSectionIdx = content.indexOf('\n## [', afterHeader);

    let end: number;

    if (separatorIdx !== -1 && (nextSectionIdx === -1 || separatorIdx < nextSectionIdx)) {
        end = separatorIdx;
    } else if (nextSectionIdx !== -1) {
        end = nextSectionIdx;
    } else {
        end = content.length;
    }

    return {
        before: content.slice(0, start),
        section: content.slice(start, end),
        after: content.slice(end),
    };
}

function getSectionBody(section: string): string {
    const newlineIdx = section.indexOf('\n');

    return newlineIdx === -1 ? '' : section.slice(newlineIdx + 1);
}

export async function insertOrUpdateWatermark(changelogPath: string, version: string): Promise<void> {
    const content = await readFile(changelogPath, { encoding: 'utf-8' });
    const { before, section, after } = splitChangelog(content);
    const watermark = makeWatermark(version);

    let newSection: string;

    if (WATERMARK_REGEX.test(section)) {
        newSection = section.replace(WATERMARK_REGEX, watermark);
    } else {
        newSection = section.trimEnd() + '\n\n' + watermark + '\n';
    }

    await writeFile(changelogPath, before + newSection + after, { encoding: 'utf-8' });
}

export async function extractPrereleaseDelta(changelogPath: string): Promise<string> {
    const content = await readFile(changelogPath, { encoding: 'utf-8' });
    const { section } = splitChangelog(content);
    const body = getSectionBody(section);
    const watermarkIdx = body.search(WATERMARK_REGEX);

    if (watermarkIdx !== -1) {
        return body.slice(0, watermarkIdx).trim();
    }

    return body.trim();
}

export async function extractStableNotes(changelogPath: string): Promise<string> {
    return extractPrereleaseDelta(changelogPath);
}

export async function stampStableVersion(changelogPath: string, version: string): Promise<void> {
    const content = await readFile(changelogPath, { encoding: 'utf-8' });
    const { before, section, after } = splitChangelog(content);
    const date = new Date().toISOString().slice(0, 10);

    let body = getSectionBody(section);

    body = body.replace(/\n?<!-- prerelease: .+? -->\n?/g, '\n');
    body = body.replace(/\n{3,}/g, '\n\n').trimEnd();

    const versionedSection = `## [${version}] - ${date}${body ? '\n' + body : ''}`;
    const freshUnreleased = '## [Unreleased]\n';

    await writeFile(changelogPath, before + freshUnreleased + '\n---\n\n' + versionedSection + after, {
        encoding: 'utf-8',
    });
}
