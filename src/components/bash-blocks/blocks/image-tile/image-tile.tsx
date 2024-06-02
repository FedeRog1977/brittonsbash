import { FC, ReactElement } from 'react';
import {
  formatArticle,
  generateUniqueKey,
  getGridAlign,
  useScreenWidth,
} from '../../../../utils';
import { Grid, Stack, Tile, Typography } from '../../basics';
import { Article, Button } from '../../partials';
import { GradientProps } from '../../basics';
import { ArticleProps } from '../../partials';
import { Img, Cta, TextStyle } from '../../reference';
import { GridTemp } from '../../basics/grid-temp/grid';
import { GridItemTemp } from '../../basics/grid-temp/grid-item';

export type ImageTileProps = {
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
  invert = false,
}) => {
  const { isMobile } = useScreenWidth();
  const handleInverseColor = invert ? 'white' : 'mediumGrey';

  const textComponent: ReactElement = (
    <GridItemTemp xs={12} md={7}>
      <Typography variant="h4" color={handleInverseColor}>
        {subHeading}
      </Typography>

      <Typography variant="t1" color={handleInverseColor} paragraphMargins>
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
          textAlign="justify"
          extendParagraphMargins
        />
      ) : (
        <Typography
          variant="body"
          textAlign="justify"
          color={handleInverseColor}
          paragraphMargins
        >
          {body}
        </Typography>
      )}
    </GridItemTemp>
  );

  const ctasComponent: ReactElement = (
    <GridItemTemp xs={12} md={3}>
      <Stack
        direction={isMobile ? 'horizontal' : 'vertical'}
        alignHorizontal={isMobile ? 'center' : 'right'}
        alignVertical="center"
        spacing="2xs"
        wrap={isMobile}
      >
        {ctas?.map(({ content, href }, index) => (
          // Move this to partial CTA which handles href
          <Button
            key={generateUniqueKey(index)}
            variant="inverse"
            typeVariant="h3"
            content={content}
            func={() => (window.location.href = href)}
          />
        ))}
      </Stack>
    </GridItemTemp>
  );

  return (
    <Tile
      type="clear"
      gap={!isMobile}
      stacked
      img={isMobile ? imgMobile : imgDesktop}
      gradient={gradient}
    >
      <GridTemp alignHorizontal="center" alignVertical="center">
        {textComponent}
        {ctas ? ctasComponent : null}
      </GridTemp>
    </Tile>
  );
};
