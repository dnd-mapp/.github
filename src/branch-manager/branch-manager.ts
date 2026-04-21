import { Octokit } from '@octokit/rest';

interface CreateReleaseBranchParams {
    owner: string;
    repo: string;
    branchName: string;
}

interface CommitFilesParams {
    owner: string;
    repo: string;
    branch: string;
    files: { path: string; content: string; message: string }[];
}

interface MergeReleaseBranchParams {
    owner: string;
    repo: string;
    releaseBranch: string;
}

interface DeleteReleaseBranchParams {
    owner: string;
    repo: string;
    branch: string;
}

export async function createReleaseBranch(octokit: Octokit, params: CreateReleaseBranchParams): Promise<void> {
    const { data: ref } = await octokit.git.getRef({
        owner: params.owner,
        repo: params.repo,
        ref: 'heads/main',
    });

    await octokit.git.createRef({
        owner: params.owner,
        repo: params.repo,
        ref: `refs/heads/${params.branchName}`,
        sha: ref.object.sha,
    });
}

export async function commitFiles(octokit: Octokit, params: CommitFilesParams): Promise<void> {
    for (const file of params.files) {
        const { data } = await octokit.repos.getContent({
            owner: params.owner,
            repo: params.repo,
            path: file.path,
            ref: params.branch,
        });

        const fileSha = (data as { sha: string }).sha;

        await octokit.repos.createOrUpdateFileContents({
            owner: params.owner,
            repo: params.repo,
            path: file.path,
            message: file.message,
            content: Buffer.from(file.content).toString('base64'),
            sha: fileSha,
            branch: params.branch,
        });
    }
}

export async function mergeReleaseBranch(octokit: Octokit, params: MergeReleaseBranchParams): Promise<void> {
    try {
        await octokit.repos.merge({
            owner: params.owner,
            repo: params.repo,
            base: 'main',
            head: params.releaseBranch,
            commit_message: `chore: merge ${params.releaseBranch} into main`,
        });
    } catch (error) {
        if ((error as { status?: number }).status === 409) {
            throw new Error(
                `Merge conflict: cannot merge ${params.releaseBranch} into main. Resolve conflicts manually.`,
                { cause: error }
            );
        }
        throw error;
    }
}

export async function deleteReleaseBranch(octokit: Octokit, params: DeleteReleaseBranchParams): Promise<void> {
    await octokit.git.deleteRef({
        owner: params.owner,
        repo: params.repo,
        ref: `heads/${params.branch}`,
    });
}
