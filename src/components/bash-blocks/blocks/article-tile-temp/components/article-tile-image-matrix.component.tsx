import { ImageMatrix } from '../../../partials'
import { ArticleTileImageMatrixProps } from '../article-tile.types'

export const ArticleTileImageMatrix: React.FC<ArticleTileImageMatrixProps> = ({
    items,
}: ArticleTileImageMatrixProps) => <ImageMatrix items={items} />
