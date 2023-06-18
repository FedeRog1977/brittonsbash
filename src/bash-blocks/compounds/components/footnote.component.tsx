import { FC, ReactElement } from 'react'
import { Typography } from '../..'
import { Tile } from '.'

type FootnoteProps = {
    content: string | ReactElement
}

export const Footnote: FC<FootnoteProps> = ({ content }: any) => {
    return (
        <Tile type="clear">
            <Typography type="footnote" textAlign="justify" content={content} />
        </Tile>
    )
}
