import { TileProps } from '../../basics'
import { ImageMatrixProps, ArticleProps, BookshelfProps } from '../../partials'
import { AlignProps } from '../../reference'

export type ArticleTileImageProps = {
    heading?: string
    bodyOne?: string | ArticleProps['sections']
    items: ImageMatrixProps['items']
    bodyTwo?: string | ArticleProps['sections']
}

export type ArticleTileProps = {
    type?: TileProps['type']
    heading?: string
    subHeading?: string
    body?: string | ArticleProps['sections']
    imageMatrices?: ArticleTileImageProps[]
    bookShelves?: BookshelfProps[]
    textAlign?: AlignProps
    margins?: boolean
}
