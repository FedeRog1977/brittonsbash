import { FC } from 'react';
import { Stack, Typography } from '../../basics';
import { compileEntries } from './utils/compile-entries';
import { DataContentResponse } from '../../reference';

export type ArticlePrefaceProps = {
  entries: DataContentResponse[];
};

export const ArticlePreface: FC<ArticlePrefaceProps> = ({ entries }) => (
  <Stack direction="vertical" alignHorizontal="center" spacing="md">
    {compileEntries(entries).map(({ title, content }) => (
      <Stack direction="vertical" alignHorizontal="center" spacing="3xs">
        <Typography variant="body" boldFace>
          {title}
        </Typography>

        <Typography variant="body" textAlign="center">
          {content}
        </Typography>
      </Stack>
    ))}
  </Stack>
);
