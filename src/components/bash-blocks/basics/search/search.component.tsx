import styles from './search.module.scss'
import { SearchProps } from './search.types'

export const Search: React.FC<SearchProps> = ({
    func,
    placeholder,
}: SearchProps) => (
    <input
        type="text"
        className={styles.search}
        onChange={func}
        placeholder={placeholder}
    />
)
