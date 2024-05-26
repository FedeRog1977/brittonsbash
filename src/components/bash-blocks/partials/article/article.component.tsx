import { FC } from 'react'
import { Typography } from '../../basics'
import { TypographyProps } from '../../basics'
import { Align, Text } from '../../reference'

export type ArticleProps = {
    sections: Text[]
    fontFamily?: TypographyProps['fontFamily']
    textAlign?: Align
    extendParagraphMargins?: boolean
}

export const Article: FC<ArticleProps> = ({
    sections,
    fontFamily,
    textAlign,
    extendParagraphMargins,
}) => {
    const sectionsFinal = sections.length - 1

    return (
        <div>
            {sections
                .slice(0, sectionsFinal)
                .map(
                    ({
                        type = 'body',
                        children,
                        color = 'darkerGrey',
                        inline,
                        boldFace,
                        italicize,
                        smallCaps,
                        textDecoration,
                        link,
                        shadow,
                    }) => (
                        <Typography
                            key={type}
                            type={type}
                            fontFamily={fontFamily}
                            color={color}
                            textAlign={textAlign}
                            inline={inline}
                            boldFace={boldFace}
                            italicize={italicize}
                            smallCaps={smallCaps}
                            textDecoration={textDecoration}
                            link={link}
                            shadow={shadow}
                            paragraphMargins
                        >
                            {children}
                        </Typography>
                    )
                )}
            <Typography
                type={sections[sectionsFinal].type}
                fontFamily={fontFamily}
                color={sections[sectionsFinal].color}
                textAlign={textAlign}
                inline={sections[sectionsFinal].inline}
                boldFace={sections[sectionsFinal].boldFace}
                italicize={sections[sectionsFinal].italicize}
                smallCaps={sections[sectionsFinal].smallCaps}
                textDecoration={sections[sectionsFinal].textDecoration}
                link={sections[sectionsFinal].link}
                shadow={sections[sectionsFinal].shadow}
                paragraphMargins={extendParagraphMargins}
            >
                {sections[sectionsFinal].children}
            </Typography>
        </div>
    )
}
