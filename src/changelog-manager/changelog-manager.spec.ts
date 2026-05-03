import { readFile, unlink, writeFile } from 'fs/promises';
import { join } from 'path';
import {
    extractPrereleaseDelta,
    extractStableNotes,
    insertOrUpdateWatermark,
    stampStableVersion,
} from './changelog-manager';

const UNRELEASED_TEMPLATE = `## [Unreleased]

### Added

- (n/a)

### Fixed

- (n/a)

---
`;

const CHANGELOG_WITH_CONTENT = `# Changelog

## [Unreleased]

### Added
- New feature A

### Fixed
- Bug fix B

---

## [1.0.0] - 2024-01-01

### Added
- Initial release
`;

const CHANGELOG_WITH_WATERMARK = `# Changelog

## [Unreleased]

### Added
- New feature A

<!-- prerelease: v1.1.0-alpha.1 -->

---

## [1.0.0] - 2024-01-01

### Added
- Initial release
`;

const CHANGELOG_EMPTY_UNRELEASED = `# Changelog

## [Unreleased]

---

## [1.0.0] - 2024-01-01
`;

const CHANGELOG_NO_SEPARATOR = `# Changelog

## [Unreleased]

### Added
- New feature A

## [1.0.0] - 2024-01-01

### Added
- Initial release
`;

const CHANGELOG_STANDALONE = `# Changelog

## [Unreleased]

### Added
- New feature A
`;

async function createTempChangelog(content: string): Promise<string> {
    const path = join(`CHANGELOG-${Date.now()}.md`);

    await writeFile(path, content, { encoding: 'utf-8' });

    return path;
}

describe('insertOrUpdateWatermark', () => {
    let tmpFile: string;

    afterEach(async () => {
        await unlink(tmpFile).catch(() => undefined);
    });

    it('inserts watermark when none exists', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_WITH_CONTENT);

        await insertOrUpdateWatermark(tmpFile, 'v1.1.0-alpha.1');

        const result = await readFile(tmpFile, { encoding: 'utf-8' });

        expect(result).toContain('<!-- prerelease: v1.1.0-alpha.1 -->');
    });

    it('updates existing watermark version', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_WITH_WATERMARK);

        await insertOrUpdateWatermark(tmpFile, 'v1.1.0-alpha.2');

        const result = await readFile(tmpFile, { encoding: 'utf-8' });

        expect(result).toContain('<!-- prerelease: v1.1.0-alpha.2 -->');
        expect(result).not.toContain('<!-- prerelease: v1.1.0-alpha.1 -->');
    });
});

describe('extractPrereleaseDelta', () => {
    let tmpFile: string;

    afterEach(async () => {
        await unlink(tmpFile).catch(() => undefined);
    });

    it('returns full unreleased content when no watermark', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_WITH_CONTENT);

        const delta = await extractPrereleaseDelta(tmpFile);

        expect(delta).toContain('New feature A');
        expect(delta).toContain('Bug fix B');
    });

    it('returns only content above watermark when watermark present', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_WITH_WATERMARK);

        const delta = await extractPrereleaseDelta(tmpFile);

        expect(delta).toContain('New feature A');
        expect(delta).not.toContain('<!-- prerelease:');
    });

    it('returns empty string for empty unreleased section', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_EMPTY_UNRELEASED);

        const delta = await extractPrereleaseDelta(tmpFile);

        expect(delta).toBe('');
    });

    it('returns content when there is no --- separator (next ## section ends the block)', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_NO_SEPARATOR);

        const delta = await extractPrereleaseDelta(tmpFile);

        expect(delta).toContain('New feature A');
    });

    it('returns content when there is no following section at all', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_STANDALONE);

        const delta = await extractPrereleaseDelta(tmpFile);

        expect(delta).toContain('New feature A');
    });
});

describe('extractStableNotes', () => {
    let tmpFile: string;

    afterEach(async () => {
        await unlink(tmpFile).catch(() => undefined);
    });

    it('returns the body of the versioned section', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_WITH_CONTENT);

        const notes = await extractStableNotes(tmpFile, '1.0.0');

        expect(notes).toContain('Initial release');
    });

    it('throws when the versioned section is not found', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_WITH_CONTENT);

        await expect(extractStableNotes(tmpFile, '9.9.9')).rejects.toThrow('No [9.9.9] section found in changelog.');
    });
});

