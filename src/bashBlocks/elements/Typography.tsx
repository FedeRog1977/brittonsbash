import { FC, useState } from "react";

interface TypographyProps {
    type:
    | 'title'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body'
    | 'caption'
    | 'footnote';
    content: string;
    textAlign:
    | 'left'
    | 'center'
    | 'justify'
    | 'right';
    bold?: string;
    italic?: string;
    textDecoration?:
    | 'underline'
    | 'strike-through'
    | 'overline';
    pT?: string;
    pB?: string;
}

const Typography: FC<TypographyProps> = (
    { type, content, textAlign, pT, pB }: any
) => {
    const [ftSize, setFtSize] = useState('0px');
    const [mT, setMT] = useState('0px');
    const [mB, setMB] = useState('0px');

    if (type === 'title') {
        setFtSize('64px');
        setMT('20px');
        setMB('30px');
    } else if (type === 'h1') {
        setFtSize('52px');
        setMT('5px');
        setMB('10px');
    } else if (type === 'h2') {
        setFtSize('40px');
        setMT('5px');
        setMB('10px');
    } else if (type === 'h3') {
        setFtSize('28px');
        setMT('5px');
        setMB('10px');
    } else if (type === 'body') {
        setFtSize('16px');
        setMT('20px');
        setMB('30px');
    } else if (type === 'caption') {
        setFtSize('14px');
        setMT('5px');
        setMB('10px');
    } else if (type === 'footnote') {
        setFtSize('10px');
        setMT('5px');
        setMB('10px');
    } else {
        return null
    }

    return (
        <div style={{
            margin: 0,
            paddingTop: pT,
            paddingBottom: pB,
            paddingLeft: 0,
            paddingRight: 0,
        }}>
            {/* <p style={bold ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}> */}
            <p style={{
                fontSize: ftSize,
                textAlign: textAlign,
                marginTop: mT,
                marginBottom: mB,
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
            }}>
                {content}
            </p>
        </div>
    )
}

export default Typography;