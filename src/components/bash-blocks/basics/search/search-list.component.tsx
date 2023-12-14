import styles from './search.module.scss'
import { SearchListProps } from '.'

export const SearchList: React.FC<SearchListProps> = ({
    ...props
}: SearchListProps) => (
    <select className={styles.search} onChange={props.func}>
        <option value="" disabled selected>
            Select {props.placeholder}
        </option>
        {props.content.map(({ name }: SearchListProps['content'][0]) => (
            <option key={name} value={name}>
                {name}
            </option>
        ))}
    </select>
)
