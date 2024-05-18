import { Button } from '../../../../bash-blocks'
import { generateUniqueKey, useScreenWidth } from '../../../../../scripts'
import { InstantGramSearchListProps } from '../types'
import { FC } from 'react'

export const InstantGramSearchList: FC<InstantGramSearchListProps> = ({
    url,
    func,
    items,
}) => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            {items.map(({ id, prefix, names }, index) => (
                <Button
                    key={generateUniqueKey(index)}
                    typeType={isMobile ? 'h4' : 'body'}
                    forceWidth={!isMobile ? 25 : 100}
                    value={names.join(' - ')}
                    func={func}
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
