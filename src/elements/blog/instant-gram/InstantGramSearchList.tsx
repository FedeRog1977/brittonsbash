import { useState } from "react";
import DropDown from "../../../bashBlocks/components/DropDown";
import Button from "../../../bashBlocks/elements/Button";
import Typography from "../../../bashBlocks/elements/Typography";

function InstantGramSearchList({ func, items, year }: any) {
    const [showDropDown, setShowDropDown] = useState(false);

    const handleClick = () => {
        if (showDropDown === false) {
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }
    }

    return (
        <>
            <DropDown type='h3' className='dense' func={handleClick} funcResp={showDropDown} content={year} />
            {showDropDown && items.map(
                ({ id, prefix, names }: any) => (
                    <Button
                        refKey={id}
                        className='expand-regular'
                        func={func}
                        value={names.join(' ')}
                        content={
                            <>
                                <Typography
                                    type='h4'
                                    content={
                                        <>
                                            {prefix &&
                                                <div>
                                                    {prefix}{':'}
                                                </div>
                                            }
                                        </>
                                    }
                                    boldFace
                                />
                                <Typography
                                    type='h4'
                                    content={
                                        <>
                                            {names.map(
                                                (name: any) => (
                                                    <div>{name}</div>
                                                )
                                            )}
                                        </>
                                    }
                                />
                            </>
                        }
                    />
                )
            )}
        </>
    )
}

export default InstantGramSearchList;