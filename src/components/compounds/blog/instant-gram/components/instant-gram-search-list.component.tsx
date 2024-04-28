import { Button } from '../../../../bash-blocks'
import { generateUniqueKey, useScreenWidth } from '../../../../../scripts'
import { InstantGramSearchListProps } from '../types'

export const InstantGramSearchList: React.FC<InstantGramSearchListProps> = ({
    url,
    func,
    items,
}: InstantGramSearchListProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            {items.map(({ id, prefix, names }, index) => (
                <Button
                    key={generateUniqueKey(index)}
                    typeType={isMobile ? 'h4' : 'body'}
                    forceWidth={!isMobile ? 25 : 100}
                    value={names.join(' - ')}
                    link={{ url: `#${url}#result` }}
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
                    color="darkerGrey"
                    coarsePadding
                />
            ))}
        </>
    )
}
