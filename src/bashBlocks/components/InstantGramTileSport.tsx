import { FC } from "react";
import ImageSlider from "../elements/ImageSlider";
import Typography from "../elements/Typography";
import "./styles/InstantGramTile.css";

export interface InstantGramTileSportProps {
    sportEvent: {
        id: string;
        routeName: string;
        dist: number;
        elev: number;
        time: string;
        companionship: number,
        islands: [],
        munros?: [];
        munroTops?: [],
        corbetts?: [],
        corbettTops?: [],
        grahams?: [],
        subTwos?: [],
        donalds?: [],
    },
}

const InstantGramTileSport: FC<InstantGramTileSportProps> = (
    { sportEvent }: any
) => {

    return (
        <div className='instant-gram-tile-sport'>
            <p>{sportEvent.dist}, {sportEvent.elev}, {sportEvent.time}</p>
        </div>
    )
}

export default InstantGramTileSport;