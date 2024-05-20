import { Button } from '../../../../bash-blocks'
import { generateUniqueKey, useScreenWidth } from '../../../../../scripts'
import { FC } from 'react'

type SearchListProps = {
    url?: string
    funcSelect: (() => void) | ((e: any) => void)
    items: {
        id: string
        prefix?: string
        names: string[]
    }[]
}

export const SearchList: FC<SearchListProps> = ({ url, funcSelect, items }) => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            {items.map(({ id, prefix, names }, index) => (
                <Button
                    key={generateUniqueKey(index)}
                    typeType={isMobile ? 'h4' : 'body'}
                    forceWidth={!isMobile ? 25 : 100}
                    value={names.join(' - ')}
                    // link={{ url: `#${url}#result` }}
                    func={funcSelect}
                    funcResp={false}
                    content={
                        <>
                            {prefix && prefix + ':'}
                            {names.map((name, index) => (
                                <div key={generateUniqueKey(index)}>{name}</div>
                            ))}
                        </>
                    }
                    subContent={id.slice(-2)}
                    subContentTop
                    coarsePadding
                />
            ))}
        </>
    )
}
