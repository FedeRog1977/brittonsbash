type ColumnProps = {
    title?: string | React.ReactElement
    entries: (string | React.ReactElement | undefined)[]
}

export type ActivityTileProps = {
    leftColumn: ColumnProps
    rightColumns: ColumnProps[]
}
