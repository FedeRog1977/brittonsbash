export type TitleTileItemsProps = {
    content: string
    subContent: string
}

export type TitleTileProps = {
    heading?: string
    titleItems?: TitleTileItemsProps[]
    bodyItems?: TitleTileItemsProps[]
}
