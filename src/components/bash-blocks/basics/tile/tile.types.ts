import { AlignProps, ImageProps } from '../../reference'
import { GradientProps } from '../gradient'

export type TileProps = {
    type: 'clear' | 'solid'
    top?: boolean
    bottom?: boolean
    dense?: boolean
    outline?: boolean
    margins?: boolean
    stacked?: boolean
    img?: ImageProps
    gradient?: GradientProps
    textAlign?: AlignProps
    children: React.ReactNode
    anchor?: string
}
