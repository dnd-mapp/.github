import type { GithubClient } from '@/github-client';
import * as core from '@actions/core';

interface WorkflowFile {
    path: string;
    content: string;
    sha: string;
}

interface PropagateShaParams {
    owner: string;
    repo: string;
    newSha: string;
}

const SHA_REF_REGEX = /(dnd-mapp\/\.github\/[^\s@]+@)[0-9a-f]{40}/g;

function replaceShAReferences(content: string, newSha: string) {
    return content.replace(SHA_REF_REGEX, `$1${newSha}`);
}

async function getWorkflowFiles(octokit: GithubClient, owner: string, repo: string): Promise<WorkflowFile[]> {
    const { data: items } = await octokit.rest.repos.getContent({ owner, repo, path: '.github/workflows' });
    const entries = items as { name: string; path: string; type: string }[];
    const yamlEntries = entries.filter(
        (e) => e.type === 'file' && (e.name.endsWith('.yaml') || e.name.endsWith('.yml'))
    );

    return Promise.all(
        yamlEntries.map(async (entry) => {
            const { data } = await octokit.rest.repos.getContent({ owner, repo, path: entry.path });
            const { content: encoded, sha } = data as { content: string; sha: string };
            const content = Buffer.from(encoded.replace(/\n/g, ''), 'base64').toString('utf-8');

            return { path: entry.path, content, sha };
        })
    );
}

export async function propagateSha(octokit: GithubClient, params: PropagateShaParams) {
    const { owner, repo, newSha } = params;

    core.startGroup(`${owner}/${repo}`);

    const files = await getWorkflowFiles(octokit, owner, repo);

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

    for (const file of updates) {
        await octokit.rest.repos.createOrUpdateFileContents({
            owner,
            repo,
            path: file.path,
            message: `ci: update .github SHA references to ${shortSha}`,
            content: Buffer.from(file.updatedContent).toString('base64'),
            sha: file.sha,
            branch: branchName,
        });

        core.debug(`Committed ${file.path}`);
    }

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
