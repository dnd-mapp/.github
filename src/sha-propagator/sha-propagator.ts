import type { GithubClient } from '@/github-client';
import * as core from '@actions/core';

interface WorkflowFile {
    path: string;
    content: string;
}

interface PropagateShaParams {
    owner: string;
    repo: string;
    newSha: string;
}

interface DirEntry {
    name: string;
    path: string;
    type: string;
}

const SHA_REF_REGEX = /(dnd-mapp\/\.github\/[^\s@]+@)[0-9a-f]{40}/g;

function replaceShAReferences(content: string, newSha: string) {
    return content.replace(SHA_REF_REGEX, `$1${newSha}`);
}

function isYaml(name: string) {
    return name.endsWith('.yaml') || name.endsWith('.yml');
}

async function getYamlFiles(octokit: GithubClient, owner: string, repo: string): Promise<WorkflowFile[]> {
    const entries: DirEntry[] = [];

    const { data: workflowItems } = await octokit.rest.repos.getContent({
        owner: owner,
        repo: repo,
        path: '.github/workflows',
    });
    entries.push(...(workflowItems as DirEntry[]).filter((entry) => entry.type === 'file' && isYaml(entry.name)));

    try {
        const { data: actionItems } = await octokit.rest.repos.getContent({
            owner: owner,
            repo: repo,
            path: '.github/actions',
        });

        const subdirs = (actionItems as DirEntry[]).filter((e) => e.type === 'dir');
        const subEntries = await Promise.all(
            subdirs.map(async (sub) => {
                const { data: subItems } = await octokit.rest.repos.getContent({
                    owner: owner,
                    repo: repo,
                    path: sub.path,
                });

                return (subItems as DirEntry[]).filter((entry) => entry.type === 'file' && isYaml(entry.name));
            })
        );
        entries.push(...subEntries.flat());
    } catch {
        // .github/actions doesn't exist in this repo — skip
    }

    return Promise.all(
        entries.map(async (entry) => {
            const { data } = await octokit.rest.repos.getContent({ owner: owner, repo: repo, path: entry.path });
            const { content: encoded, sha } = data as { content: string; sha: string };
            const content = Buffer.from(encoded.replace(/\n/g, ''), 'base64').toString('utf-8');
            return { path: entry.path, content };
        })
    );
}

export async function propagateSha(octokit: GithubClient, params: PropagateShaParams) {
    const { owner, repo, newSha } = params;

    core.startGroup(`${owner}/${repo}`);

    const files = await getYamlFiles(octokit, owner, repo);

    core.debug(`Found ${files.length} workflow file(s)`);

    const updates = files
        .map((file) => ({ ...file, updatedContent: replaceShAReferences(file.content, newSha) }))
        .filter((file) => file.updatedContent !== file.content);

    if (updates.length === 0) {
        core.info('No SHA references to update');
        core.endGroup();
        return;
    }
    const shortSha = newSha.slice(0, 7);
    const branchName = `ci/update-sha-references-${shortSha}`;

    core.info(`Updating ${updates.length} file(s) on branch ${branchName}`);

    const { data: mainRef } = await octokit.rest.git.getRef({ owner, repo, ref: 'heads/main' });

    try {
        await octokit.rest.git.createRef({
            owner,
            repo,
            ref: `refs/heads/${branchName}`,
            sha: mainRef.object.sha,
        });

        core.debug(`Branch created: ${branchName}`);
    } catch (error) {
        if ((error as { status?: number }).status === 422) {
            core.info(`Branch ${branchName} already exists — skipping`);
            core.endGroup();
            return;
        }
        throw error;
    }

    const { data: headCommit } = await octokit.rest.git.getCommit({
        owner,
        repo,
        commit_sha: mainRef.object.sha,
    });

    const { data: newTree } = await octokit.rest.git.createTree({
        owner,
        repo,
        base_tree: headCommit.tree.sha,
        tree: updates.map((file) => ({ path: file.path, mode: '100644', type: 'blob', content: file.updatedContent })),
    });

    const { data: newCommit } = await octokit.rest.git.createCommit({
        owner,
        repo,
        message: `ci: update .github SHA references to ${shortSha}`,
        tree: newTree.sha,
        parents: [mainRef.object.sha],
    });

    await octokit.rest.git.updateRef({
        owner,
        repo,
        ref: `heads/${branchName}`,
        sha: newCommit.sha,
    });

    core.debug(`Committed ${updates.length} file(s)`);

    await octokit.rest.pulls.create({
        owner,
        repo,
        title: `ci: update .github SHA references to ${shortSha}`,
        head: branchName,
        base: 'main',
        body: `Automated SHA reference update triggered by push to \`dnd-mapp/.github\` main (${newSha}).`,
    });

    core.info(`Opened PR in ${owner}/${repo}`);
    core.endGroup();
}
