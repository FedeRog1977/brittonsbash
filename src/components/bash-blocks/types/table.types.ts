type ColumnProps = {
    title?: string | React.ReactElement
    entries: (string | React.ReactElement | undefined)[]
}

export type RowProps = {
    leftItem?: string | React.ReactElement
    rightItem?: string | React.ReactElement
}

export type ColumnTableProps = {
    leftColumn: ColumnProps
    rightColumns: ColumnProps[]
}

export type RowTableProps = {
    titleRow: RowProps
    rows: RowProps[]
}
