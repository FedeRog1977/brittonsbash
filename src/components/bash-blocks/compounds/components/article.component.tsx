import { FC } from 'react'
import { ArticleProps, Typography } from '../..'

export const Article: FC<ArticleProps> = ({ ...props }: ArticleProps) => (
    <div
        style={{
            marginTop: props.mT,
            marginBottom: props.mB,
            marginLeft: 0,
            marginRight: 0,
            padding: 0,
        }}
    >
        {props.sections.map(
            ({
                index,
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
            }: any) => (
                <Typography
                    key={index}
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
    </div>
)
