import { useScreenWidth } from '../../../../scripts'
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
                    // TODO: properly deconstruct
                    // sections={{...body, textAlign: "justify", color: handleInverseColor, light: true }}
                    sections={body}
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
                                // TODO: properly deconstruct
                                // sections={{...body, textAlign: "justify", color: handleInverseColor, light: true }}
                                sections={bodyOne}
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
                                // TODO: properly deconstruct
                                // sections={{...body, textAlign: "justify", color: handleInverseColor, light: true }}
                                sections={bodyTwo}
                                textAlign="justify"
                            />
                        ) : (
                            <Typography
                                type="body"
                                content={bodyTwo}
                                textAlign="justify"
                                light
                            />
                        )}
                    </div>
                )
            )}
        </Tile>
    )
}
