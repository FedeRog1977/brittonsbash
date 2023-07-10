export type ActivityTileProps = {
    title: {
        leftItem: string | React.ReactElement
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
