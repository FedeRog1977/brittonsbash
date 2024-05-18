import { FC } from 'react'
import { Typography } from '../../basics'

export type ArticlePrefaceProps = {
    entries: {
        title?: string
        content?: string
    }[]
}

export const ArticlePreface: FC<ArticlePrefaceProps> = ({ entries }) => {
    return (
        <>
            {entries.map(({ title, content }) => {
                if (Boolean(title && content)) {
                    return (
                        <Typography
                            type="body"
                            textAlign="center"
                            paragraphMargins
                        >
                            <>
                                <Typography type="body" boldFace>
                                    {title}
                                </Typography>
                                <Typography type="body">{content}</Typography>
                            </>
                        </Typography>
                    )
                }

                return null
            })}
        </>
    )
}
