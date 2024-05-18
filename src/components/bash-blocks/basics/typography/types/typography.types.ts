import { ElementType } from 'react'
import { AlignProps, ColorProps, LinkProps } from '../../../reference'

export type TextProps = {
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
    element?: ElementType
    color?: ColorProps
    inline?: boolean
    boldFace?: boolean
    italicize?: boolean
    smallCaps?: boolean
    textDecoration?: 'none' | 'overline' | 'underline' | 'lineThrough'
    link?: LinkProps['link']
    light?: boolean
    shadow?: boolean
}

export type StyleProps = {
    fontFamily?: 'serif' | 'sansSerif'
    textAlign?: AlignProps
    paragraphMargins?: boolean
}
