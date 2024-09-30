import { FC } from 'react';
import { formatArticle, generateUniqueKey, isMobile } from '../../../utils';
import { Flex, Tile, Typography } from '../../basics';
import { Article, Cta, CtaProps } from '../../partials';
import { GradientProps } from '../../basics';
import { ArticleProps } from '../../partials';
import { TextStyle } from '../../reference';
import { Grid } from '../../basics/grid/grid';
import { GridItem } from '../../basics/grid/grid-item';
import { Img } from '../../../utils/types';

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
  const invertedTypeVariant = invert ? 'white' : 'mediumGrey';

  return (
    <Tile type="clear" stacked img={isMobile() ? imgMobile : imgDesktop} gradient={gradient}>
      <Grid justifyContent="center" alignItems="center">
        <GridItem xs={12} md={7}>
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
        </GridItem>

        {ctas ? (
          <GridItem xs={12} md={2}>
            <Flex
              direction={isMobile() ? 'horizontal' : 'vertical'}
              alignHorizontal={isMobile() ? 'center' : 'right'}
              alignVertical="center"
              wrap={isMobile()}
              gap="2xs"
            >
              {ctas?.map(({ content, href }, index) => (
                <Cta key={generateUniqueKey(index)} content={content} href={href} invert={invert} />
              ))}
            </Flex>
          </GridItem>
        ) : null}
      </Grid>
    </Tile>
  );
};
