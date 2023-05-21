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
        <Tile type='clear'>
            <Typography
                type='footnote'
                textAlign='justify'
                content={content}
            />
        </Tile>
    )
}

export default Footnote;