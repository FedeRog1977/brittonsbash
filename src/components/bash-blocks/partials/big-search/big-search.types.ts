import { SearchProps } from '../../basics'

export type BigSearchProps = {
    funcInput: SearchProps['func']
    funcButton: () => void
    placeholder?: string
    selects?: {
        funcSelect: () => void
        content: any[]
        placeholder?: string
    }[]
}
