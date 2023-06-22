import { TypographyProps } from './typography.types'

export type ButtonProps = {
    type: string
    func: () => void
    value?: string
    content: string | React.ReactElement
    textAlign?: TypographyProps['textAlign']
    borders?: boolean
}
