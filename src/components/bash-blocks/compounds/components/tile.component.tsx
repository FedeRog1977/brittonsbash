import { TileProps } from '..'
import '../styles/tile.styles.css'

export const Tile: React.FC<TileProps> = ({ ...props }: TileProps) => (
    <div
        className={`
                tile-${props.type}
                ${props.top && 'tile-top'}
                ${props.dense && 'tile-dense'}
            `}
        style={{
            textAlign: props.textAlign,
        }}
    >
        {props.children}
    </div>
)
