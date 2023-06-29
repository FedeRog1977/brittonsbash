import { MarginProps, TypographyProps, TypographyStyleProps } from '../..'

export type ArticleProps = {
    sections: TypographyStyleProps[]
    fontFamily?: TypographyProps['fontFamily']
    textAlign?: TypographyProps['textAlign']
} & MarginProps
