import { Button } from '../../../../bash-blocks'
import { useScreenWidth } from '../../../../../scripts'
import { InstantGramSearchListProps } from '../types'

export const InstantGramSearchList: React.FC<InstantGramSearchListProps> = ({
    url,
    func,
    items,
}: InstantGramSearchListProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            {items.map(
                ({
                    id,
                    prefix,
                    names,
                }: InstantGramSearchListProps['items'][0]) => (
                    <Button
                        key={id}
                        typeType={isMobile ? 'h4' : 'body'}
                        forceWidth={!isMobile ? 25 : 100}
                        value={names.join(' - ')}
                        link={{ url: `#${url}#result` }}
                        func={func}
                        funcResp={false}
                        content={
                            <>
                                {prefix && prefix + ':'}
                                {names.map((name: string) => (
                                    <div key={name}>{name}</div>
                                ))}
                            </>
                        }
                        subContent={id.slice(-2)}
                        subContentTop
                        color="darkerGrey"
                        coarsePadding
                    />
                )
            )}
        </>
    )
}
