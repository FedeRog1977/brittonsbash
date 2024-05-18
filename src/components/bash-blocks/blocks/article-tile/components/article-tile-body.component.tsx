import { FC } from 'react'
import { formatArticle } from '../../../../../scripts'
import { Typography } from '../../../basics'
import { Article } from '../../../partials'
import { ArticleTileBodyProps } from '../article-tile.types'

export const ArticleTileBody: FC<ArticleTileBodyProps> = ({ body }) =>
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
                true,
                false
            )}
            textAlign="justify"
            extendParagraphMargins
        />
    ) : (
        <Typography type="body" textAlign="justify" light paragraphMargins>
            {body}
        </Typography>
    )
