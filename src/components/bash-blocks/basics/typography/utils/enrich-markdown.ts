import { characterMap } from '../constants/character-map';

export const enrichMarkdown = (content: string) => {
  content = content.replace(/\_{([^::]+)}/g, '<sub>$1</sub>');
  content = content.replace(/\^{([^::]+)}/g, '<sup>$1</sup>');

  for (const character in characterMap) {
    content = content.replace(
      new RegExp(character, 'g'),
      characterMap[character]
    );
  }

  return content;
};
