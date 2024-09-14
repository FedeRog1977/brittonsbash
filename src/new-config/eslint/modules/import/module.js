import plugin from 'eslint-plugin-import';
import rules from './rules.js';

export default {
  plugins: {
    import: plugin,
  },
  rules: {
    ...rules,
  },
  settings: {
    'import/parsers': {
      espree: ['.js', '.cjs', '.mjs', '.jsx'],
    },
    'import/resolver': {
      typescript: true,
    },
  },
};
