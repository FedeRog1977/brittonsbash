import { FC, ReactElement } from "react";
import "./styles/Tile.css";

interface TileProps {
    type:
    | 'clear'
    | 'clear-condensed'
    | 'solid';
    top?: boolean;
    dense?: boolean;
    children: ReactElement;
}

const Tile: FC<TileProps> = (
    { type, top, dense, children }: any
) => {
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

export default Tile;