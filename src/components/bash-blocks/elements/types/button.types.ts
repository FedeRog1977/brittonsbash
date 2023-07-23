import { TypographyProps } from './typography.types'

export type ButtonProps = {
    type: string
    func: (() => void) | ((e: any) => void)
    value?: string
    content: string | React.ReactElement
    subContent?: string | React.ReactElement
    textAlign?: TypographyProps['textAlign']
    accents?: boolean
}
