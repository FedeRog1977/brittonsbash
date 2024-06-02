import { FC, ReactElement } from 'react';
import {
  formatArticle,
  generateUniqueKey,
  getGridAlign,
  useScreenWidth,
} from '../../../../utils';
import { Grid, Tile, Typography } from '../../basics';
import { Article, Button } from '../../partials';
import { GradientProps } from '../../basics';
import { ArticleProps } from '../../partials';
import { Img, Cta, TextStyle } from '../../reference';

export type ImageTileProps = {
  top?: boolean;
  imgDesktop?: Img;
  imgMobile?: Img;
  gradient?: GradientProps;
  heading: string;
  subHeading?: string;
  body?: string | ArticleProps['sections'];
  ctas?: Cta[];
  textAlign?: TextStyle['textAlign'];
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

  const textComponent: ReactElement = (
    <Grid
      columnItem={
        isMobile ? undefined : [textAlign === 'left' ? 1 : 2, ctas ? 2 : 1]
      }
      rowItem={isMobile ? [1, 2] : undefined}
    >
      <Typography variant="h4" textAlign={textAlign} color={handleInverseColor}>
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

  const ctasComponent: ReactElement = (
    <Grid
      columnItem={
        isMobile
          ? undefined
          : [textAlign === 'left' || textAlign === 'center' ? 2 : 1, 2]
      }
      rowItem={isMobile ? [2, 2] : undefined}
    >
      <Grid
        alignColumns={isMobile ? getGridAlign(ctas ?? []) : undefined}
        alignRows={isMobile ? undefined : getGridAlign(ctas ?? [])}
        justifyItems={
          textAlign === 'left'
            ? 'end'
            : textAlign === 'right'
              ? 'start'
              : 'center'
        }
        alignItems="end"
        rowGap={20}
      >
        {ctas?.map(({ content, href }, index) => (
          <Grid
            key={generateUniqueKey(index)}
            columnItem={isMobile ? [index + 1, ctas.length + 1] : undefined}
            rowItem={isMobile ? undefined : [index + 1, ctas.length + 1]}
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

  return (
    <Tile
      type="clear"
      gap={!isMobile}
      stacked
      img={isMobile ? imgMobile : imgDesktop}
      gradient={gradient}
    >
      <Grid
        alignColumns={
          isMobile
            ? '12fr'
            : textAlign === 'left'
              ? '3fr 1fr'
              : textAlign === 'right'
                ? '1fr 3fr'
                : '1fr 1fr'
        }
        alignRows={isMobile ? '1fr 1fr' : undefined}
        alignItems="center"
      >
        {Boolean(ctas && textAlign === 'right') ? ctasComponent : null}
        {textComponent}
        {Boolean(ctas && (textAlign === 'left' || textAlign === 'center'))
          ? ctasComponent
          : null}
      </Grid>
    </Tile>
  );
};
