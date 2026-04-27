import { validateRelease } from '@/branch-validator';
import { createGithubClient } from '@/github-client';
import { appendFile, readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

export async function run(): Promise<void> {
    const [owner, repo] = process.env['GITHUB_REPOSITORY']!.split('/');
    const manifest = JSON.parse(await readFile(`${process.env['GITHUB_WORKSPACE']!}/package.json`, 'utf-8')) as {
        version: string;
    };

    const { isPrerelease } = await validateRelease(createGithubClient(process.env['GITHUB_TOKEN']!), {
        owner: owner!,
        repo: repo!,
        currentBranch: process.env['GITHUB_REF_NAME']!,
        versionInput: process.env['VERSION']!,
        prereleaseIdInput: process.env['PRERELEASE_ID']!,
        currentVersion: manifest.version,
    });

    await appendFile(process.env['GITHUB_OUTPUT']!, `is-prerelease=${isPrerelease}\n`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    await run();
}
