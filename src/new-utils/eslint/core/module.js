import rules from './rules.js.js.js';

export default {
  rules: {
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'block-spacing': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    'computed-property-spacing': 'off',
    'dot-location': 'off',
    'eol-last': 'off',
    'func-call-spacing': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'generator-star-spacing': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'line-comment-position': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': 'error',
    'max-len': 'off',
    'max-statements-per-line': 'error',
    'multiline-ternary': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-extra-parens': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-tabs': 'error',
    'no-trailing-spaces': 'off',
    'no-whitespace-before-property': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    quotes: 'off',
    'rest-spread-spacing': 'off',
    semi: 'off',
    'semi-spacing': 'off',
    'semi-style': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': 'off',
    'switch-colon-spacing': 'off',
    'template-curly-spacing': 'off',
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'wrap-iife': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 'off',
    'array-callback-return': ['error', { checkForEach: true }],
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'off',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-use-before-define': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'accessor-pairs': 'error',
    'arrow-body-style': 'error',
    'block-scoped-var': 'error',
    camelcase: 'error',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    complexity: 'off',
    'consistent-return': 'error',
    'consistent-this': 'error',
    curly: 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'off',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'init-declarations': 'error',
    'logical-assignment-operators': ['error', 'never'],
    'max-classes-per-file': 'error',
    'max-depth': 'error',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    'new-cap': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': 'off',
    'no-console': 'error',
    'no-continue': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-function': 'error',
    'no-empty-static-block': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'off',
    'no-floating-decimal': 'off',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'off',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'off',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['@breeze/basics-*/*', '!@breeze/basics-*/styles'],
            message: 'Import from @breeze/basics instead',
          },
        ],
      },
    ],
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-shorthand': 'error',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': 'off',
    radix: 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': 'error',
    strict: 'error',
    'symbol-description': 'error',
    'vars-on-top': 'off',
    yoda: 'error',
  },
};
