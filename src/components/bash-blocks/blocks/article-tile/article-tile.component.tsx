import { FC } from 'react'
import { Tile, Typography } from '../../basics'
import { ArticleTileProps, Section } from './article-tile.types'
import { getContent } from './formatters'

export const ArticleTile: FC<ArticleTileProps> = ({
    type = 'clear',
    heading,
    subHeading,
    textAlign = 'center',
    sections,
}) => (
    <Tile type={type}>
        {subHeading && (
            <Typography type="h2" textAlign={textAlign} light>
                {subHeading}
            </Typography>
        )}
        {heading && (
            <Typography type="h1" textAlign={textAlign} light paragraphMargins>
                {heading}
            </Typography>
        )}
        {sections.map((section) => getContent(section))}
    </Tile>
)
