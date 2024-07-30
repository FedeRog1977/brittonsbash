import { DataContentResponse } from '../../../reference';

type ArticlePrefaceParsed = Pick<DataContentResponse, 'title'> & {
  content: string;
};

export const compileEntries = (
  entries: DataContentResponse[],
  alphabetize: boolean
): ArticlePrefaceParsed[] => {
  const entriesParsed: ArticlePrefaceParsed[] = [];

  entries.forEach((entry) => {
    if (entry?.title && entry.content) {
      entriesParsed.push({
        title: entry.title,
        content: Array.isArray(entry.content)
          ? alphabetize
            ? entry.content.sort().join(', ')
            : entry.content.join(', ')
          : entry.content,
      });
    }
  });

  return entriesParsed;
};
