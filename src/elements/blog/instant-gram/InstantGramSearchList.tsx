import { useState } from "react";
import DropDown from "../../../bashBlocks/components/DropDown";
import Option from "../../../bashBlocks/components/Option";
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
                    <Option
                        type='h4'
                        className='regular'
                        func={func}
                        id={id}
                        prefix={prefix}
                        content={names.join(' / ')}
                    />
                )
            )}
        </>
    )
}

export default InstantGramSearchList;