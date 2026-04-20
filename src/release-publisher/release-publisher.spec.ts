import { Octokit } from '@octokit/rest';
import { publishRelease } from './release-publisher';

const TAG_SHA = 'abc123tagobjectsha';

const makeOctokit = () =>
    ({
        git: {
            createTag: vi.fn().mockResolvedValue({ data: { sha: TAG_SHA } }),
            createRef: vi.fn().mockResolvedValue({}),
        },
        repos: {
            createRelease: vi.fn().mockResolvedValue({}),
        },
    }) as unknown as Octokit;

const BASE_PARAMS = {
    owner: 'dnd-mapp',
    repo: '.github',
    tagName: 'v2.0.0',
    commitSha: 'deadbeefcafe1234',
    releaseNotes: '## What changed\n\n- Feature A\n- Fix B',
    isPrerelease: false,
};

beforeEach(() => {
    vi.resetAllMocks();
});

describe('publishRelease', () => {
    it('creates an annotated tag object with the correct commit SHA', async () => {
        const octokit = makeOctokit();

        await publishRelease(octokit, BASE_PARAMS);

        expect(octokit.git.createTag).toHaveBeenCalledOnce();
        expect(octokit.git.createTag).toHaveBeenCalledWith(
            expect.objectContaining({
                owner: 'dnd-mapp',
                repo: '.github',
                tag: 'v2.0.0',
                object: 'deadbeefcafe1234',
                type: 'commit',
            })
        );
    });

    it('creates a ref pointing to the tag SHA from step 1', async () => {
        const octokit = makeOctokit();

        await publishRelease(octokit, BASE_PARAMS);

        expect(octokit.git.createRef).toHaveBeenCalledOnce();
        expect(octokit.git.createRef).toHaveBeenCalledWith({
            owner: 'dnd-mapp',
            repo: '.github',
            ref: 'refs/tags/v2.0.0',
            sha: TAG_SHA,
        });
    });

    it('creates a stable release with prerelease: false and make_latest: "true"', async () => {
        const octokit = makeOctokit();

        await publishRelease(octokit, { ...BASE_PARAMS, isPrerelease: false });

        expect(octokit.repos.createRelease).toHaveBeenCalledWith(
            expect.objectContaining({
                prerelease: false,
                make_latest: 'true',
            })
        );
    });

    it('creates a prerelease with prerelease: true and make_latest: "false"', async () => {
        const octokit = makeOctokit();

        await publishRelease(octokit, { ...BASE_PARAMS, tagName: 'v2.0.0-alpha.1', isPrerelease: true });

        expect(octokit.repos.createRelease).toHaveBeenCalledWith(
            expect.objectContaining({
                prerelease: true,
                make_latest: 'false',
            })
        );
    });

    it('passes release notes through unchanged', async () => {
        const octokit = makeOctokit();

        await publishRelease(octokit, BASE_PARAMS);

        expect(octokit.repos.createRelease).toHaveBeenCalledWith(
            expect.objectContaining({
                body: BASE_PARAMS.releaseNotes,
            })
        );
    });

    it('calls all three steps exactly once', async () => {
        const octokit = makeOctokit();

        await publishRelease(octokit, BASE_PARAMS);

        expect(octokit.git.createTag).toHaveBeenCalledOnce();
        expect(octokit.git.createRef).toHaveBeenCalledOnce();
        expect(octokit.repos.createRelease).toHaveBeenCalledOnce();
    });
});
