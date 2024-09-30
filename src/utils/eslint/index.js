import globals from 'globals';
import coreModule from './core';
import importModule from './import';
import jestModule from './jest';
import jsxA11yModule from './jsx-a11y';
import reactModule from './react';
import storybookModule from './storybook';
import typescriptModule from './typescript';

export default [
  {
    files: ['**/*.?([mc])[jt]s', '**/*.[jt]sx'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      ...importModule.plugins,
    },
    rules: {
      ...coreModule.rules,
      ...importModule.rules,
    },
    settings: {
      ...importModule.settings,
    },
  },
  {
    files: ['**/*.c[jt]s'],
    languageOptions: {
      parserOptions: {
        sourceType: 'commonjs',
      },
      sourceType: 'commonjs',
    },
  },
  {
    files: ['**/*.?(m)[jt]s', '**/*.[jt]sx'],
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
      },
      sourceType: 'module',
    },
  },
  {
    files: ['**/*.[jt]sx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      ...jsxA11yModule.plugins,
      ...reactModule.plugins,
    },
    rules: {
      ...jsxA11yModule.rules,
      ...reactModule.rules,
    },
    settings: {
      ...reactModule.settings,
    },
  },
  {
    files: ['**/*.?([mc])ts', '**/*.tsx'],
    languageOptions: {
      ...typescriptModule.languageOptions,
    },
    plugins: {
      ...typescriptModule.plugins,
    },
    rules: {
      ...typescriptModule.rules,
    },
  },
  {
    files: ['**/*.test.?([mc])[jt]s', '**/*.test.[jt]sx'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      ...jestModule.plugins,
    },
    rules: {
      ...jestModule.rules,
    },
  },
  {
    files: ['**/*.stories.?([mc])[jt]s', '**/*.stories.[jt]sx'],
    rules: {
      ...storybookModule.rules,
    },
  },
];
