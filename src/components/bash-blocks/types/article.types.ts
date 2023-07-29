import { TypographyTextProps, TypographyProps, MarginProps } from '.'

export type ArticleProps = {
    sections: TypographyTextProps[]
    fontFamily?: TypographyProps['fontFamily']
    textAlign?: TypographyProps['textAlign']
} & MarginProps
