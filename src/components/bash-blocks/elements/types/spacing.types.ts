import { MarginProps, PaddingProps } from './margin-padding.types'
import { TypographyProps } from './typography.types'

export type SpacingProps = {
    mX?: number
    mY?: number
    pX?: number
    pY?: number
    children?: React.ReactNode
    textAlign?: TypographyProps['textAlign']
    ruleTop?: boolean
    ruleBottom?: boolean
    backgroundColor?: string
    border?: string
    borderRadius?: string
    position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
} & MarginProps &
    PaddingProps
