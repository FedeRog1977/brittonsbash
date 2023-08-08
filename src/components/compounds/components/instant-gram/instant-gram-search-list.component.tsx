import { Button } from '../../../bash-blocks'
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
                typeType={isMobile ? 'h2' : 'h1'}
                buttonType="dense-clear"
                func={() => setShowDropDown(!showDropDown)}
                funcResp={showDropDown}
                content={props.year}
                subContent={`Season ${props.season}`}
                color="var(--darker-grey)"
                accents
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
                                <Button
                                    key={id}
                                    typeType="h4"
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
                                    color="var(--darker-grey)"
                                    subContent={id.slice(-2)}
                                    accents
                                    accentsTop
                                />
                            }
                        />
                    ))}
                </div>
            )}
        </>
    )
}
