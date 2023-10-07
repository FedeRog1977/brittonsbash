import { ArticlePrefaceProps, Typography } from '..'

export const ArticlePreface: React.FC<ArticlePrefaceProps> = ({
    ...props
}: ArticlePrefaceProps) => {
    return (
        <>
            {props.entries.map(
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
