import type { GithubClient } from '@/github-client';
import { validateRelease } from './branch-validator';

const makeOctokit = (branches: string[] = []) =>
    ({
        rest: {
            repos: {
                listBranches: vi.fn().mockResolvedValue({
                    data: branches.map((name) => ({ name })),
                }),
            },
        },
    }) as unknown as GithubClient;

const BASE_PARAMS = {
    owner: 'dnd-mapp',
    repo: '.github',
    currentBranch: 'main',
    versionInput: 'minor',
    prereleaseIdInput: 'none',
    currentVersion: '1.0.0',
};

beforeEach(() => {
    vi.resetAllMocks();
});

describe('validateRelease — input-shape validation', () => {
    it('throws on invalid version input', async () => {
        const octokit = makeOctokit();

        await expect(validateRelease(octokit, { ...BASE_PARAMS, versionInput: 'invalid' })).rejects.toThrow(
            'Invalid version'
        );
    });

    it('throws on invalid prerelease-id input', async () => {
        const octokit = makeOctokit();

        await expect(validateRelease(octokit, { ...BASE_PARAMS, prereleaseIdInput: 'gamma' })).rejects.toThrow(
            'Invalid prerelease-id'
        );
    });

    it('Rule 1: throws when starting prerelease track without explicit preid', async () => {
        const octokit = makeOctokit();

        await expect(
            validateRelease(octokit, { ...BASE_PARAMS, versionInput: 'premajor', prereleaseIdInput: 'none' })
        ).rejects.toThrow('Rule 1 violation');
    });

    it('Rule 2: throws when using prerelease on stable version', async () => {
        const octokit = makeOctokit();

        await expect(validateRelease(octokit, { ...BASE_PARAMS, versionInput: 'prerelease' })).rejects.toThrow(
            'Rule 2 violation'
        );
    });

    it('Rule 4: throws when bumping preminor from premajor track', async () => {
        const octokit = makeOctokit();

        await expect(
            validateRelease(octokit, {
                ...BASE_PARAMS,
                versionInput: 'minor',
                currentVersion: '2.0.0-alpha.0',
            })
        ).rejects.toThrow('Rule 4 violation');
    });

    it('Rule 5: throws when bumping prepatch from preminor track', async () => {
        const octokit = makeOctokit();

        await expect(
            validateRelease(octokit, {
                ...BASE_PARAMS,
                versionInput: 'patch',
                currentVersion: '1.1.0-alpha.0',
            })
        ).rejects.toThrow('Rule 5 violation');
    });

    it('Rule 6: throws when bumping premajor is not allowed from prepatch track', async () => {
        const octokit = makeOctokit();

        await expect(
            validateRelease(octokit, {
                ...BASE_PARAMS,
                versionInput: 'minor',
                currentVersion: '1.0.1-alpha.0',
            })
        ).rejects.toThrow('Rule 6 violation');
    });

    it('Rules 7-9: throws on backwards identifier progression', async () => {
        const octokit = makeOctokit();

        await expect(
            validateRelease(octokit, {
                ...BASE_PARAMS,
                versionInput: 'prerelease',
                prereleaseIdInput: 'alpha',
                currentVersion: '1.0.0-rc.0',
            })
        ).rejects.toThrow('Rules 7-9 violation');
    });
});

describe('validateRelease — branch-context validation', () => {
    it('returns isPrerelease: false for valid stable bump on main with no release branch', async () => {
        const octokit = makeOctokit([]);

        const result = await validateRelease(octokit, BASE_PARAMS);

        expect(result.isPrerelease).toBe(false);
    });

    it('returns isPrerelease: true for valid prerelease init on main with no release branch', async () => {
        const octokit = makeOctokit([]);

        const result = await validateRelease(octokit, {
            ...BASE_PARAMS,
            versionInput: 'premajor',
            prereleaseIdInput: 'alpha',
        });

        expect(result.isPrerelease).toBe(true);
    });

    it('Rule A: throws when starting new prerelease track from release branch', async () => {
        const octokit = makeOctokit(['release/v2.0.0']);

        await expect(
            validateRelease(octokit, {
                ...BASE_PARAMS,
                currentBranch: 'release/v2.0.0',
                versionInput: 'premajor',
                prereleaseIdInput: 'alpha',
                currentVersion: '1.0.0', // stable — bypasses track lock-in rules
            })
        ).rejects.toThrow('Rule A violation');
    });

    it('Rule B: throws on stable bump from main with active release branch', async () => {
        const octokit = makeOctokit(['release/v2.0.0']);

        await expect(validateRelease(octokit, { ...BASE_PARAMS, versionInput: 'patch' })).rejects.toThrow(
            'Rule B violation'
        );
    });

    it('Rule C: throws when creating second concurrent release branch', async () => {
        const octokit = makeOctokit(['release/v2.0.0']);

        await expect(
            validateRelease(octokit, {
                ...BASE_PARAMS,
                versionInput: 'preminor',
                prereleaseIdInput: 'alpha',
            })
        ).rejects.toThrow('Rule C violation');
    });

    it('allows prerelease bump from release branch', async () => {
        const octokit = makeOctokit(['release/v2.0.0']);

        await expect(
            validateRelease(octokit, {
                ...BASE_PARAMS,
                currentBranch: 'release/v2.0.0',
                versionInput: 'prerelease',
                prereleaseIdInput: 'beta',
                currentVersion: '2.0.0-alpha.0',
            })
        ).resolves.toEqual({ isPrerelease: true });
    });
});
