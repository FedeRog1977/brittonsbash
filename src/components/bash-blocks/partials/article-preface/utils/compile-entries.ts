import { DataContentResponse } from '../../../reference';
import { ArticlePrefaceProps } from '../article-preface';

type ArticlePrefaceParsed = Pick<DataContentResponse, 'title'> & {
  content: string;
};

export const compileEntries = (
  entries: DataContentResponse[]
): ArticlePrefaceParsed[] => {
  const entriesParsed: ArticlePrefaceParsed[] = [];

  entries.forEach((entry) => {
    if (entry?.title && entry.content) {
      entriesParsed.push({
        title: entry.title,
        content: Array.isArray(entry.content)
          ? entry.content.sort().join(', ')
          : entry.content,
      });
    }
  });

  return entriesParsed;
};
