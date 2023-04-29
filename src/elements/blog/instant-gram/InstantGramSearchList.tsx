function InstantGramSearchList({ className, func, items, year }: any) {
    return (
        <select className={className} onChange={func}>
            <option value='' disabled selected>{year}</option>
            {items.map(
                ({ id, prefix, names }: any) =>
                    <option key={id} value={names.join(' / ')}>
                        {prefix &&
                            <>{prefix}{': '}</>
                        }
                        {names.join(' / ')}
                    </option>
            )}
        </select >
    )
}

export default InstantGramSearchList;