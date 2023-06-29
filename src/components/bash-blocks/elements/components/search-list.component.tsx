import { FC } from 'react'
import '../styles/search.styles.css'
import { SearchListProps } from '..'

export const SearchList: FC<SearchListProps> = ({
    className,
    func,
    content,
    placeholder,
}: any) => (
    <select className={className} onChange={func}>
        <option value="" disabled selected>
            Select {placeholder}
        </option>
        {content.map(({ index, name }: any) => (
            <option key={index} value={name}>
                {name}
            </option>
        ))}
    </select>
)
