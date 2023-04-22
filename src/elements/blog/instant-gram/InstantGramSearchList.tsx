function InstantGramSearchList({ className, func, items, year }: any) {
    return (
        <select className={className} onChange={func}>
            <option value='' disabled selected>{year}</option>
            {items.map(
                ({ id, namePrefix, nameSuffix }: any) =>
                    <option key={id} value={nameSuffix}>
                        {namePrefix &&
                            <>{namePrefix}{': '}</>
                        }
                        {nameSuffix}
                    </option>
            )
            }
        </select >
    )
}

export default InstantGramSearchList;