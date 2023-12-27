import { ContentTileProps } from '.'
import { Grid, Tile, Typography } from '../../basics'
import { Article, Button } from '../../partials'

export const ContentTile: React.FC<ContentTileProps> = ({
    ...props
}: ContentTileProps) => (
    <Tile
        type="clear"
        stacked
        margins
        img={props.img}
        // gradient={{ start: 'right' }}
    >
        <Typography
            type="h4"
            content={props.subHeading}
            textAlign={props.textAlign ? props.textAlign : 'center'}
            color="white"
            light
            shadow
        />
        <Typography
            type="t1"
            content={props.heading}
            textAlign={props.textAlign ? props.textAlign : 'center'}
            color="darkerGrey90"
            light
            paragraphMargins
        />
        {Array.isArray(props.body) ? (
            <Article
                sections={props.body}
                textAlign="justify"
                extendParagraphMargins
            />
        ) : (
            <Typography
                type="body"
                content={props.body}
                textAlign="justify"
                color="white"
                light
                // shadow
                paragraphMargins
            />
        )}
        {props.ctas && (
            <Grid alignColumns="auto" justifyItems="center">
                {props.ctas?.map(
                    ({ content, href }: ContentTileProps['ctas'][0], index) => (
                        <Grid columnItem={[index, props.ctas.length]}>
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
