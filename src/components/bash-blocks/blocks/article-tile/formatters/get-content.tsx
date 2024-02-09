import { Section } from '../article-tile.types'
import {
    ArticleTileBody,
    ArticleTileBookShelf,
    ArticleTileImageMatrix,
} from '../components'

export const getContent = (section: Section) => (
    <>
        {section.component === 'body' && (
            <ArticleTileBody {...section.content} />
        )}
        {section.component === 'bookShelf' && (
            <ArticleTileBookShelf {...section.content} />
        )}
        {section.component === 'imageMatrix' && (
            <ArticleTileImageMatrix {...section.content} />
        )}
    </>
)
