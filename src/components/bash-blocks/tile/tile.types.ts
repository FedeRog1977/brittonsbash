import { AlignProps } from '..'

export type TileProps = {
    type: 'clear' | 'solid'
    top?: boolean
    outline?: boolean
    textAlign?: AlignProps
    children: React.ReactNode
}
