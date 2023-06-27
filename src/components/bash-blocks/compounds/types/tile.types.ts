import { TypographyProps } from '../../elements'

export type TileProps = {
    type: 'clear' | 'clear-condensed' | 'solid'
    top?: boolean
    dense?: boolean
    textAlign?: TypographyProps['textAlign']
    children: React.ReactElement
}
