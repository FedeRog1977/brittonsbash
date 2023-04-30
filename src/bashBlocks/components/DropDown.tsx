import { FC, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronUp,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../elements/Button";
import Typography from "../elements/Typography";
import './styles/DropDown.css'

interface DropDownProps {
    type?:
    | string
    | 't1'
    | 't2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body'
    | 'caption'
    | 'footnote';
    className:
    | 'regular'
    | 'dense';
    func: () => void;
    funcResp: boolean;
    content?: string | ReactElement;
}

const DropDown: FC<DropDownProps> = (
    { type, className, func, funcResp, content }: any
) => {
    return (
        <Button
            className={`expand-${className}`}
            func={func}
            content={
                <>
                    {funcResp === false &&
                        <Typography
                            type={type ? type : 'h4'}
                            content={
                                <>
                                    {content ?
                                        <>{content}</>
                                        :
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    }
                                </>
                            }
                        />
                    }
                    {funcResp === true &&
                        <Typography
                            type={type ? type : 'h4'}
                            content={
                                <>
                                    {content ?
                                        <>{content}</>
                                        :
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    }
                                </>
                            }
                            color='#87CEEB'
                        />
                    }
                </>
            }
        />
    )
}

export default DropDown;