import { FC } from 'react'
import { formatArticle } from '../../../../scripts'
import { Tile, Typography } from '../../basics'
import { Article } from '../../partials'
import { FootnoteTileProps } from './footnote-tile.types'

export const FootnoteTile: FC<FootnoteTileProps> = ({ content }) => (
    <Tile type="clear">
        {Array.isArray(content) ? (
            <Article
                sections={formatArticle(
                    content,
                    'footnote',
                    'darkerGrey',
                    false,
                    false,
                    false,
                    'none',
                    false,
                    false
                )}
                textAlign="justify"
            />
        ) : (
            <Typography type="footnote" textAlign="justify">
                {content}
            </Typography>
        )}
    </Tile>
)
