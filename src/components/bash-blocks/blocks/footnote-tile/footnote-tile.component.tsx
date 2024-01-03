import { Tile, Typography } from '../../basics'
import { FootnoteTileProps } from './footnote-tile.types'

export const FootnoteTile: React.FC<FootnoteTileProps> = ({
    content,
}: FootnoteTileProps) => (
    <Tile type="clear">
        <Typography type="footnote" textAlign="justify" content={content} />
    </Tile>
)
