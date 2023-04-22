import { FC, ReactElement } from "react";
import "./styles/Tile.css";

interface TileProps {
    type:
    | 'clear'
    | 'clear-condensed'
    | 'solid';
    content: ReactElement;
}

const Tile: FC<TileProps> = (
    { type, content }: any
) => {
    return (
        <div className={`tile-${type}`}>
            {content}
        </div>
    )
}

export default Tile;