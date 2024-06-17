import { FC } from 'react';
import { Stack, Typography } from '../../basics';
import { compileEntries } from './utils/compile-entries';

export type ArticlePrefaceProps = {
  entries: {
    title: string;
    content?: string | string[];
  }[];
};

export const ArticlePreface: FC<ArticlePrefaceProps> = ({ entries }) => (
  <Stack direction="vertical" alignHorizontal="center" spacing="md">
    {compileEntries(entries).map(({ title, content }) => (
      <Stack direction="vertical" alignHorizontal="center" spacing="3xs">
        <Typography variant="body" boldFace>
          {title}
        </Typography>

        <Typography variant="body">
          {Array.isArray(content) ? content.join(', ') : content}
        </Typography>
      </Stack>
    ))}
  </Stack>
);
