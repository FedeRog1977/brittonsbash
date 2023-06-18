import { FC } from 'react'
import { Typography, TypographyProps } from '../..'

type ArticleProps = {
    sections: Array<{
        type: string | TypographyProps['type']
        content: string
        color?: string
        inline?: boolean
        boldFace?: boolean
        italicize?: boolean
        smallCaps?: boolean
        textDecoration?: 'overline' | 'underline' | 'line-through'
        link?: string
    }>
    fontFamily?: 'serif' | 'sans-serif'
    textAlign?: 'left' | 'center' | 'justify' | 'right'
    mT?: string
    mB?: string
}

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
