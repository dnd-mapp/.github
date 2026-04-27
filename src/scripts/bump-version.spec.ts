import { bumpVersion, deriveReleaseBranchName, writePackageVersion } from '@/version-bumper';
import { appendFile, readFile } from 'fs/promises';
import { run } from './bump-version.mts';

vi.mock('fs/promises', () => ({
    readFile: vi.fn(),
    appendFile: vi.fn(),
    writeFile: vi.fn(),
}));

vi.mock('@/version-bumper', () => ({
    bumpVersion: vi.fn(),
    deriveReleaseBranchName: vi.fn(),
    writePackageVersion: vi.fn(),
}));

beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(readFile).mockResolvedValue('{"version":"1.0.0"}' as unknown as Buffer);
    vi.mocked(bumpVersion).mockReturnValue('1.1.0');
    vi.mocked(deriveReleaseBranchName).mockReturnValue(null);
    vi.mocked(writePackageVersion).mockResolvedValue();
    vi.mocked(appendFile).mockResolvedValue();
    process.env['GITHUB_WORKSPACE'] = '/workspace';
    process.env['GITHUB_OUTPUT'] = '/output';
    process.env['VERSION'] = 'minor';
    process.env['PRERELEASE_ID'] = 'none';
});

afterEach(() => {
    delete process.env['GITHUB_WORKSPACE'];
    delete process.env['GITHUB_OUTPUT'];
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

    it('writes raw-version with v prefix to GITHUB_OUTPUT', async () => {
        await run();

        expect(appendFile).toHaveBeenCalledWith('/output', 'raw-version=v1.1.0\n');
    });

    it('writes clean-version without v prefix to GITHUB_OUTPUT', async () => {
        await run();

        expect(appendFile).toHaveBeenCalledWith('/output', 'clean-version=1.1.0\n');
    });

    it('writes empty release-branch-name when deriveReleaseBranchName returns null', async () => {
        vi.mocked(deriveReleaseBranchName).mockReturnValue(null);

        await run();

        expect(appendFile).toHaveBeenCalledWith('/output', 'release-branch-name=\n');
    });

    it('writes release-branch-name when deriveReleaseBranchName returns a branch', async () => {
        vi.mocked(deriveReleaseBranchName).mockReturnValue('release/v2.0.0');

        await run();

        expect(appendFile).toHaveBeenCalledWith('/output', 'release-branch-name=release/v2.0.0\n');
    });

    it('calls appendFile exactly 3 times', async () => {
        await run();

        expect(appendFile).toHaveBeenCalledTimes(3);
    });
});
