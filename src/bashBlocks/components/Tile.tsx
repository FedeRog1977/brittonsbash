import { FC, ReactElement } from "react";
import "./styles/Tile.css";

interface TileProps {
    type:
    | 'clear'
    | 'clear-condensed'
    | 'solid';
    top?: boolean;
    content: ReactElement;
}

const Tile: FC<TileProps> = (
    { type, top, content }: any
) => {
    return (
        <div className={`tile-${type} ${top && 'tile-top'}`}>
            {content}
        </div>
    )
}

export default Tile;