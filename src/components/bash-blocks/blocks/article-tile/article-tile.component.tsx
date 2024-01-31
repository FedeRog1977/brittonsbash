import { Tile, Typography } from '../../basics'
import { ArticleTileProps } from './article-tile.types'

export const ArticleTile: React.FC<ArticleTileProps> = ({
    type = 'clear',
    heading,
    subHeading,
    textAlign = 'center',
    margins = false,
    sections,
}: ArticleTileProps) => (
    <Tile type={type} margins={margins}>
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
        {sections.map(({ Component, content }, index) => (
            <Component key={index} {...content} />
        ))}
    </Tile>
)
