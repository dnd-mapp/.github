import { bumpVersion, deriveReleaseBranchName, writePackageVersion } from '@/version-bumper';
import { appendFile, readFile } from 'fs/promises';

const versionInput = process.env['VERSION']!;
const prereleaseIdInput = process.env['PRERELEASE_ID']!;
const manifestPath = `${process.env['GITHUB_WORKSPACE']!}/package.json`;

const manifest = JSON.parse(await readFile(manifestPath, 'utf-8')) as { version: string };
const preid = prereleaseIdInput !== 'none' ? prereleaseIdInput : undefined;

const newVersion = bumpVersion({ currentVersion: manifest.version, bumpType: versionInput, preid });
await writePackageVersion({ manifestPath, newVersion });

const output = process.env['GITHUB_OUTPUT']!;
await appendFile(output, `raw-version=v${newVersion}\n`);
await appendFile(output, `clean-version=${newVersion}\n`);
await appendFile(output, `release-branch-name=${deriveReleaseBranchName(newVersion) ?? ''}\n`);
