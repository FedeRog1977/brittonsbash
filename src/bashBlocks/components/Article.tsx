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
        | 'h4'
        | 'body'
        | 'caption'
        | 'footnote';
        content: string;
        textAlign?:
        | 'left'
        | 'center'
        | 'justify'
        | 'right';
        color?: string;
        inline?: boolean;
        boldFace?: boolean;
        italicize?: boolean;
        smallCaps?: boolean;
        textDecoration?:
        | 'overline'
        | 'underline'
        | 'line-through';
        link?: string;
    }>;
    fontFamily?:
    | 'serif'
    | 'sans-serif';
    mT?: string;
    mB?: string;
}

const Article: FC<ArticleProps> = (
    {
        sections,
        fontFamily,
        mT,
        mB,
    }: any
) => {

    console.log(sections);

    return (
        <div
            style={{
                marginTop: mT,
                marginBottom: mB,
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
            }}
        >
            {sections.map(
                ({
                    type,
                    content,
                    color,
                    textAlign,
                    inline,
                    boldFace,
                    italicize,
                    smallCaps,
                    textDecoration,
                    link
                }: any) => (
                    <Typography
                        type={type}
                        content={content}
                        fontFamily={fontFamily}
                        color={color}
                        textAlign={textAlign}
                        inline={inline}
                        boldFace={boldFace}
                        italicize={italicize}
                        smallCaps={smallCaps}
                        textDecoration={textDecoration}
                        link={link}
                        paragraphMargins
                    />
                )
            )}
        </div>
    )
}

export default Article;