import { ImageTileProps } from '.'
import { Grid, Tile, Typography } from '../../basics'
import { Article, Button } from '../../partials'

export const ImageTile: React.FC<ImageTileProps> = ({
    img,
    heading,
    subHeading,
    body,
    ctas,
    textAlign = 'left',
}: ImageTileProps) => (
    <Tile
        type="clear"
        stacked
        margins
        img={img}
        gradient={{
            value: 'dark',
            opacity: 20,
            start: 'left',
        }}
    >
        <Typography
            type="h4"
            content={subHeading}
            textAlign={textAlign}
            color="white"
            light
        />
        <Typography
            type="t1"
            content={heading}
            textAlign={textAlign}
            color="white"
            light
            paragraphMargins
        />
        {Array.isArray(body) ? (
            <Article
                sections={body}
                textAlign="justify"
                extendParagraphMargins
            />
        ) : (
            <Typography
                type="body"
                content={body}
                textAlign="justify"
                color="white"
                light
                paragraphMargins
            />
        )}
        {ctas && (
            <Grid alignColumns="auto" justifyItems="center">
                {ctas?.map(
                    ({ content, href }: ImageTileProps['ctas'][0], index) => (
                        <Grid columnItem={[index, ctas.length]}>
                            <Button
                                typeType="h3"
                                type="inverse"
                                func={() => (window.location.href = href)}
                                funcResp={false}
                                content={content}
                                color="white"
                                light
                            />
                        </Grid>
                    )
                )}
            </Grid>
        )}
    </Tile>
)
