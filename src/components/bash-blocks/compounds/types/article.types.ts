import { MarginProps, TypographyProps, TypographyTextProps } from '../..'

export type ArticleProps = {
    sections: TypographyTextProps[]
    fontFamily?: TypographyProps['fontFamily']
    textAlign?: TypographyProps['textAlign']
} & MarginProps