describe('stampStableVersion', () => {
    let tmpFile: string;

    afterEach(async () => {
        await unlink(tmpFile).catch(() => undefined);
    });

    it('replaces [Unreleased] heading with versioned entry', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_WITH_WATERMARK);

        await stampStableVersion(tmpFile, '1.1.0', UNRELEASED_TEMPLATE);

        const result = await readFile(tmpFile, { encoding: 'utf-8' });
        const today = new Date().toISOString().slice(0, 10);

        expect(result).toContain(`## [1.1.0] - ${today}`);
    });

    it('inserts a fresh [Unreleased] section at the top', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_WITH_WATERMARK);

        await stampStableVersion(tmpFile, '1.1.0', UNRELEASED_TEMPLATE);

        const result = await readFile(tmpFile, { encoding: 'utf-8' });
        const unreleasedIdx = result.indexOf('## [Unreleased]');
        const versionedIdx = result.indexOf('## [1.1.0]');

        expect(unreleasedIdx).toBeGreaterThanOrEqual(0);
        expect(versionedIdx).toBeGreaterThan(unreleasedIdx);
    });

    it('removes watermark from the changelog', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_WITH_WATERMARK);

        await stampStableVersion(tmpFile, '1.1.0', UNRELEASED_TEMPLATE);

        const result = await readFile(tmpFile, { encoding: 'utf-8' });

        expect(result).not.toContain('<!-- prerelease:');
    });

    it('handles missing watermark on stable stamp', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_WITH_CONTENT);

        await expect(stampStableVersion(tmpFile, '1.1.0', UNRELEASED_TEMPLATE)).resolves.not.toThrow();

        const result = await readFile(tmpFile, { encoding: 'utf-8' });
        const today = new Date().toISOString().slice(0, 10);

        expect(result).toContain(`## [1.1.0] - ${today}`);
    });

    it('stamps stable version with empty unreleased section (no body)', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_EMPTY_UNRELEASED);

        await stampStableVersion(tmpFile, '1.1.0', UNRELEASED_TEMPLATE);

        const result = await readFile(tmpFile, { encoding: 'utf-8' });
        const today = new Date().toISOString().slice(0, 10);

        expect(result).toContain(`## [1.1.0] - ${today}`);
        expect(result).toContain('## [Unreleased]');
    });

    it('uses the provided template for the fresh [Unreleased] section', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_WITH_WATERMARK);

        await stampStableVersion(tmpFile, '1.1.0', UNRELEASED_TEMPLATE);

        const result = await readFile(tmpFile, { encoding: 'utf-8' });

        expect(result).toMatch(/## \[Unreleased\][\s\S]+### Added[\s\S]+- \(n\/a\)/);
    });

    it('strips (n/a) placeholder entries from the versioned section', async () => {
        const changelogWithNa = `# Changelog\n\n## [Unreleased]\n\n### Added\n\n- New feature\n\n### Fixed\n\n- (n/a)\n\n---\n\n## [1.0.0] - 2024-01-01\n`;
        tmpFile = await createTempChangelog(changelogWithNa);

        await stampStableVersion(tmpFile, '1.1.0', UNRELEASED_TEMPLATE);

        const result = await readFile(tmpFile, { encoding: 'utf-8' });
        const versionedStart = result.indexOf('## [1.1.0]');
        const nextSection = result.indexOf('\n---', versionedStart);
        const versionedBody = result.slice(versionedStart, nextSection);

        expect(versionedBody).toContain('New feature');
        expect(versionedBody).not.toContain('(n/a)');
        expect(versionedBody).not.toContain('### Fixed');
    });

    it('omits versioned body entirely when all entries are (n/a)', async () => {
        const changelogAllNa = `# Changelog\n\n## [Unreleased]\n\n### Added\n\n- (n/a)\n\n### Fixed\n\n- (n/a)\n\n---\n`;
        tmpFile = await createTempChangelog(changelogAllNa);

        await stampStableVersion(tmpFile, '1.1.0', UNRELEASED_TEMPLATE);

        const result = await readFile(tmpFile, { encoding: 'utf-8' });
        const today = new Date().toISOString().slice(0, 10);
        const versionedStart = result.indexOf(`## [1.1.0] - ${today}`);
        const nextSep = result.indexOf('\n---', versionedStart);
        const versionedSection = result.slice(versionedStart, nextSep);

        expect(versionedStart).toBeGreaterThanOrEqual(0);
        expect(versionedSection.trim()).toBe(`## [1.1.0] - ${today}`);
    });

    it('separates the version header from the body with a blank line', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_WITH_CONTENT);

        await stampStableVersion(tmpFile, '1.1.0', UNRELEASED_TEMPLATE);

        const result = await readFile(tmpFile, { encoding: 'utf-8' });
        const today = new Date().toISOString().slice(0, 10);

        expect(result).toMatch(new RegExp(`## \\[1\\.1\\.0\\] - ${today}\n\n### `));
    });

    it('separates the versioned section from the previous section with a blank line', async () => {
        tmpFile = await createTempChangelog(CHANGELOG_WITH_CONTENT);

        await stampStableVersion(tmpFile, '1.1.0', UNRELEASED_TEMPLATE);

        const result = await readFile(tmpFile, { encoding: 'utf-8' });

        expect(result).toMatch(/## \[1\.1\.0\][^\n]*\n[\s\S]+?\n\n---\n\n## \[1\.0\.0\]/);
    });
});
