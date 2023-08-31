import { TypographyProps } from '.'

export type TileProps = {
    type: 'clear' | 'solid'
    top?: boolean
    dense?: boolean
    outline?: boolean
    noShadow?: boolean
    textAlign?: TypographyProps['textAlign']
    children: React.ReactNode
}
