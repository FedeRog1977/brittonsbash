import { FC } from 'react';
import { Flex, Typography } from '../../basics/index.js';
import { compileEntries } from './utils/compile-entries.js';
import { DataContentResponse } from '../../reference/index.js';

export type ArticlePrefaceProps = {
  entries: DataContentResponse[];
  listStyle?: 'enumerate' | 'itemize';
};

export const ArticlePreface: FC<ArticlePrefaceProps> = ({ entries, listStyle }) => (
  <Flex direction="vertical" alignHorizontal="center" gap="md">
    {compileEntries(entries, listStyle).map(({ title, content }) => (
      <Flex direction="vertical" alignHorizontal="center" gap="3xs">
        <Typography variant="body" boldFace>
          {title}
        </Typography>

        <Typography variant="body" textAlign={Boolean(listStyle) ? 'left' : 'center'} markdown>
          {content}
        </Typography>
      </Flex>
    ))}
  </Flex>
);
