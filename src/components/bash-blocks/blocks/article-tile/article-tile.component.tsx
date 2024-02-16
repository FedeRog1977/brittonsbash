import { Tile, Typography } from '../../basics'
import { ArticleTileProps, Section } from './article-tile.types'
import { getContent } from './formatters'

export const ArticleTile: React.FC<ArticleTileProps> = ({
    type = 'clear',
    heading,
    subHeading,
    textAlign = 'center',
    sections,
}: ArticleTileProps) => (
    <Tile type={type}>
        {subHeading && (
            <Typography
                type="h2"
                textAlign={textAlign}
                content={subHeading}
                light
            />
        )}
        {heading && (
            <Typography
                type="h1"
                textAlign={textAlign}
                content={heading}
                light
                paragraphMargins
            />
        )}
        {sections.map((section: Section) => getContent(section))}
    </Tile>
)
