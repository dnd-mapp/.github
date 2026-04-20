/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

const isCI = Boolean(process.env['CI']);

export default defineConfig({
    root: __dirname,
    test: {
        clearMocks: true,
        coverage: {
            enabled: true,
            exclude: ['*/index.ts'],
            include: ['src/**/*.ts'],
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
