import { useState } from 'react'
import { Button, DropDown, Spacing, Typography } from '../../../bash-blocks'
import { useMobile } from '../../../scripts/display/use-mobile'

export const InstantGramSearchList = ({ func, items, year }: any) => {
    const isMobile = useMobile()

    const [showDropDown, setShowDropDown] = useState(false)

    const handleClick = () => {
        if (showDropDown === false) {
            setShowDropDown(true)
        } else {
            setShowDropDown(false)
        }
    }

    return (
        <>
            <DropDown
                type={isMobile ? 'h2' : 'h1'}
                backgroundType="dense-clear"
                func={handleClick}
                funcResp={showDropDown}
                content={year}
            />
            {showDropDown && (
                <div>
                    {items.map(({ id, prefix, names }: any) => (
                        <Button
                            key={id}
                            className={`expand-${
                                isMobile ? 'regular' : 'dense'
                            }-clear`}
                            func={func}
                            value={names.join(' - ')}
                            content={
                                <Spacing mX={20}>
                                    <>
                                        <Typography
                                            type="h5"
                                            content={<>{id.slice(-2)}</>}
                                            color="var(--font-5)"
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
