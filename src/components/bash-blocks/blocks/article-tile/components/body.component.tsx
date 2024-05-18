import { FC } from 'react'
import { formatArticle } from '../../../../../scripts'
import { Typography } from '../../../basics'
import { Article, ArticleProps } from '../../../partials'

export type BodyProps = { body: string | ArticleProps['sections'] }

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
