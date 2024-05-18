import { ElementType } from 'react'
import { Color } from './color.type'
import { Url } from './url.type'

export type Text = {
    type:
        | 't1'
        | 't2'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'body'
        | 'caption'
        | 'footnote'
        | 'tiny'
    children?: string | React.ReactElement | React.ReactNode | Element
    color?: Color
    inline?: boolean
    boldFace?: boolean
    italicize?: boolean
    smallCaps?: boolean
    textDecoration?: 'none' | 'overline' | 'underline' | 'lineThrough'
    link?: Url['link']
    light?: boolean
    shadow?: boolean
}
