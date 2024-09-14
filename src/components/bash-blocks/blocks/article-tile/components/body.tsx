import { FC } from 'react';
import { formatArticle } from '../../../../../utils/index.js';
import { Typography } from '../../../basics/index.js';
import { Article, ArticleProps } from '../../../partials/index.js';

export type BodyProps = { body: string | ArticleProps['sections'] };

export const Body: FC<BodyProps> = ({ body }) =>
  Array.isArray(body) ? (
    <Article
      sections={formatArticle(body, 'body', 'white', false, false, false, 'none', false)}
      textAlign="justify"
      extendParagraphMargins
    />
  ) : (
    <Typography variant="body" textAlign="justify" paragraphMargins>
      {body}
    </Typography>
  );
