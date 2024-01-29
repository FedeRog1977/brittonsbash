import React from 'react'
import { TileProps } from '../../basics'
import { ImageMatrixProps, ArticleProps, BookshelfProps } from '../../partials'
import { AlignProps } from '../../reference'

export type ArticleTileBodyProps = { body: string | ArticleProps['sections'] }
export type ArticleTileBookShelfProps = { items: BookshelfProps[] }
export type ArticleTileImageMatrixProps = { items: ImageMatrixProps['items'] }

export type ArticleTileProps = {
    type?: TileProps['type']
    heading?: string
    subHeading?: string
    textAlign?: AlignProps
    margins?: boolean
    sections: {
        Component: React.ComponentType<any>
        content:
            | ArticleTileBodyProps
            | ArticleTileBookShelfProps
            | ArticleTileImageMatrixProps
    }[]
}
