import { AlignProps } from '..'

export type TileProps = {
    type: 'clear' | 'solid'
    top?: boolean
    outline?: boolean
    margins?: boolean
    img?: string
    textAlign?: AlignProps
    children: React.ReactNode
}
