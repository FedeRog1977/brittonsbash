import { TileProps } from '../../basics'
import { ImageMatrixProps, ArticleProps, BookshelfProps } from '../../partials'
import { AlignProps } from '../../reference'

export type ArticleTileBodyProps = { body: string | ArticleProps['sections'] }
export type ArticleTileBookShelfProps = { items: BookshelfProps[] }
export type ArticleTileImageMatrixProps = { items: ImageMatrixProps['items'] }

type OrderedSection<T extends string, P extends object> = {
    component: T
    content: P
}

export type Section =
    | OrderedSection<'body', ArticleTileBodyProps>
    | OrderedSection<'bookShelf', ArticleTileBookShelfProps>
    | OrderedSection<'imageMatrix', ArticleTileImageMatrixProps>

export type ArticleTileProps = {
    type?: TileProps['type']
    top?: boolean
    heading?: string
    subHeading?: string
    textAlign?: AlignProps
    sections: Section[]
}
