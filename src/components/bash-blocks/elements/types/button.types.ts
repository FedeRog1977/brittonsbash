import { TypographyProps } from './typography.types'

export type ButtonProps = {
    type: string
    func: () => void
    value?: string
    content: string | React.ReactElement
    subContent?: string
    textAlign?: TypographyProps['textAlign']
    dots?: boolean
}
