import { Octokit } from '@octokit/rest';

export async function publishRelease(
    octokit: Octokit,
    params: {
        owner: string;
        repo: string;
        tagName: string;
        commitSha: string;
        releaseNotes: string;
        isPrerelease: boolean;
    }
): Promise<void> {
    const { data: tagData } = await octokit.git.createTag({
        owner: params.owner,
        repo: params.repo,
        tag: params.tagName,
        message: params.tagName,
        object: params.commitSha,
        type: 'commit',
        tagger: {
            name: 'github-actions[bot]',
            email: '41898282+github-actions[bot]@users.noreply.github.com',
            date: new Date().toISOString(),
        },
    });

    await octokit.git.createRef({
        owner: params.owner,
        repo: params.repo,
        ref: `refs/tags/${params.tagName}`,
        sha: tagData.sha,
    });

    await octokit.repos.createRelease({
        owner: params.owner,
        repo: params.repo,
        tag_name: params.tagName,
        body: params.releaseNotes,
        prerelease: params.isPrerelease,
        make_latest: params.isPrerelease ? 'false' : 'true',
    });
}
