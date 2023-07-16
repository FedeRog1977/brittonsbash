import { FC } from 'react'
import { FootnoteProps, Typography } from '../..'
import { Tile } from '.'

export const Footnote: FC<FootnoteProps> = ({ ...props }: FootnoteProps) => {
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
