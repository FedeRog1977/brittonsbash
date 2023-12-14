import { ImageProps } from '../../partials'
import { AlignProps, ColorProps, LinkProps, MarginProps } from '../../reference'

export type TypographyTextProps = {
    type?:
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
    content?: string | React.ReactElement | React.ReactNode | Element
    imageContent?: ImageProps
    color?: ColorProps
    inline?: boolean
    boldFace?: boolean
    italicize?: boolean
    smallCaps?: boolean
    textDecoration?: 'overline' | 'underline' | 'lineThrough'
    link?: LinkProps['link']
    light?: boolean
    shadow?: boolean
}

export type TypographyStyleProps = {
    fontFamily?: 'serif' | 'sansSerif'
    textAlign?: AlignProps
    paragraphMargins?: boolean
} & MarginProps

export type TypographyProps = TypographyTextProps & TypographyStyleProps
