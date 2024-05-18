import { FC } from 'react'
import { ImageMatrix } from '../../../partials'
import { ArticleTileImageMatrixProps } from '../article-tile.types'

export const ArticleTileImageMatrix: FC<ArticleTileImageMatrixProps> = ({
    items,
}) => <ImageMatrix items={items} />
