import { Button, Spacing } from '../../../bash-blocks'
import { useDropDown, useScreenWidth } from '../../../../scripts'
import { InstantGramSearchListProps } from '../..'

export const InstantGramSearchList: React.FC<InstantGramSearchListProps> = ({
    ...props
}: InstantGramSearchListProps) => {
    const { isMobile } = useScreenWidth()
    const { showDropDown, setShowDropDown } = useDropDown()

    return (
        <>
            <Button
                typeType="t2"
                buttonType="dense-clear"
                func={() => setShowDropDown(!showDropDown)}
                funcResp={showDropDown}
                content={props.year}
                subContent={`Season ${props.season}`}
                color="darkerGrey"
            />
            {showDropDown && (
                <div>
                    {props.items.map(({ id, prefix, names }: any) => (
                        <Button
                            key={id}
                            buttonType={`${
                                isMobile ? 'regular' : 'dense'
                            }-clear`}
                            func={() => setShowDropDown(false)}
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
                                                {names.map((name: any) => (
                                                    <div key={name}>{name}</div>
                                                ))}
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
                    ))}
                </div>
            )}
        </>
    )
}
