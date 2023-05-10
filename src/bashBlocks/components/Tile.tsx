import { FC, ReactElement } from "react";
import "./styles/Tile.css";

interface TileProps {
    type:
    | 'clear'
    | 'clear-condensed'
    | 'solid';
    top?: boolean;
    dense?: boolean;
    content: ReactElement;
}

const Tile: FC<TileProps> = (
    { type, top, dense, content }: any
) => {
    return (
        <div
            className={`
                tile-${type}
                ${top && 'tile-top'}
                ${dense && 'tile-dense'}
            `}
        >
            {content}
        </div>
    )
}

export default Tile;