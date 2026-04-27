/// <reference types="vitest/config" />
import { resolve } from 'path';
import { defineConfig } from 'vite';

const isCI = Boolean(process.env['CI']);

export default defineConfig({
    root: __dirname,
    resolve: {
        alias: {
            '@/branch-manager': resolve(__dirname, 'src/branch-manager/index.ts'),
            '@/branch-validator': resolve(__dirname, 'src/branch-validator/index.ts'),
            '@/changelog-manager': resolve(__dirname, 'src/changelog-manager/index.ts'),
            '@/github-client': resolve(__dirname, 'src/github-client/index.ts'),
            '@/release-publisher': resolve(__dirname, 'src/release-publisher/index.ts'),
            '@/version-bumper': resolve(__dirname, 'src/version-bumper/index.ts'),
        },
    },
    test: {
        clearMocks: true,
        coverage: {
            enabled: true,
            exclude: ['*/index.ts'],
            include: ['src/**/*.ts', 'src/**/*.mts'],
            provider: 'v8',
            reportOnFailure: true,
            reporter: [['html', { subdir: '.' }], 'text-summary'],
            reportsDirectory: 'coverage/dot-github',
            thresholds: {
                branches: 80,
                functions: 80,
                lines: 80,
                statements: 80,
            },
        },
        environment: 'node',
        globals: true,
        include: ['src/**/*.spec.ts'],
        name: 'dot-github',
        open: false,
        passWithNoTests: true,
        reporters: [
            'dot',
            ['html', { outputFile: 'reports/dot-github/index.html' }],
            ...(isCI ? ['github-actions'] : []),
        ],
        sequence: {
            shuffle: true,
        },
        typecheck: {
            tsconfig: './tsconfig.spec.json',
        },
        uiBase: '/dot-github/',
    },
});
