import { appendFile, readFile } from 'fs/promises';
import { createGithubClient } from '@/github-client';
import { validateRelease } from '@/branch-validator';

const [owner, repo] = process.env['GITHUB_REPOSITORY']!.split('/');
const manifest = JSON.parse(await readFile('package.json', 'utf-8')) as { version: string };

const { isPrerelease } = await validateRelease(createGithubClient(process.env['GITHUB_TOKEN']!), {
    owner: owner!,
    repo: repo!,
    currentBranch: process.env['GITHUB_REF_NAME']!,
    versionInput: process.env['VERSION']!,
    prereleaseIdInput: process.env['PRERELEASE_ID']!,
    currentVersion: manifest.version,
});

await appendFile(process.env['GITHUB_OUTPUT']!, `is-prerelease=${isPrerelease}\n`);
