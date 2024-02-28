import { Typography } from '../../basics'
import { ArticlePrefaceProps } from './article-preface.types'

export const ArticlePreface: React.FC<ArticlePrefaceProps> = ({
    entries,
}: ArticlePrefaceProps) => {
    return (
        <>
            {entries.map(
                ({ title, content }: ArticlePrefaceProps['entries'][0]) => {
                    if (Boolean(title && content)) {
                        return (
                            <Typography
                                type="body"
                                content={
                                    <>
                                        <Typography content={title} boldFace />
                                        <Typography content={content} />
                                    </>
                                }
                                textAlign="center"
                                paragraphMargins
                            />
                        )
                    }

                    return null
                }
            )}
        </>
    )
}
