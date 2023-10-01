import { AlignProps, ItemsProps, ItemsPropsAdv } from '.'

export type GridProps = {
    displayOverwrite?: string
    alignColumns?: string
    alignRows?: string
    columnGap?: number
    rowGap?: number
    justifyContent?: ItemsPropsAdv
    alignContent?: ItemsPropsAdv
    justifyItems?: ItemsProps
    alignItems?: ItemsProps
    columnItem?: number[]
    rowItem?: number[]
    textAlign?: AlignProps
    children: React.ReactNode
}
