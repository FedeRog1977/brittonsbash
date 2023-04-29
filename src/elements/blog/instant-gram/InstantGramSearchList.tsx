import { useState } from "react";
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
            <Button
                className='instant-gram-expand-dense'
                func={handleClick}
                content={
                    <>
                        {showDropDown === false &&
                            <Typography
                                type='h3'
                                content={year}
                                paragraphMargins
                            />
                        }
                        {showDropDown === true &&
                            <Typography
                                type='h3'
                                content={year}
                                color='#87CEEB'
                                paragraphMargins
                            />
                        }
                    </>
                }
            />
            {showDropDown && items.map(
                ({ id, prefix, names }: any) => (
                    <Button
                        className='instant-gram-expand'
                        func={func}
                        content={
                            <Typography
                                type='h4'
                                content={
                                    <option key={id} value={names.join(' / ')}>
                                        {prefix &&
                                            <>{prefix}{': '}</>
                                        }
                                        {names.join(' / ')}
                                    </option>
                                }
                            />
                        }
                    />
                )
            )}
        </>
    )
}

export default InstantGramSearchList;