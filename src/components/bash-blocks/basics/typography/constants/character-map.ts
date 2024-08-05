// ` -> ‘ or &lsquo; or &#8216;
// `` -> “ or &ldquo; or &#8220;
// ' -> ’ or &rsquo; or &#8217;
// '' -> ” or &rdquo; or &#8221;
// - -> — or &mdash; or &#8212;
// & -> & or &amp or &#38;
// + -> + &plus or &#43;

export const characterMap: Record<string, string> = {
  '`': '&lsquo;',
  '``': '&ldquo;',
  "'": '&rsquo;',
  "''": '&rdquo;',
  '-': '&mdash;',
};
