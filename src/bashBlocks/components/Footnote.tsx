import { FC } from "react";
import Typography from "../elements/Typography";
import Tile from "./Tile";

interface FootnoteProps {
    content: string;
}

const Footnote: FC<FootnoteProps> = (
    { content }: any
) => {
    return (
        <Tile
            type='clear'
            content={
                <Typography
                    type='footnote'
                    content={content}
                />
            }
        />
    )
}

export default Footnote;