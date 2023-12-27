import { AlignProps } from '../../reference'

export type TileProps = {
    type: 'clear' | 'solid'
    top?: boolean
    outline?: boolean
    margins?: boolean
    stacked?: boolean
    img?: string
    gradient?: {
        start: 'left' | 'right' | 'center'
    }
    textAlign?: AlignProps
    children: React.ReactNode
    anchor?: string
}
