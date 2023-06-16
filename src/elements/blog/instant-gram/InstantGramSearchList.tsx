import { useState } from 'react'
import DropDown from '../../../bashBlocks/components/DropDown'
import Button from '../../../bashBlocks/elements/Button'
import Spacing from '../../../bashBlocks/elements/Spacing'
import Typography from '../../../bashBlocks/elements/Typography'
import { useMobile } from '../../../scripts/display/useMobile'

function InstantGramSearchList({ func, items, year }: any) {
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
                type="h1"
                backgroundType="dense-clear"
                func={handleClick}
                funcResp={showDropDown}
                content={year}
            />
            {showDropDown && (
                <div>
                    {items.map(({ id, prefix, names, refKey }: any) => (
                        <Button
                            refKey={id}
                            className={`expand-${
                                isMobile ? 'regular' : 'dense'
                            }-clear`}
                            func={func}
                            value={names.join(' ')}
                            content={
                                <Spacing mX={20}>
                                    <>
                                        <Typography
                                            type="h5"
                                            content={
                                                <>
                                                    Event&nbsp;
                                                    {id.slice(-2)}
                                                </>
                                            }
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
                                                        <div>{name}</div>
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

export default InstantGramSearchList
