import { Button, DropDown, Spacing, Typography } from '../../bash-blocks'
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
            <DropDown
                typeType={isMobile ? 'h2' : 'h1'}
                buttonType="dense-clear"
                func={() => setShowDropDown(!showDropDown)}
                funcResp={showDropDown}
                content={props.year}
                subContent={`Season ${props.season}`}
                textAlign={isMobile ? 'center' : 'right'}
                color="var(--darker-grey)"
                accents
            />
            {showDropDown && (
                <div>
                    {props.items.map(({ id, prefix, names }: any) => (
                        <Button
                            key={id}
                            type={`${isMobile ? 'regular' : 'dense'}-clear`}
                            func={props.func}
                            value={names.join(' - ')}
                            content={
                                <Spacing mY={20}>
                                    <Typography
                                        type="h5"
                                        content={<>{id.slice(-2)}</>}
                                        color="var(--medium-grey)"
                                    />
                                    {prefix && (
                                        <Typography
                                            type="h4"
                                            content={prefix + ':'}
                                        />
                                    )}
                                    <Typography
                                        type="h4"
                                        content={
                                            <>
                                                {names.map((name: any) => (
                                                    <div key={name}>{name}</div>
                                                ))}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h5"
                                        content={<>&#9135;</>}
                                        color="var(--medium-grey)"
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
