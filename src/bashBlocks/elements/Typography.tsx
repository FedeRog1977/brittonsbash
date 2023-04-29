import { FC, ReactElement } from "react";
import './styles/Typography.css';

interface TypographyProps {
    type:
    | 't1'
    | 't2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body'
    | 'caption'
    | 'footnote';
    content:
    | string
    | ReactElement;
    fontFamily?:
    | 'serif'
    | 'sans-serif';
    color?: string;
    textAlign?:
    | 'left'
    | 'center'
    | 'justify'
    | 'right';
    inline?: boolean;
    boldFace?: boolean;
    italicize?: boolean;
    smallCaps?: boolean;
    textDecoration?:
    | 'overline'
    | 'underline'
    | 'line-through';
    link?: string;
    paragraphMargins?: boolean;
    mT?: string;
    mB?: string;
}

const Typography: FC<TypographyProps> = (
    {
        type,
        content,
        fontFamily,
        color,
        textAlign,
        inline,
        boldFace,
        italicize,
        smallCaps,
        textDecoration,
        paragraphMargins,
        link,
        mT,
        mB,
    }: any
) => {
    return (
        <div
            className={
                (fontFamily === 'serif' ? `${type}-serif` : `${type}-sans-serif`)
            }
            style={{
                display: (inline && 'inline'),
                textAlign: textAlign,
                marginTop: (paragraphMargins ? '20px' : (mT ? mT : '0px')),
                marginBottom: (paragraphMargins ? '30px' : (mB ? mB : '0px')),
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
            }}
        >
            <span
                style={{
                    color: color,
                    fontVariant: (smallCaps && 'small-caps'),
                    textDecoration: textDecoration,
                }}
            >
                {boldFace ?
                    <>
                        {italicize ?
                            <i className={fontFamily === 'serif' ? 'italic-serif' : 'italic-sans-serif'}>
                                <b className={fontFamily === 'serif' ? 'bold-serif' : 'bold-sans-serif'}>
                                    <>
                                        {link ?
                                            <a href={link}>{content}</a>
                                            :
                                            <>{content}</>
                                        }
                                    </>
                                </b>
                            </i>
                            :
                            <b className={fontFamily === 'serif' ? 'bold-serif' : 'bold-sans-serif'}>
                                {link ?
                                    <a href={link}>{content}</a>
                                    :
                                    <>{content}</>
                                }
                            </b>
                        }
                    </>
                    :
                    <>
                        {italicize ?
                            <i className={fontFamily === 'serif' ? 'italic-serif' : 'italic-sans-serif'}>
                                {link ?
                                    <a href={link}>{content}</a>
                                    :
                                    <>{content}</>
                                }
                            </i>
                            :
                            <>
                                {link ?
                                    <a href={link}>{content}</a>
                                    :
                                    <>{content}</>
                                }
                            </>
                        }
                    </>
                }
            </span>
        </div>
    )
}

export default Typography;