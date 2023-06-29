import { MarginProps, PaddingProps } from './margin-padding.types'
import { TypographyProps } from './typography.types'

export type SpacingProps = {
    mX?: number
    mY?: number
    pX?: number
    pY?: number
    children?: React.ReactElement
    textAlign?: TypographyProps['textAlign']
    ruleTop?: boolean
    ruleBottom?: boolean
    backgroundColor?: string
    border?: string
    borderRadius?: string
    position?: string
} & MarginProps &
    PaddingProps
