import { TileProps } from '../../basics'
import { ArticleProps } from '../../partials'
import { BookshelfProps } from '../../partials/bookshelf/bookshelf.types'
import { AlignProps } from '../../reference'

export type LibraryTileProps = {
    type?: TileProps['type']
    heading: string
    subHeading?: string
    body?: string | ArticleProps['sections']
    bookShelves: BookshelfProps[]
    textAlign?: AlignProps
    margins?: boolean
}
