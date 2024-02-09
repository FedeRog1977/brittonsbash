import { Tile, Typography } from '../../basics'
import {
    ArticleTileBodyProps,
    ArticleTileBookShelfProps,
    ArticleTileImageMatrixProps,
    ArticleTileProps,
    Section,
} from './article-tile.types'
import {
    ArticleTileBody,
    ArticleTileBookShelf,
    ArticleTileImageMatrix,
} from './components'

const getContent = (
    component: Section['component'],
    content: Section['content']
) => (
    <>
        {component === 'body' && (
            <ArticleTileBody {...(content as ArticleTileBodyProps)} />
        )}
        {component === 'bookShelf' && (
            <ArticleTileBookShelf {...(content as ArticleTileBookShelfProps)} />
        )}
        {component === 'imageMatrix' && (
            <ArticleTileImageMatrix
                {...(content as ArticleTileImageMatrixProps)}
            />
        )}
    </>
)

export const ArticleTile: React.FC<ArticleTileProps> = ({
    type = 'clear',
    top = false,
    heading,
    subHeading,
    textAlign = 'center',
    margins = false,
    sections,
}: ArticleTileProps) => (
    <Tile type={type} margins={margins} top={top}>
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
        {sections.map(({ component, content }, index) =>
            getContent(component, content)
        )}
    </Tile>
)
