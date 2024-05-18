import { FC } from 'react'

export type AnchorProps = {
    url: string
}

export const Anchor: FC<AnchorProps> = ({ url }) => <div id={url} />
