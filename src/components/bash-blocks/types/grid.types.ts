import { AlignProps } from '.'

export type GridProps = {
    children: React.ReactNode
    columnItem?: number[]
    rowItem?: number[]
    align?: string
    textAlign?: AlignProps
}
