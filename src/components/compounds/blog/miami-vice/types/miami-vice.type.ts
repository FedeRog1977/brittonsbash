export type MiamiViceSearchListProps = {
    func: (() => void) | ((e: any) => void)
    items: {
        heading?: string
        subHeading?: string
        video: string
    }[]
}

export type MiamiViceSearchTileProps = {
    funcSelect: (e: any) => void
}
