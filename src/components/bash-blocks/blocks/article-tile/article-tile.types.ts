// import React from 'react'
import { TileProps } from '../../basics'
import { ImageMatrixProps, ArticleProps, BookshelfProps } from '../../partials'
import { AlignProps } from '../../reference'

export type ArticleTileBodyProps = { body: string | ArticleProps['sections'] }
export type ArticleTileBookShelfProps = { items: BookshelfProps[] }
export type ArticleTileImageMatrixProps = { items: ImageMatrixProps['items'] }

// Move this to some form of `keyof` map

// const components: {
//     body: ArticleTileBody
//     bookShelf: ArticleTileBookShelf
//     imageMatrix: ArticleTileImageMatrix
// }

export type ArticleTileProps = {
    type?: TileProps['type']
    top?: boolean
    heading?: string
    subHeading?: string
    textAlign?: AlignProps
    margins?: boolean
    sections: {
        component: 'body' | 'bookShelf' | 'imageMatrix'
        // Component: React.ComponentType<any>
        content:
            | ArticleTileBodyProps
            | ArticleTileBookShelfProps
            | ArticleTileImageMatrixProps
    }[]
}
