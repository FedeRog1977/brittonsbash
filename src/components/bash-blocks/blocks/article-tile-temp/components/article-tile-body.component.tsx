import { formatArticle } from '../../../../../scripts'
import { Typography } from '../../../basics'
import { Article } from '../../../partials'
import { ArticleTileBodyProps } from '../article-tile.types'

export const ArticleTileBody: React.FC<ArticleTileBodyProps> = ({
    body,
}: ArticleTileBodyProps) =>
    Array.isArray(body) ? (
        <Article
            sections={formatArticle(
                body,
                'body',
                'darkerGrey',
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
        <Typography
            type="body"
            content={body}
            textAlign="justify"
            light
            paragraphMargins
        />
    )
