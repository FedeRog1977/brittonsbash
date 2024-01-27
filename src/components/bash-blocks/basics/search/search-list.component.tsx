import { SearchListProps } from './search-list.types'
import styles from './search.module.scss'

export const SearchList: React.FC<SearchListProps> = ({
    func,
    content,
    placeholder,
}: SearchListProps) => (
    <select className={styles.search} onChange={func}>
        <option value="" disabled selected>
            {placeholder}
        </option>
        {content.map(({ name }, index) => (
            <option key={index} value={name}>
                {name}
            </option>
        ))}
    </select>
)
