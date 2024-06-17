import { ArticlePrefaceProps } from '../article-preface';

type ArticlePrefaceParsed = {
  entries: Omit<ArticlePrefaceProps['entries'], 'content'> &
    { content: string }[];
};

export const compileEntries = (entries: ArticlePrefaceProps['entries']) => {
  const entriesParsed: ArticlePrefaceParsed['entries'] = [];

  entries.forEach((entry) => {
    if (entry?.title && entry.content) {
      entriesParsed.push({
        title: entry.title,
        content: Array.isArray(entry.content)
          ? entry.content.join(', ')
          : entry.content,
      });
    }
  });

  return entriesParsed;
};
