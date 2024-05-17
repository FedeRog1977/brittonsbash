import { FC } from 'react'
import { AnchorProps } from './anchor.types'

export const Anchor: FC<AnchorProps> = ({ url }) => <div id={url} />
