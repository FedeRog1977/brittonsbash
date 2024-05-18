import { FC } from 'react'
import { Tile, TileProps, Typography } from '../../basics'
import { Align } from '../../reference'
import { getContent } from './formatters/get-content'
import { Section } from './types/section.type'

export type ArticleTileProps = {
    type?: TileProps['type']
    heading?: string
    subHeading?: string
    textAlign?: Align
    sections: Section[]
}

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
