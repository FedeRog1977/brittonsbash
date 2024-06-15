import { FC } from 'react';
import { formatArticle } from '../../../../../utils';
import { Typography } from '../../../basics';
import { Article, ArticleProps } from '../../../partials';

export type BodyProps = { body: string | ArticleProps['sections'] };

export const Body: FC<BodyProps> = ({ body }) =>
  Array.isArray(body) ? (
    <Article
      sections={formatArticle(
        body,
        'body',
        'white',
        false,
        false,
        false,
        'none',
        false
      )}
      textAlign="justify"
      extendParagraphMargins
    />
  ) : (
    <Typography variant="body" textAlign="justify" paragraphMargins>
      {body}
    </Typography>
  );
