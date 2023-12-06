import { CompiledEventProps } from '../../../../../scripts'

export type InstantGramSearchListProps = {
    func: (() => void) | ((e: any) => void)
    items: {
        id: string
        prefix?: string
        names: string[]
    }[]
}

export type InstantGramSearchTileProps = {
    funcInput: (e: any) => void
    funcButton: () => void
    funcSelect: (e: any) => void
}

export type InstantGramResultTileProps = CompiledEventProps
