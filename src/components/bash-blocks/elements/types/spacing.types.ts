import { TypographyProps } from './typography.types'

export type SpacingProps = {
    mX?: number
    mY?: number
    mT?: number
    mB?: number
    mL?: number
    mR?: number
    pX?: number
    pY?: number
    pT?: number
    pB?: number
    pL?: number
    pR?: number
    children?: React.ReactElement
    textAlign?: TypographyProps['textAlign']
    ruleTop?: boolean
    ruleBottom?: boolean
    backgroundColor?: string
    border?: string
    borderRadius?: string
    position?: string
}
