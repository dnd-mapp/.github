import { readFile, unlink, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';
import { bumpVersion, deriveReleaseBranchName, writePackageVersion } from './version-bumper';

describe('bumpVersion', () => {
    it('bumps major', () => {
        expect(bumpVersion({ currentVersion: '1.2.3', bumpType: 'major' })).toBe('2.0.0');
    });

    it('bumps minor', () => {
        expect(bumpVersion({ currentVersion: '1.2.3', bumpType: 'minor' })).toBe('1.3.0');
    });

    it('bumps patch', () => {
        expect(bumpVersion({ currentVersion: '1.2.3', bumpType: 'patch' })).toBe('1.2.4');
    });

    it('bumps premajor with alpha preid', () => {
        expect(bumpVersion({ currentVersion: '1.0.0', bumpType: 'premajor', preid: 'alpha' })).toBe('2.0.0-alpha.0');
    });

    it('bumps preminor with beta preid', () => {
        expect(bumpVersion({ currentVersion: '1.0.0', bumpType: 'preminor', preid: 'beta' })).toBe('1.1.0-beta.0');
    });

    it('bumps prepatch with rc preid', () => {
        expect(bumpVersion({ currentVersion: '1.0.0', bumpType: 'prepatch', preid: 'rc' })).toBe('1.0.1-rc.0');
    });

    it('bumps prerelease', () => {
        expect(bumpVersion({ currentVersion: '1.0.0-alpha.0', bumpType: 'prerelease' })).toBe('1.0.0-alpha.1');
    });

    it('promotes prerelease to stable with major', () => {
        expect(bumpVersion({ currentVersion: '2.0.0-rc.0', bumpType: 'major' })).toBe('2.0.0');
    });

    it('throws on invalid bump type', () => {
        expect(() => bumpVersion({ currentVersion: '1.0.0', bumpType: 'invalid' })).toThrow();
    });
});

describe('deriveReleaseBranchName', () => {
    it('returns release branch name for premajor prerelease', () => {
        expect(deriveReleaseBranchName('2.0.0-alpha.0')).toBe('release/v2.0.0');
    });

    it('returns release branch name for preminor prerelease', () => {
        expect(deriveReleaseBranchName('1.1.0-beta.0')).toBe('release/v1.1.0');
    });

    it('returns release branch name for prepatch prerelease', () => {
        expect(deriveReleaseBranchName('1.2.4-rc.5')).toBe('release/v1.2.4');
    });

    it('returns null for stable major', () => {
        expect(deriveReleaseBranchName('2.0.0')).toBeNull();
    });

    it('returns null for stable minor', () => {
        expect(deriveReleaseBranchName('1.3.0')).toBeNull();
    });

    it('returns null for stable patch', () => {
        expect(deriveReleaseBranchName('1.2.4')).toBeNull();
    });
});

describe('writePackageVersion', () => {
    let tmpFile: string;

    beforeEach(async () => {
        tmpFile = join(tmpdir(), `package-${Date.now()}.json`);
        await writeFile(tmpFile, JSON.stringify({ name: 'test', version: '1.0.0', private: true }, null, 2) + '\n');
    });

    afterEach(async () => {
        await unlink(tmpFile).catch(() => undefined);
    });

    it('updates the version field', async () => {
        await writePackageVersion({ manifestPath: tmpFile, newVersion: '2.0.0' });

        const raw = await readFile(tmpFile, { encoding: 'utf-8' });
        const manifest = JSON.parse(raw) as { version: string };

        expect(manifest.version).toBe('2.0.0');
    });

    it('preserves other fields', async () => {
        await writePackageVersion({ manifestPath: tmpFile, newVersion: '2.0.0' });

        const raw = await readFile(tmpFile, { encoding: 'utf-8' });
        const manifest = JSON.parse(raw) as { name: string; private: boolean };

        expect(manifest.name).toBe('test');
        expect(manifest.private).toBe(true);
    });

    it('writes with 2-space indent and trailing newline', async () => {
        await writePackageVersion({ manifestPath: tmpFile, newVersion: '2.0.0' });

        const raw = await readFile(tmpFile, { encoding: 'utf-8' });

        expect(raw).toContain('\n  "version"');
        expect(raw.endsWith('\n')).toBe(true);
    });
});
