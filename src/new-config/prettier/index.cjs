'use strict';

/**
 * @type {import('prettier').Config}
 */
module.exports = {
  /**
   * @default 80
   * @type {number}
   */
  printWidth: 100,

  /**
   * @default 'preserve'
   * @type {'always' | 'never' | 'preserve'}
   */
  proseWrap: 'always',

  /**
   * @default false
   * @type {boolean}
   */
  singleQuote: true,

  /**
   * @default 'es5'
   * @type {'none' | 'es5' | 'all'}
   */
  trailingComma: 'all',

  /**
   * @default 'always'
   * @type {'avoid' | 'always'}
   */
  arrowParens: 'always',

  /**
   * @default false
   * @type {boolean}
   */
  bracketSameLine: false,

  /**
   * @default true
   * @type {boolean}
   */
  bracketSpacing: true,

  /**
   * @default 'auto'
   * @type {'auto' | 'off'}
   */
  embeddedLanguageFormatting: 'auto',

  /**
   * @default 'lf'
   * @type {'auto' | 'lf' | 'crlf' | 'cr'}
   */
  endOfLine: 'lf',

  /**
   * @default 'css'
   * @type {'css' | 'strict' | 'ignore'}
   */
  htmlWhitespaceSensitivity: 'css',

  /**
   * @deprecated
   * @default false
   * @type {boolean}
   */
  jsxBracketSameLine: false,

  /**
   * @default false
   * @type {boolean}
   */
  jsxSingleQuote: false,

  /**
   * @default false
   * @type {string[] | false}
   */
  pluginSearchDirs: false,

  /**
   * @default 'as-needed'
   * @type {'as-needed' | 'consistent' | 'preserve'}
   */
  quoteProps: 'as-needed',

  /**
   * @default false
   * @type {boolean}
   */
  requirePragma: false,

  /**
   * @default true
   * @type {boolean}
   */
  semi: true,

  /**
   * @default false
   * @type {boolean}
   */
  singleAttributePerLine: false,

  /**
   * @default 2
   * @type {number}
   */
  tabWidth: 2,

  /**
   * @default false
   * @type {boolean}
   */
  useTabs: false,

  /**
   * @default false
   * @type {boolean}
   */
  vueIndentScriptAndStyle: false,
};
