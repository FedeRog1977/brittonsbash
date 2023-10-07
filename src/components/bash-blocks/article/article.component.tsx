import { ArticleProps, Typography } from '..'

export const Article: React.FC<ArticleProps> = ({ ...props }: ArticleProps) => {
    const sectionsFinal = props.sections.length - 1

    return (
        <div
            style={{
                marginTop: props.mT,
                marginBottom: props.mB,
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
            }}
        >
            {props.sections
                .slice(0, sectionsFinal)
                .map(
                    ({
                        type,
                        content,
                        imageContent,
                        color,
                        inline,
                        boldFace,
                        italicize,
                        smallCaps,
                        textDecoration,
                        link,
                    }: ArticleProps['sections'][0]) => (
                        <Typography
                            key={type}
                            type={type}
                            content={content}
                            imageContent={imageContent}
                            fontFamily={props.fontFamily}
                            color={color}
                            textAlign={props.textAlign}
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
            <Typography
                type={props.sections[sectionsFinal].type}
                content={props.sections[sectionsFinal].content}
                imageContent={props.sections[sectionsFinal].imageContent}
                fontFamily={props.fontFamily}
                color={props.sections[sectionsFinal].color}
                textAlign={props.textAlign}
                inline={props.sections[sectionsFinal].inline}
                boldFace={props.sections[sectionsFinal].boldFace}
                italicize={props.sections[sectionsFinal].italicize}
                smallCaps={props.sections[sectionsFinal].smallCaps}
                textDecoration={props.sections[sectionsFinal].textDecoration}
                link={props.sections[sectionsFinal].link}
            />
        </div>
    )
}