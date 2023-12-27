import { ContentTileProps } from '.'
import { Grid, Tile, Typography } from '../../basics'
import { Button } from '../../partials'

export const ContentTile: React.FC<ContentTileProps> = ({
    ...props
}: ContentTileProps) => (
    <Tile
        type="clear"
        stacked
        margins
        img={props.img}
        gradient={{ start: 'left' }}
    >
        <Typography
            type="h4"
            content={props.subHeading}
            textAlign={props.textAlign ? props.textAlign : 'center'}
            color="white"
            light
        />
        <Typography
            type="t1"
            content={props.heading}
            textAlign={props.textAlign ? props.textAlign : 'center'}
            color="white"
            light
            paragraphMargins
        />
        {props.body && (
            <Typography
                type="body"
                content={props.body}
                textAlign="justify"
                color="white"
                light
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
