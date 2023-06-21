import { FC } from 'react'
import { FootnoteProps, Typography } from '../..'
import { Tile } from '.'

export const Footnote: FC<FootnoteProps> = ({ content }: any) => {
    return (
        <Tile type="clear">
            <Typography type="footnote" textAlign="justify" content={content} />
        </Tile>
    )
}
