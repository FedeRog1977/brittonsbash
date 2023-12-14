import styles from './search.module.scss'
import { SearchProps } from '.'

export const Search: React.FC<SearchProps> = ({ ...props }: SearchProps) => (
    <input
        type="text"
        className={styles.search}
        onChange={props.func}
        placeholder={props.placeholder}
    />
)
