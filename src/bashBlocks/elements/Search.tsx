const Search = ({ className, func, content }: any) => (
    <input
        type="text"
        className={className}
        onChange={func}
        placeholder={content}
    />
)

export default Search
