export type InstantGramSearchListProps = {
    func: () => void
    items: {
        id: string
        prefix: string
        names: string[]
    }[]
    year: string
    season: string
}
