import { Button } from '../../bash-blocks'
import { useDropDown, useScreenWidth } from '../../../scripts'
import { InstantGramSearchListProps } from '..'
import { FC } from 'react'

export const InstantGramSearchList: FC<InstantGramSearchListProps> = ({
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
                            typeType="h4"
                            buttonType={`${
                                isMobile ? 'regular' : 'dense'
                            }-clear`}
                            value={names.join(' - ')}
                            func={props.func}
                            funcResp={false}
                            content={
                                <>
                                    {prefix && prefix + ':'}
                                    {names.map((name: any) => (
                                        <div key={name + 'dkjsdj'}>{name}</div>
                                    ))}
                                </>
                            }
                            subContent={id.slice(-2)}
                            color="var(--darker-grey)"
                            accents
                            accentsTop
                        />
                    ))}
                </div>
            )}
        </>
    )
}
