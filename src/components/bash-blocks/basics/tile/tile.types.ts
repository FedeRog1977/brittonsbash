import { AlignProps, ImageProps } from '../../reference'
import { GradientProps } from '../gradient'

export type TileProps = {
    type: 'clear' | 'solid'
    gap?: boolean
    dense?: boolean
    stacked?: boolean
    img?: ImageProps
    gradient?: GradientProps
    children: React.ReactNode
}
