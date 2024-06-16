import { FC } from 'react';
import { Stack, Typography } from '../../basics';

export type ArticlePrefaceProps = {
  entries: {
    // TODO: amend Instant Gram to reflect removal of optional props
    title?: string;
    // TODO: this should be doing the joining of strings, not the refactorEvent
    // This now takes a list of strings, update Instant Gram to reflect
    content?: string | string[];
  }[];
};

export const ArticlePreface: FC<ArticlePrefaceProps> = ({ entries }) => (
  // TODO: fix unnecessary render issue with conditional (title && content ? ... : null)
  <Stack direction="vertical" alignHorizontal="center" spacing="md">
    {entries.map(({ title, content }) => (
      <Stack direction="vertical" alignHorizontal="center" spacing="3xs">
        <Typography variant="body" boldFace>
          {title}
        </Typography>

        {/* TODO: this should be doing the joining of strings, not the refactorEvent */}
        <Typography variant="body">
          {Array.isArray(content) ? content.join(', ') : content}
        </Typography>
      </Stack>
    ))}
  </Stack>
);
