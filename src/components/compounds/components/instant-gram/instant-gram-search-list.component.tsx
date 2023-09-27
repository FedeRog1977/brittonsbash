import { Button, ButtonProps, Spacing } from '../../../bash-blocks'
import { useShowElement, useScreenWidth } from '../../../../scripts'
import { InstantGramSearchListProps } from '../..'

export const InstantGramSearchList: React.FC<InstantGramSearchListProps> = ({
    ...props
}: InstantGramSearchListProps) => {
    const { isMobile } = useScreenWidth()
    const { showElement, setShowElement } = useShowElement()

    return (
        <>
            <Button
                typeType="t2"
                buttonType="dense-clear"
                func={() => setShowElement(!showElement)}
                funcResp={showElement}
                content={props.year}
                subContent={`Season ${props.season}`}
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
                                buttonType={`${
                                    isMobile ? 'regular' : 'dense'
                                }-clear`}
                                func={() => setShowElement(false)}
                                funcResp={false}
                                content={
                                    <Spacing mY={isMobile ? 15 : 30}>
                                        <Button
                                            key={id}
                                            typeType={isMobile ? 'h4' : 'body'}
                                            buttonType="regular-clear"
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
                                            color="darkerGrey"
                                            subContent={id.slice(-2)}
                                            subContentTop
                                            removePadding
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
