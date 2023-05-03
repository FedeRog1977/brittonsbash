import { useState } from "react";
import DropDown from "../../../bashBlocks/components/DropDown";
import Option from "../../../bashBlocks/components/Option";
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

    // WIP START ...

    // console.log(year, items);

    // const titles: any[] = [];
    // const names: any[] = [];
    // var refKey = 0;

    // names.pop();

    // for (var i in items) {
    //     for (var j in items[i].names) {
    //         refKey = refKey + 1;

    //         names.push(
    //             {
    //                 name: items[i].names[j]
    //             },
    //         );
    //     }

    //     titles.push(
    //         {
    //             id: items[i].id,
    //             prefix: items[i].prefix,
    //             names: items[i].names,
    //             // names: names,
    //         },
    //     );
    // }

    // console.log("Titles for ", year, ":\n\n", titles)

    // WIP END ...

    return (
        <>
            <DropDown type='h3' className='dense' func={handleClick} funcResp={showDropDown} content={year} />
            {/* {showDropDown && titles.map(
                ({ id, prefix, names }: any) => (
                    <option key={id}>
                        {prefix &&
                            <div>
                                <Typography type='body' content={prefix} textAlign='center' inline />
                                <Typography type='body' content=': ' textAlign='center' inline />
                            </div>
                        }
                        {names.map(({ name }: any) => (
                            <div>
                                <Typography
                                    type='body'
                                    content={
                                        <>Part{' '}{refKey}{' '}&#8212;{' '}</>
                                    }
                                    textAlign='center'
                                    color='#585858'
                                    inline
                                />
                                <Typography
                                    type='body'
                                    content={
                                        <>{name}</>
                                    }
                                    textAlign='center'
                                    inline
                                />
                            </div>
                        ))}
                    </option>
                )
            )} */}
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