export type TypographyTextProps = {
    type:
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
    content: string | React.ReactElement
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
    refKey?: string
    mT?: string
    mB?: string
    mL?: string
    mR?: string
}

export type TypographyProps = TypographyTextProps & TypographyStyleProps
