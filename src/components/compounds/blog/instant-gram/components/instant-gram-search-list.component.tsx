import { Button, Spacing } from '../../../../bash-blocks'
import { useShowElement, useScreenWidth } from '../../../../../scripts'
import { InstantGramSearchListProps } from '..'

export const InstantGramSearchList: React.FC<InstantGramSearchListProps> = ({
    ...props
}: InstantGramSearchListProps) => {
    const { isMobile } = useScreenWidth()
    const { showElement, setShowElement } = useShowElement()

    return (
        <>
            <Button
                typeType={isMobile ? 't1' : 't2'}
                type="regularClear"
                func={() => setShowElement(!showElement)}
                funcResp={showElement}
                content={props.year}
                subContent={`Season ${props.season}`}
                subContentTop={isMobile}
                color="darkerGrey"
            />
            {showElement && (
                <div>
                    {props.items.map(
                        ({
                            id,
                            prefix,
                            names,
                        }: InstantGramSearchListProps['items'][0]) => (
                            <Button
                                key={id}
                                type="regularClear"
                                forceWidth={!isMobile ? 25 : undefined}
                                func={() => setShowElement(false)}
                                funcResp={false}
                                content={
                                    <Spacing mY={isMobile ? 15 : 30}>
                                        <Button
                                            key={id}
                                            typeType={isMobile ? 'h4' : 'body'}
                                            type="regularClear"
                                            value={names.join(' - ')}
                                            func={props.func}
                                            funcResp={false}
                                            content={
                                                <>
                                                    {prefix && prefix + ':'}
                                                    {names.map(
                                                        (name: string) => (
                                                            <div key={name}>
                                                                {name}
                                                            </div>
                                                        )
                                                    )}
                                                </>
                                            }
                                            subContent={id.slice(-2)}
                                            subContentTop
                                            removePadding
                                            color="darkerGrey"
                                        />
                                    </Spacing>
                                }
                            />
                        )
                    )}
                </div>
            )}
        </>
    )
}
