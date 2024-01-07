import { LinkProps } from '../../reference'

type TitleTileLinkProps = {
    content: string
} & LinkProps

export type TitleTileItemsProps = {
    content: string
    subContent: TitleTileLinkProps
}

export type TitleTileProps = {
    heading?: string
    titleItems?: TitleTileItemsProps[]
    bodyItems?: TitleTileItemsProps[]
}
