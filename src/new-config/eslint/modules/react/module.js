import corePlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import rules from './rules.js';

export default {
  plugins: {
    react: corePlugin,
    'react-hooks': hooksPlugin,
  },
  rules: {
    ...rules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
