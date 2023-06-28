import { Button, DropDown, Spacing, Typography } from '../../bash-blocks'
import { useDropDown, useScreenWidth } from '../../../scripts'

export const InstantGramSearchList = ({ func, items, year, season }: any) => {
    const { isMobile } = useScreenWidth()
    const { showDropDown, setShowDropDown } = useDropDown()

    return (
        <>
            <DropDown
                typeType={isMobile ? 'h2' : 'h1'}
                buttonType="dense-clear"
                func={() => setShowDropDown(!showDropDown)}
                funcResp={showDropDown}
                content={year}
                subContent={`Season ${season}`}
                textAlign={isMobile ? 'center' : 'right'}
                dots
            />
            {showDropDown && (
                <div>
                    {items.map(({ id, prefix, names }: any) => (
                        <Button
                            key={id}
                            type={`${isMobile ? 'regular' : 'dense'}-clear`}
                            func={func}
                            value={names.join(' - ')}
                            content={
                                <Spacing mX={20}>
                                    <>
                                        <Typography
                                            type="h5"
                                            content={<>{id.slice(-2)}</>}
                                            color="var(--medium-grey)"
                                        />
                                        <Typography
                                            type="h4"
                                            content={
                                                <>
                                                    {prefix && (
                                                        <>
                                                            {prefix}
                                                            {':'}
                                                        </>
                                                    )}
                                                </>
                                            }
                                        />
                                        <Typography
                                            type="h4"
                                            content={
                                                <>
                                                    {names.map((name: any) => (
                                                        <div key={name}>
                                                            {name}
                                                        </div>
                                                    ))}
                                                </>
                                            }
                                        />
                                    </>
                                </Spacing>
                            }
                        />
                    ))}
                </div>
            )}
        </>
    )
}
