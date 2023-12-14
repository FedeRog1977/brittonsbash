import { Tile, Typography } from '../../basics'
import { FootnoteProps } from '.'

export const Footnote: React.FC<FootnoteProps> = ({
    ...props
}: FootnoteProps) => {
    return (
        <Tile type="clear">
            <Typography
                type="footnote"
                textAlign="justify"
                content={props.content}
            />
        </Tile>
    )
}
