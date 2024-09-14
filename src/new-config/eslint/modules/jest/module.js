import corePlugin from 'eslint-plugin-jest';
import domPlugin from 'eslint-plugin-jest-dom';
import rules from './rules.js';

export default {
  plugins: {
    jest: corePlugin,
    'jest-dom': domPlugin,
  },
  rules: {
    ...rules,
  },
};
