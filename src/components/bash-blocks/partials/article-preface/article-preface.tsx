import { FC } from 'react';
import { Flex, Typography } from '../../basics';
import { compileEntries } from './utils/compile-entries';
import { DataContentResponse } from '../../reference';

export type ArticlePrefaceProps = {
  entries: DataContentResponse[];
  listStyle?: 'enumerate' | 'itemize';
};

export const ArticlePreface: FC<ArticlePrefaceProps> = ({
  entries,
  listStyle,
}) => (
  <Flex direction="vertical" alignHorizontal="center" gap="md">
    {compileEntries(entries, listStyle).map(({ title, content }) => (
      <Flex direction="vertical" alignHorizontal="center" gap="3xs">
        <Typography variant="body" boldFace>
          {title}
        </Typography>

        <Typography
          variant="body"
          textAlign={Boolean(listStyle) ? 'left' : 'center'}
          markdown
        >
          {content}
        </Typography>
      </Flex>
    ))}
  </Flex>
);
