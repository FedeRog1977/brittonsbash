export type InstantGramSearchListProps = {
    func: (() => void) | ((e: any) => void)
    items: {
        id: string
        prefix: string
        names: string[]
    }[]
    year: string
    season: string
}
