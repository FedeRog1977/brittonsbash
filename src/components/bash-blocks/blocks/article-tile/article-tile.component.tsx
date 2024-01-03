import { formatArticle, useScreenWidth } from '../../../../scripts'
import { Spacing, Tile, Typography } from '../../basics'
import { Article, ImageMatrix } from '../../partials'
import { ArticleTileImageProps, ArticleTileProps } from './article-tile.types'

export const ArticleTile: React.FC<ArticleTileProps> = ({
    type = 'clear',
    heading,
    subHeading,
    body,
    imageMatrices,
    textAlign = 'center',
    margins = false,
}: ArticleTileProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type={type} margins={margins}>
            {subHeading && (
                <Typography
                    type="h2"
                    textAlign={textAlign}
                    content={subHeading}
                    light
                />
            )}
            <Typography
                type="h1"
                textAlign={textAlign}
                content={heading}
                light
                paragraphMargins
            />
            {Array.isArray(body) ? (
                <Article
                    sections={formatArticle(
                        body,
                        'body',
                        'darkerGrey',
                        false,
                        false,
                        false,
                        'none',
                        true,
                        false
                    )}
                    textAlign="justify"
                    extendParagraphMargins
                />
            ) : (
                <Typography
                    type="body"
                    content={body}
                    textAlign="justify"
                    light
                    paragraphMargins
                />
            )}
            {imageMatrices?.map(
                (
                    { heading, bodyOne, items, bodyTwo }: ArticleTileImageProps,
                    index
                ) => (
                    <div key={index}>
                        {heading && (
                            <Typography
                                type="h2"
                                textAlign={textAlign}
                                content={heading}
                                light
                                paragraphMargins
                            />
                        )}
                        {bodyOne && Array.isArray(bodyOne) ? (
                            <Article
                                sections={formatArticle(
                                    bodyOne,
                                    'body',
                                    'darkerGrey',
                                    false,
                                    false,
                                    false,
                                    'none',
                                    true,
                                    false
                                )}
                                textAlign="justify"
                                extendParagraphMargins
                            />
                        ) : (
                            <Typography
                                type="body"
                                content={bodyOne}
                                textAlign="justify"
                                light
                                paragraphMargins
                            />
                        )}
                        <ImageMatrix items={items} />
                        <Spacing mY={isMobile && bodyTwo ? 15 : 30} />
                        {bodyTwo && Array.isArray(bodyTwo) ? (
                            <Article
                                sections={formatArticle(
                                    bodyTwo,
                                    'body',
                                    'darkerGrey',
                                    false,
                                    false,
                                    false,
                                    'none',
                                    true,
                                    false
                                )}
                                textAlign="justify"
                                extendParagraphMargins={
                                    !Boolean(index + 1 === imageMatrices.length)
                                }
                            />
                        ) : (
                            <Typography
                                type="body"
                                content={bodyTwo}
                                textAlign="justify"
                                light
                                paragraphMargins={
                                    !Boolean(index + 1 === imageMatrices.length)
                                }
                            />
                        )}
                    </div>
                )
            )}
        </Tile>
    )
}
