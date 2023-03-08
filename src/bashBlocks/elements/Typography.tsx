import { FC } from "react";
import './styles/Typography.css';

interface TypographyProps {
    type:
    | 'title'
    | 'title2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body'
    | 'caption'
    | 'footnote';
    content: string;
    fontFamily?:
    | 'serif'
    | 'sans-serif'
    textAlign:
    | 'left'
    | 'center'
    | 'justify'
    | 'right';
    inline?: boolean;
    boldFace?: boolean;
    italicize?: boolean;
    textDecoration?:
    | 'overline'
    | 'underline'
    | 'line-through';
    // link: {
    //     ...
    // }
    mT?: string;
    mB?: string;
}

const Typography: FC<TypographyProps> = (
    {
        type,
        content,
        fontFamily,
        textAlign,
        inline,
        boldFace,
        italicize,
        textDecoration,
        mT,
        mB,
    }: any
) => {
    return (
        <div
            className={
                fontFamily === 'serif' ? `${type}-serif` : type
            }
            style={{
                display: inline && 'inline',
                marginTop: mT,
                marginBottom: mB,
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
            }}
        >
            <span
                style={{
                    textAlign: textAlign,
                    fontWeight: (boldFace ? 'bold' : 'normal'),
                    textDecoration: textDecoration,
                }}
            >
                {boldFace ?
                    <>
                        {italicize ?
                            <i className={fontFamily === 'serif' ? 'italic-serif' : 'italic-sans-serif'}>
                                <b className={fontFamily === 'serif' ? 'bold-serif' : 'bold-sans-serif'}>
                                    {content}
                                </b>
                            </i>
                            :
                            <b className={fontFamily === 'serif' ? 'bold-serif' : 'bold-sans-serif'}>
                                {content}
                            </b>
                        }
                    </>
                    :
                    <>
                        {italicize ?
                            <i className={fontFamily === 'serif' ? 'italic-serif' : 'italic-sans-serif'}>
                                {content}
                            </i>
                            :
                            <>{content}</>
                        }
                    </>
                }
            </span>
        </div >
    )
}

export default Typography;