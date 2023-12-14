import { AlignProps } from '../../reference'

export type ContentTileProps = {
    img?: string
    heading: string
    subHeading?: string
    body?: string
    children?: React.ReactNode
    textAlign?: AlignProps
}
