import { TypographyStyleProps } from '../..'

export type ArticleProps = {
    // sections: Array<{
    //     type: TypographyProps['type']
    //     content: TypographyProps['content']
    //     color?: TypographyProps['color']
    //     inline?: TypographyProps['inline']
    //     boldFace?: TypographyProps['boldFace']
    //     italicize?: TypographyProps['italicize']
    //     smallCaps?: TypographyProps['smallCaps']
    //     textDecoration?: TypographyProps['textDecoration']
    //     link?: TypographyProps['link']
    // }>
    sections: TypographyStyleProps[]
    fontFamily?: 'serif' | 'sans-serif'
    textAlign?: 'left' | 'center' | 'justify' | 'right'
    mT?: string
    mB?: string
}
