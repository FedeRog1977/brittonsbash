import { FC } from 'react'
import { TileProps } from '..'
import '../styles/tile.styles.css'

export const Tile: FC<TileProps> = ({ type, top, dense, children }: any) => {
    return (
        <div
            className={`
                tile-${type}
                ${top && 'tile-top'}
                ${dense && 'tile-dense'}
            `}
        >
            {children}
        </div>
    )
}
