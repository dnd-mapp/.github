import { build, type BuildOptions } from 'esbuild';

const base = '.github/actions';

const shared: BuildOptions = {
    bundle: true,
    platform: 'node',
    target: 'node24',
    format: 'esm',
    outExtension: { '.js': '.mjs' },
};

await Promise.all([
    build({
        ...shared,
        outdir: `${base}/bump-version/dist`,
        entryPoints: [
            'src/scripts/bump-version.ts',
            'src/scripts/create-release-branch.ts',
            'src/scripts/validate-branch.ts',
        ],
    }),
    build({
        ...shared,
        outdir: `${base}/publish-release/dist`,
        entryPoints: ['src/scripts/publish-release.ts', 'src/scripts/merge-release-branch.ts'],
    }),
    build({
        ...shared,
        outdir: `${base}/update-changelog/dist`,
        entryPoints: ['src/scripts/update-changelog.ts'],
    }),
    build({
        ...shared,
        outdir: `${base}/propagate-sha/dist`,
        entryPoints: ['src/scripts/propagate-sha.ts'],
    }),
]);
