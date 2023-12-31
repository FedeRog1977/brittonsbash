import { AlignProps } from '../../reference'
import { GradientProps } from '../gradient'

export type TileProps = {
    type: 'clear' | 'solid'
    top?: boolean
    outline?: boolean
    margins?: boolean
    stacked?: boolean
    img?: string
    gradient?: GradientProps
    textAlign?: AlignProps
    children: React.ReactNode
    anchor?: string
}
