import { AlignProps } from '.'

export type TileProps = {
    type: 'clear' | 'solid'
    top?: boolean
    dense?: boolean
    outline?: boolean
    noShadow?: boolean
    textAlign?: AlignProps
    children: React.ReactNode
}
