import { LinkProps } from '.'
import { ImageProps } from './image.types'
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
        | 'caption'
        | 'footnote'
        | 'tiny'
    content?: string | React.ReactElement | React.ReactNode | Element
    imageContent?: ImageProps
    color?: string
    inline?: boolean
    boldFace?: boolean
    italicize?: boolean
    smallCaps?: boolean
    textDecoration?: 'overline' | 'underline' | 'line-through'
    link?: LinkProps['link']
}

export type TypographyStyleProps = {
    fontFamily?: 'serif' | 'sans-serif'
    textAlign?: 'left' | 'center' | 'justify' | 'right'
    paragraphMargins?: boolean
} & MarginProps

export type TypographyProps = TypographyTextProps & TypographyStyleProps