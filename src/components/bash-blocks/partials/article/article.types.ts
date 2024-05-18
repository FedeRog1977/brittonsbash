import { TextProps, TypographyProps } from '../../basics'
import { AlignProps } from '../../reference'

export type ArticleProps = {
    sections: TextProps[]
    fontFamily?: TypographyProps['fontFamily']
    textAlign?: AlignProps
    extendParagraphMargins?: boolean
}
