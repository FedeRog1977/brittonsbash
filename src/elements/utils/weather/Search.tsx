const Search = ({ id, func, text }: any) => {

    return (
        <input
            type="text"
            id={id}
            onChange={func}
            placeholder={text}
        >
        </input>
    )
}

export default Search;