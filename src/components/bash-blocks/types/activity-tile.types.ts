export type ActivityTileProps = {
    title: {
        leftItem?: string | React.ReactElement
        rightItems?:
            | string
            | React.ReactElement
            | (string | React.ReactElement)[]
    }
    entries: {
        leftItem: string | React.ReactElement
        rightItems?:
            | string
            | React.ReactElement
            | (string | React.ReactElement)[]
    }[]
}

type EntriesProps = {
    title?: string | React.ReactElement
    entries: string | React.ReactElement | (string | React.ReactElement)[]
}

export type ActivityTileTempProps = {
    leftColumn: EntriesProps
    rightColumns: EntriesProps[]
}
