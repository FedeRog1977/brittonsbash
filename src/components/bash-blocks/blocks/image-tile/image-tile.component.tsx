import { ImageTileProps } from '.'
import { Grid, Tile, Typography } from '../../basics'
import { Article, Button } from '../../partials'
import { CtaProps } from '../../reference'

export const ImageTile: React.FC<ImageTileProps> = ({
    img,
    gradient,
    heading,
    subHeading,
    body,
    ctas,
    textAlign = 'left',
    invert = false,
}: ImageTileProps) => {
    const handleInverseColor = invert ? 'white' : 'mediumGrey'

    const handleGridText = [textAlign === 'left' ? 1 : 2, ctas ? 2 : 1]
    const handleGridCtas = [textAlign === 'left' ? 2 : 1, 2]

    return (
        <Tile type="clear" stacked margins img={img} gradient={gradient}>
            <Grid alignColumns="auto auto" columnGap={80} alignItems="center">
                <Grid columnItem={handleGridText}>
                    <Typography
                        type="h4"
                        content={subHeading}
                        textAlign={textAlign}
                        color={handleInverseColor}
                        light
                    />
                    <Typography
                        type="t1"
                        content={heading}
                        textAlign={textAlign}
                        color={handleInverseColor}
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
                            color={handleInverseColor}
                            light
                            paragraphMargins
                        />
                    )}
                </Grid>
                {ctas && (
                    <Grid columnItem={handleGridCtas}>
                        <Grid
                            alignRows="auto"
                            rowGap={20}
                            justifyItems="center"
                        >
                            {ctas?.map(({ content, href }: CtaProps, index) => (
                                <Grid rowItem={[index, ctas.length]}>
                                    <Button
                                        typeType="h3"
                                        type="inverse"
                                        func={() =>
                                            (window.location.href = href)
                                        }
                                        funcResp={false}
                                        content={content}
                                        color="white"
                                        light
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Tile>
    )
}
