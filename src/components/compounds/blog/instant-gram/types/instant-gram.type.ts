import { CompiledEventProps } from '../../../../../scripts'

export type InstantGramSearchListProps = {
    url?: string
    func: (() => void) | ((e: any) => void)
    items: {
        id: string
        prefix?: string
        names: string[]
    }[]
}

export type InstantGramSearchTileProps = {
    url?: string
    funcInput: (e: any) => void
    funcButton: () => void
    funcSelect: (e: any) => void
}

export interface InstantGramResultTileProps extends CompiledEventProps {
    url: string
}
