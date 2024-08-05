// import { characterMap } from '../constants/character-map';

export const enrichMarkdown = (content: string) => {
  content = content
    .replace(/`(?!`)/g, '&lsquo;')
    .replace(/``/g, '&ldquo;')
    .replace(/(?<!')'/g, '&rsquo;')
    .replace(/-/g, '&rdquo;')
    .replace(/''/g, '&mdash;')
    .replace(/_\{([^::]+)\}/g, '<sub>$1</sub>')
    .replace(/\^\{([^::]+)\}/g, '<sup>$1</sup>');

  // Unused as Record<> does not support RegExp :(
  // for (const character in characterMap) {
  //   if (content.match(character)) {
  //     content = content.replace(
  //       new RegExp(character, 'u'),
  //       characterMap[character]
  //     );
  //   }
  // }

  return content;
};
