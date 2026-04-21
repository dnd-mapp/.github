import { extractPrereleaseDelta, extractStableNotes } from '@/changelog-manager';
import { createGithubClient } from '@/github-client';
import { publishRelease } from '@/release-publisher';
import { appendFile, readFile } from 'fs/promises';
import semver from 'semver';

const [owner, repo] = process.env['GITHUB_REPOSITORY']!.split('/');
const changelogPath = process.env['CHANGELOG_PATH'] ?? 'CHANGELOG.md';

const manifest = JSON.parse(await readFile('package.json', 'utf-8')) as { version: string };
const version = manifest.version;
const isPrerelease = semver.prerelease(version) !== null;

const releaseNotes = isPrerelease
    ? await extractPrereleaseDelta(changelogPath)
    : await extractStableNotes(changelogPath);

const octokit = createGithubClient(process.env['GH_TOKEN']!);

await publishRelease(octokit, {
    owner: owner!,
    repo: repo!,
    tagName: `v${version}`,
    commitSha: process.env['GITHUB_SHA']!,
    releaseNotes,
    isPrerelease,
});

const output = process.env['GITHUB_OUTPUT']!;
await appendFile(output, `is-prerelease=${isPrerelease}\n`);
