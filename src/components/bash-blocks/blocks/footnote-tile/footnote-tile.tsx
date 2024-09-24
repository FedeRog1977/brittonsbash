import { FC } from 'react';
import { formatArticle } from '../../../../utils';
import { Tile, Typography } from '../../basics';
import { Article } from '../../partials';
import { ArticleProps } from '../../partials';

export type FootnoteTileProps = {
  content: string | ArticleProps['sections'];
};

export const FootnoteTile: FC<FootnoteTileProps> = ({ content }) => (
  <Tile type="clear">
    {Array.isArray(content) ? (
      <Article
        sections={formatArticle(content, 'footnote', 'white', false, false, false, 'none', false)}
        textAlign="justify"
      />
    ) : (
      <Typography variant="footnote" textAlign="justify" markdown>
        {content}
      </Typography>
    )}
  </Tile>
);
