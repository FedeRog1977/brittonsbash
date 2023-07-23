import { ButtonProps, TypographyProps } from '../..'

export type DropDownProps = {
    typeType?: TypographyProps['type']
    buttonType: ButtonProps['type']
    func: () => void
    funcResp: boolean
    content?: ButtonProps['content']
    subContent?: ButtonProps['subContent']
    textAlign?: TypographyProps['textAlign']
    color?: string
    accents?: ButtonProps['accents']
}
