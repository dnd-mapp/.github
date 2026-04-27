import { build, type BuildOptions } from 'esbuild';

const base = '.github/actions';
const shared: BuildOptions = {
    bundle: true,
    platform: 'node',
    target: 'node24',
    format: 'esm',
    outExtension: { '.js': '.mjs' },
    sourcemap: 'inline',
};

await Promise.all([
    build({
        ...shared,
        outdir: `${base}/bump-version/dist`,
        entryPoints: [
            'src/scripts/bump-version.mts',
            'src/scripts/create-release-branch.mts',
            'src/scripts/validate-branch.mts',
        ],
    }),
    build({
        ...shared,
        outdir: `${base}/publish-release/dist`,
        entryPoints: ['src/scripts/publish-release.mts', 'src/scripts/merge-release-branch.mts'],
    }),
    build({
        ...shared,
        outdir: `${base}/update-changelog/dist`,
        entryPoints: ['src/scripts/update-changelog.mts'],
    }),
]);
