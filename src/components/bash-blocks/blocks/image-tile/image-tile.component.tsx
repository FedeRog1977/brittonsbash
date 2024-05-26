import { FC } from 'react';
import {
    formatArticle,
    generateUniqueKey,
    getGridAlign,
    useScreenWidth,
} from '../../../../scripts';
import { Grid, Tile, Typography } from '../../basics';
import { Article, Button } from '../../partials';
import { GradientProps } from '../../basics';
import { ArticleProps } from '../../partials';
import { Img, Cta, Align } from '../../reference';

export type ImageTileProps = {
    top?: boolean;
    imgDesktop?: Img;
    imgMobile?: Img;
    gradient?: GradientProps;
    heading: string;
    subHeading?: string;
    body?: string | ArticleProps['sections'];
    ctas?: Cta[];
    textAlign?: Align;
    invert?: boolean;
};

export const ImageTile: FC<ImageTileProps> = ({
    imgDesktop,
    imgMobile,
    gradient,
    heading,
    subHeading,
    body,
    ctas,
    textAlign = 'left',
    invert = false,
}) => {
    const { isMobile } = useScreenWidth();

    const handleInverseColor = invert ? 'white' : 'mediumGrey';

    const handleGridTextPosition = [textAlign === 'left' ? 1 : 2, ctas ? 2 : 1];
    const handleText: React.ReactElement = (
        <Grid columnItem={handleGridTextPosition}>
            <Typography
                variant="h4"
                textAlign={textAlign}
                color={handleInverseColor}
            >
                {subHeading}
            </Typography>
            <Typography
                variant="t1"
                textAlign={textAlign}
                color={handleInverseColor}
                paragraphMargins
            >
                {heading}
            </Typography>
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
                        false
                    )}
                    textAlign={textAlign === 'right' ? 'right' : 'justify'}
                    extendParagraphMargins
                />
            ) : (
                <Typography
                    variant="body"
                    textAlign={textAlign === 'right' ? 'right' : 'justify'}
                    color={handleInverseColor}
                    paragraphMargins
                >
                    {body}
                </Typography>
            )}
        </Grid>
    );

    const handleGridCtasPosition = [
        textAlign === 'left' || textAlign === 'center' ? 2 : 1,
        2,
    ];
    const handleGridCtasAlignX =
        textAlign === 'left'
            ? 'end'
            : textAlign === 'right'
            ? 'start'
            : 'center';
    const handleGridCtasAlignY = getGridAlign(ctas ?? []);
    const handleCtas: React.ReactElement = (
        <Grid columnItem={handleGridCtasPosition}>
            <Grid
                alignRows={handleGridCtasAlignY}
                rowGap={20}
                justifyItems={handleGridCtasAlignX}
            >
                {ctas?.map(({ content, href }, index) => (
                    <Grid
                        key={generateUniqueKey(index)}
                        rowItem={[index + 1, ctas.length + 1]}
                    >
                        <Button
                            variant="inverse"
                            typeVariant="h3"
                            content={content}
                            func={() => (window.location.href = href)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );

    const handleGridAlign =
        textAlign === 'left'
            ? '3fr 1fr'
            : textAlign === 'right'
            ? '1fr 3fr'
            : '1fr 1fr';

    return (
        <Tile
            type="clear"
            gap={!isMobile}
            stacked
            img={isMobile ? imgMobile : imgDesktop}
            gradient={gradient}
        >
            <Grid alignColumns={handleGridAlign} alignItems="center">
                {Boolean(ctas && textAlign === 'right') ? handleCtas : null}
                {handleText}
                {Boolean(
                    ctas && (textAlign === 'left' || textAlign === 'center')
                )
                    ? handleCtas
                    : null}
            </Grid>
        </Tile>
    );
};
