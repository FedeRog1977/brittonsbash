import globals from 'globals';
import coreModule from './core/module.js';
import importModule from './import/module.js';
import jestModule from './jest/module.js';
import jsxA11yModule from './jsx-a11y/module.js';
import reactModule from './react/module.js';
import storybookModule from './storybook/module.js';
import typescriptModule from './typescript/module.js';

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
