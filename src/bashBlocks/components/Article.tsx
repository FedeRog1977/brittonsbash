import { FC } from "react";
import Typography from "../elements/Typography";

interface ArticleProps {
    sections: Array<{
        type:
        | string
        | 't1'
        | 't2'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'body'
        | 'caption'
        | 'footnote';
        content: string;
    }>;
    fontFamily?:
    | 'serif'
    | 'sans-serif';
    textAlign:
    | 'left'
    | 'center'
    | 'justify'
    | 'right';
    mT?: string;
    mB?: string;
}

const Article: FC<ArticleProps> = (
    {
        sections,
        fontFamily,
        textAlign,
        mT,
        mB,
    }: any
) => {

    console.log(sections);

    return (
        <div
            // className={
            //     (fontFamily === 'serif' ? `${type}-serif` : `${type}-sans-serif`)
            // }
            style={{
                marginTop: mT,
                marginBottom: mB,
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
            }}
        >
            {sections.map(
                ({ type, content }: any) => (
                    <Typography type={type} content={content} fontFamily={fontFamily} textAlign={textAlign} paragraphMargins />
                )
            )}
        </div>
    )
}

export default Article;