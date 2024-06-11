import { FC, ReactElement } from 'react';
import {
  formatArticle,
  generateUniqueKey,
  useScreenWidth,
} from '../../../../utils';
import { Stack, Tile, Typography } from '../../basics';
import { Article, Cta, CtaProps } from '../../partials';
import { GradientProps } from '../../basics';
import { ArticleProps } from '../../partials';
import { Img, TextStyle } from '../../reference';
import { GridTemp } from '../../basics/grid-temp/grid';
import { GridItemTemp } from '../../basics/grid-temp/grid-item';

export type ImageTileProps = {
  imgDesktop?: Img;
  imgMobile?: Img;
  gradient?: GradientProps;
  heading: string;
  subHeading?: string;
  body?: string | ArticleProps['sections'];
  ctas?: CtaProps[];
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
  const invertedTypeVariant = invert ? 'white' : 'mediumGrey';

  return (
    <Tile
      type="clear"
      gap={!isMobile}
      stacked
      img={isMobile ? imgMobile : imgDesktop}
      gradient={gradient}
    >
      <GridTemp justifyContent="center" alignItems="center">
        <GridItemTemp xs={12} md={7}>
          <Typography variant="h4" color={invertedTypeVariant}>
            {subHeading}
          </Typography>

          <Typography variant="t1" color={invertedTypeVariant} paragraphMargins>
            {heading}
          </Typography>

          {Array.isArray(body) ? (
            <Article
              sections={formatArticle(
                body,
                'body',
                invertedTypeVariant,
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
              color={invertedTypeVariant}
              paragraphMargins
            >
              {body}
            </Typography>
          )}
        </GridItemTemp>

        {ctas ? (
          <GridItemTemp xs={12} md={3}>
            <Stack
              direction={isMobile ? 'horizontal' : 'vertical'}
              alignHorizontal={isMobile ? 'center' : 'right'}
              alignVertical="center"
              spacing="2xs"
              wrap={isMobile}
            >
              {ctas?.map(({ content, href }, index) => (
                <Cta
                  key={generateUniqueKey(index)}
                  content={content}
                  href={href}
                  invert={invert}
                />
              ))}
            </Stack>
          </GridItemTemp>
        ) : null}
      </GridTemp>
    </Tile>
  );
};
