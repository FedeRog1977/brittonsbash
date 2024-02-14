import {
    formatArticle,
    getGridAlign,
    useScreenWidth,
} from '../../../../scripts'
import { Grid, Tile, Typography } from '../../basics'
import { Article, Button } from '../../partials'
import { CtaProps } from '../../reference'
import { ImageTileProps } from './image-tile.types'

export const ImageTile: React.FC<ImageTileProps> = ({
    top = false,
    imgDesktop,
    imgMobile,
    gradient,
    heading,
    subHeading,
    body,
    ctas,
    textAlign = 'left',
    invert = false,
}: ImageTileProps) => {
    const { isMobile } = useScreenWidth()

    const handleInverseColor = invert ? 'white' : 'mediumGrey'

    const handleGridTextPosition = [textAlign === 'left' ? 1 : 2, ctas ? 2 : 1]
    const handleText: React.ReactElement = (
        <Grid columnItem={handleGridTextPosition}>
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
                    sections={formatArticle(
                        body,
                        'body',
                        handleInverseColor,
                        false,
                        false,
                        false,
                        'none',
                        true,
                        false
                    )}
                    textAlign={textAlign === 'right' ? 'right' : 'justify'}
                    extendParagraphMargins
                />
            ) : (
                <Typography
                    type="body"
                    content={body}
                    textAlign={textAlign === 'right' ? 'right' : 'justify'}
                    color={handleInverseColor}
                    light
                    paragraphMargins
                />
            )}
        </Grid>
    )

    const handleGridCtasPosition = [
        textAlign === 'left' || textAlign === 'center' ? 2 : 1,
        2,
    ]
    const handleGridCtasAlignX =
        textAlign === 'left'
            ? 'end'
            : textAlign === 'right'
            ? 'start'
            : 'center'
    const handleGridCtasAlignY = getGridAlign(ctas ?? [])
    const handleCtas: React.ReactElement = (
        <Grid columnItem={handleGridCtasPosition}>
            <Grid
                alignRows={handleGridCtasAlignY}
                rowGap={20}
                justifyItems={handleGridCtasAlignX}
            >
                {ctas?.map(({ content, href }: CtaProps, index) => (
                    <Grid key={index} rowItem={[index + 1, ctas.length + 1]}>
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
                ))}
            </Grid>
        </Grid>
    )

    const handleGridAlign =
        textAlign === 'left'
            ? '3fr 1fr'
            : textAlign === 'right'
            ? '1fr 3fr'
            : '1fr 1fr'

    return (
        <Tile
            type="clear"
            top={top}
            stacked
            img={isMobile ? imgMobile : imgDesktop}
            gradient={gradient}
        >
            <Grid alignColumns={handleGridAlign} alignItems="center">
                {Boolean(ctas && textAlign === 'right') && handleCtas}
                {handleText}
                {Boolean(
                    ctas && (textAlign === 'left' || textAlign === 'center')
                ) && handleCtas}
            </Grid>
        </Tile>
    )
}
