import { FC } from 'react'
import '../styles/search.styles.css'
import { SearchProps } from '..'

export const Search: FC<SearchProps> = ({
    className,
    func,
    placeholder,
}: any) => (
    <input
        type="text"
        className={className}
        onChange={func}
        placeholder={placeholder}
    />
)
