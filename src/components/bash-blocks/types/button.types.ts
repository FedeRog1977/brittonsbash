import { TypographyProps } from '.'

export type ButtonProps = {
    typeType?: TypographyProps['type']
    buttonType: string
    value?: string
    func: (() => void) | ((e: any) => void)
    funcResp?: boolean
    content?: string | React.ReactElement
    subContent?: string | React.ReactElement
    textAlign?: TypographyProps['textAlign']
    color?: string
    accents?: boolean
    accentsTop?: boolean
    bars?: boolean
}
