import plugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import rules from './rules.js';

export default {
  languageOptions: {
    parser,
    parserOptions: {
      project: './tsconfig.json',
    },
  },
  plugins: {
    '@typescript-eslint': plugin,
  },
  rules: {
    ...rules,
  },
};
