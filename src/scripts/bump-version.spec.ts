import { bumpVersion, deriveReleaseBranchName, writePackageVersion } from '@/version-bumper';
import * as core from '@actions/core';
import { readFile } from 'fs/promises';
import { run } from './bump-version';

vi.mock('@actions/core', () => ({
    info: vi.fn(),
    debug: vi.fn(),
    setOutput: vi.fn(),
    setFailed: vi.fn(),
}));

vi.mock('fs/promises', () => ({
    readFile: vi.fn(),
    writeFile: vi.fn(),
}));

vi.mock('@/version-bumper', () => ({
    bumpVersion: vi.fn(),
    deriveReleaseBranchName: vi.fn(),
    writePackageVersion: vi.fn(),
}));

beforeEach(() => {
    vi.resetAllMocks();

    vi.mocked(readFile).mockResolvedValue('{"version":"1.0.0"}');
    vi.mocked(bumpVersion).mockReturnValue('1.1.0');
    vi.mocked(deriveReleaseBranchName).mockReturnValue(null);
    vi.mocked(writePackageVersion).mockResolvedValue();

    process.env['GITHUB_WORKSPACE'] = '/workspace';
    process.env['VERSION'] = 'minor';
    process.env['PRERELEASE_ID'] = 'none';
});

afterEach(() => {
    delete process.env['GITHUB_WORKSPACE'];
    delete process.env['VERSION'];
    delete process.env['PRERELEASE_ID'];
});

describe('bump-version script', () => {
    it('reads package.json from GITHUB_WORKSPACE', async () => {
        await run();

        expect(readFile).toHaveBeenCalledWith('/workspace/package.json', 'utf-8');
    });

    it('passes preid as undefined when PRERELEASE_ID is "none"', async () => {
        process.env['PRERELEASE_ID'] = 'none';

        await run();

        expect(bumpVersion).toHaveBeenCalledWith(expect.objectContaining({ preid: undefined }));
    });

    it('passes preid through when PRERELEASE_ID is a value', async () => {
        process.env['PRERELEASE_ID'] = 'alpha';

        await run();

        expect(bumpVersion).toHaveBeenCalledWith(expect.objectContaining({ preid: 'alpha' }));
    });

    it('sets raw-version output with v prefix', async () => {
        await run();

        expect(core.setOutput).toHaveBeenCalledWith('raw-version', 'v1.1.0');
    });

    it('sets clean-version output without v prefix', async () => {
        await run();

        expect(core.setOutput).toHaveBeenCalledWith('clean-version', '1.1.0');
    });

    it('sets empty release-branch-name when deriveReleaseBranchName returns null', async () => {
        vi.mocked(deriveReleaseBranchName).mockReturnValue(null);

        await run();

        expect(core.setOutput).toHaveBeenCalledWith('release-branch-name', '');
    });

    it('sets release-branch-name when deriveReleaseBranchName returns a branch', async () => {
        vi.mocked(deriveReleaseBranchName).mockReturnValue('release/v2.0.0');

        await run();

        expect(core.setOutput).toHaveBeenCalledWith('release-branch-name', 'release/v2.0.0');
    });

    it('calls setOutput exactly 3 times', async () => {
        await run();

        expect(core.setOutput).toHaveBeenCalledTimes(3);
    });
});
