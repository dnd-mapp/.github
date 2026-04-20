import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
    globalIgnores(['node_modules/', 'dist/', 'coverage/', 'reports/', 'eslint.config.mjs']),
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
        files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.js', '**/*.mjs', '**/*.cjs'],
        languageOptions: {
            sourceType: 'module',
            ecmaVersion: 2024,
            globals: {
                ...globals.node,
            },
            parserOptions: {
                projectService: {
                    allowDefaultProject: [
                        '.github/actions/bump-version/scripts/*.mjs',
                        '.github/actions/update-changelog/scripts/*.mjs',
                    ],
                },
            },
        },
        rules: {
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
        },
    },
    {
        files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
        rules: {
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
        },
    },
    {
        files: ['.github/scripts/*.js', 'tools/*.mjs'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    eslintConfigPrettier
);
