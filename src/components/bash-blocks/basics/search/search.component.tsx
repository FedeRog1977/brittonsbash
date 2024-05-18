import { FC } from 'react'
import styles from './search.module.scss'
import { SearchProps } from './search.types'

export const Search: FC<SearchProps> = ({ func, placeholder }) => (
    <input
        type="text"
        className={styles.search}
        onChange={func}
        placeholder={placeholder}
    />
)
