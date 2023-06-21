import { FC } from 'react'
import { ArticleProps, Typography } from '../..'

export const Article: FC<ArticleProps> = ({
    sections,
    fontFamily,
    textAlign,
    mT,
    mB,
}: any) => {
    console.log(sections)

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
                    index,
                    type,
                    content,
                    color,
                    inline,
                    boldFace,
                    italicize,
                    smallCaps,
                    textDecoration,
                    link,
                }: any) => (
                    <Typography
                        key={index}
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
