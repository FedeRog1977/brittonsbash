import './search.styles.scss'
import { SearchProps } from '..'

export const Search: React.FC<SearchProps> = ({ ...props }: SearchProps) => (
    <input
        type="text"
        className={props.className}
        onChange={props.func}
        placeholder={props.placeholder}
    />
)
