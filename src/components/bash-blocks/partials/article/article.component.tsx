import { Typography } from '../../basics'
import { ArticleProps } from './article.types'

export const Article: React.FC<ArticleProps> = ({
    sections,
    fontFamily,
    textAlign,
    extendParagraphMargins,
    mT,
    mB,
}: ArticleProps) => {
    const sectionsFinal = sections.length - 1

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
            {sections
                .slice(0, sectionsFinal)
                .map(
                    ({
                        type = 'body',
                        content,
                        imageContent,
                        color = 'darkerGrey',
                        inline,
                        boldFace,
                        italicize,
                        smallCaps,
                        textDecoration,
                        link,
                        light,
                        shadow,
                    }: ArticleProps['sections'][0]) => (
                        <Typography
                            key={type}
                            type={type}
                            content={content}
                            imageContent={imageContent}
                            fontFamily={fontFamily}
                            color={color}
                            textAlign={textAlign}
                            inline={inline}
                            boldFace={boldFace}
                            italicize={italicize}
                            smallCaps={smallCaps}
                            textDecoration={textDecoration}
                            link={link}
                            light={light}
                            shadow={shadow}
                            paragraphMargins
                        />
                    )
                )}
            <Typography
                type={sections[sectionsFinal].type}
                content={sections[sectionsFinal].content}
                imageContent={sections[sectionsFinal].imageContent}
                fontFamily={fontFamily}
                color={sections[sectionsFinal].color}
                textAlign={textAlign}
                inline={sections[sectionsFinal].inline}
                boldFace={sections[sectionsFinal].boldFace}
                italicize={sections[sectionsFinal].italicize}
                smallCaps={sections[sectionsFinal].smallCaps}
                textDecoration={sections[sectionsFinal].textDecoration}
                link={sections[sectionsFinal].link}
                light={sections[sectionsFinal].light}
                shadow={sections[sectionsFinal].shadow}
                paragraphMargins={extendParagraphMargins}
            />
        </div>
    )
}
