import { TypographyTextProps, TypographyProps } from '../../basics'
import { AlignProps, MarginProps } from '../../reference'

export type ArticleProps = {
    sections: TypographyTextProps[]
    fontFamily?: TypographyProps['fontFamily']
    textAlign?: AlignProps
    extendParagraphMargins?: boolean
} & MarginProps
