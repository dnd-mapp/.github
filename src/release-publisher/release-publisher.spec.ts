import type { GithubClient } from '@/github-client';
import { publishRelease } from './release-publisher';

vi.mock('@actions/core', () => ({
    debug: vi.fn(),
    info: vi.fn(),
}));

const TAG_SHA = 'abc123tagobjectsha';

const makeOctokit = () =>
    ({
        rest: {
            git: {
                createTag: vi.fn().mockResolvedValue({ data: { sha: TAG_SHA } }),
                createRef: vi.fn().mockResolvedValue({}),
            },
            repos: {
                createRelease: vi.fn().mockResolvedValue({}),
            },
        },
    }) as unknown as GithubClient;

const BASE_PARAMS = {
    owner: 'dnd-mapp',
    repo: '.github',
    tagName: 'v2.0.0',
    commitSha: 'deadbeefcafe1234',
    releaseNotes: '## What changed\n\n- Feature A\n- Fix B',
    isPrerelease: false,
    taggerName: 'my-app[bot]',
    taggerEmail: '12345+my-app[bot]@users.noreply.github.com',
};

beforeEach(() => {
    vi.resetAllMocks();
});

describe('publishRelease', () => {
    it('creates an annotated tag object with the correct commit SHA', async () => {
        const octokit = makeOctokit();

        await publishRelease(octokit, BASE_PARAMS);

        expect(octokit.rest.git.createTag).toHaveBeenCalledOnce();
        expect(octokit.rest.git.createTag).toHaveBeenCalledWith(
            expect.objectContaining({
                owner: 'dnd-mapp',
                repo: '.github',
                tag: 'v2.0.0',
                object: 'deadbeefcafe1234',
                type: 'commit',
            })
        );
    });

    it('uses the provided bot identity as the tagger', async () => {
        const octokit = makeOctokit();

        await publishRelease(octokit, BASE_PARAMS);

        expect(octokit.rest.git.createTag).toHaveBeenCalledWith(
            expect.objectContaining({
                tagger: expect.objectContaining({
                    name: 'my-app[bot]',
                    email: '12345+my-app[bot]@users.noreply.github.com',
                }),
            })
        );
    });

    it('creates a ref pointing to the tag SHA from step 1', async () => {
        const octokit = makeOctokit();

        await publishRelease(octokit, BASE_PARAMS);

        expect(octokit.rest.git.createRef).toHaveBeenCalledOnce();
        expect(octokit.rest.git.createRef).toHaveBeenCalledWith({
            owner: 'dnd-mapp',
            repo: '.github',
            ref: 'refs/tags/v2.0.0',
            sha: TAG_SHA,
        });
    });

    it('creates a stable release with prerelease: false and make_latest: "true"', async () => {
        const octokit = makeOctokit();

        await publishRelease(octokit, { ...BASE_PARAMS, isPrerelease: false });

        expect(octokit.rest.repos.createRelease).toHaveBeenCalledWith(
            expect.objectContaining({
                prerelease: false,
                make_latest: 'true',
            })
        );
    });

    it('creates a prerelease with prerelease: true and make_latest: "false"', async () => {
        const octokit = makeOctokit();

        await publishRelease(octokit, { ...BASE_PARAMS, tagName: 'v2.0.0-alpha.1', isPrerelease: true });

        expect(octokit.rest.repos.createRelease).toHaveBeenCalledWith(
            expect.objectContaining({
                prerelease: true,
                make_latest: 'false',
            })
        );
    });

    it('passes release notes through unchanged', async () => {
        const octokit = makeOctokit();

        await publishRelease(octokit, BASE_PARAMS);

        expect(octokit.rest.repos.createRelease).toHaveBeenCalledWith(
            expect.objectContaining({
                body: BASE_PARAMS.releaseNotes,
            })
        );
    });

    it('calls all three steps exactly once', async () => {
        const octokit = makeOctokit();

        await publishRelease(octokit, BASE_PARAMS);

        expect(octokit.rest.git.createTag).toHaveBeenCalledOnce();
        expect(octokit.rest.git.createRef).toHaveBeenCalledOnce();
        expect(octokit.rest.repos.createRelease).toHaveBeenCalledOnce();
    });
});
