import type { GithubClient } from '@/github-client';
import * as core from '@actions/core';

interface PublishReleaseParams {
    owner: string;
    repo: string;
    tagName: string;
    commitSha: string;
    releaseNotes: string;
    isPrerelease: boolean;
}

export async function publishRelease(octokit: GithubClient, params: PublishReleaseParams) {
    core.debug(`Creating tag object: ${params.tagName}`);

    const { data: tagData } = await octokit.rest.git.createTag({
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

    core.debug(`Creating tag ref: refs/tags/${params.tagName}`);

    await octokit.rest.git.createRef({
        owner: params.owner,
        repo: params.repo,
        ref: `refs/tags/${params.tagName}`,
        sha: tagData.sha,
    });

    core.info(`Creating GitHub release: ${params.tagName}`);

    await octokit.rest.repos.createRelease({
        owner: params.owner,
        repo: params.repo,
        tag_name: params.tagName,
        body: params.releaseNotes,
        prerelease: params.isPrerelease,
        make_latest: params.isPrerelease ? 'false' : 'true',
    });
}
