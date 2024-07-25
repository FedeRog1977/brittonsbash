import { FC } from 'react';
import { Flex, Stack, Typography } from '../../basics';
import { compileEntries } from './utils/compile-entries';
import { DataContentResponse } from '../../reference';

export type ArticlePrefaceProps = {
  entries: DataContentResponse[];
};

export const ArticlePreface: FC<ArticlePrefaceProps> = ({ entries }) => (
  <Flex direction="vertical" alignHorizontal="center" gap="md">
    {compileEntries(entries).map(({ title, content }) => (
      <Flex direction="vertical" alignHorizontal="center" gap="3xs">
        <Typography variant="body" boldFace>
          {title}
        </Typography>

        <Typography variant="body" textAlign="center">
          {content}
        </Typography>
      </Flex>
    ))}
  </Flex>
);
