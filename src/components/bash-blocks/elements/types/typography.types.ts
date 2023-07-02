import React from 'react'
import { MarginProps } from './margin-padding.types'

export type TypographyTextProps = {
    type?:
        | 't1'
        | 't2'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'body'
        | 'body-light'
        | 'caption'
        | 'footnote'
        | 'tiny'
    content: string | React.ReactElement | React.ReactNode | Element
    color?: string
    inline?: boolean
    boldFace?: boolean
    italicize?: boolean
    smallCaps?: boolean
    textDecoration?: 'overline' | 'underline' | 'line-through'
    link?: string
}

export type TypographyStyleProps = {
    fontFamily?: 'serif' | 'sans-serif'
    textAlign?: 'left' | 'center' | 'justify' | 'right'
    paragraphMargins?: boolean
} & MarginProps

export type TypographyProps = TypographyTextProps & TypographyStyleProps
