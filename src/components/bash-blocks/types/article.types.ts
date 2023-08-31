import {
    TypographyTextProps,
    TypographyProps,
    MarginProps,
    AlignProps,
} from '.'

export type ArticleProps = {
    sections: TypographyTextProps[]
    fontFamily?: TypographyProps['fontFamily']
    textAlign?: AlignProps
} & MarginProps
