import { FC } from 'react';
import { useScreenWidth } from '../../../../utils';
import { Grid, Spacing, Tile, Typography } from '../../basics';
import { Items } from './types/items';

export type TitleTileProps = {
  heading?: string;
  titleItems?: Items[];
  bodyItems?: Items[];
};

export const TitleTile: FC<TitleTileProps> = ({
  heading,
  titleItems,
  bodyItems,
}) => {
  const { isMobile } = useScreenWidth();

  return (
    <Tile type="clear" dense>
      {heading ? (
        <Typography variant="h3" textAlign="center">
          {heading}
        </Typography>
      ) : null}

      {titleItems ? (
        <Spacing mT={heading ? 10 : 0}>
          <Grid alignColumns="auto auto" columnGap={10} rowGap={10}>
            {titleItems?.map(({ content, subContent }, index) => (
              <>
                <Grid
                  columnItem={[1, 2]}
                  rowItem={[index + 1, titleItems.length + 1]}
                  textAlign="right"
                >
                  <Typography variant={isMobile ? 'h4' : 'h3'} boldFace inline>
                    {content}
                  </Typography>
                </Grid>
                <Grid
                  columnItem={[2, 2]}
                  rowItem={[index + 1, titleItems.length + 1]}
                  textAlign="left"
                >
                  <Typography
                    variant={isMobile ? 'h4' : 'h3'}
                    link={
                      subContent.link
                        ? {
                            url: subContent.link.url,
                            newTab: subContent.link.newTab,
                          }
                        : undefined
                    }
                    inline
                  >
                    {subContent.content}
                  </Typography>
                </Grid>
              </>
            ))}
          </Grid>
        </Spacing>
      ) : null}

      {bodyItems ? (
        <Spacing mT={heading || titleItems ? 10 : 0}>
          <Grid alignColumns="auto auto" columnGap={10} rowGap={10}>
            {bodyItems?.map(({ content, subContent }, index) => (
              <>
                <Grid
                  columnItem={[1, 2]}
                  rowItem={[index + 1, bodyItems.length + 1]}
                  textAlign="right"
                >
                  <Typography variant="body" inline>
                    {content}
                  </Typography>
                </Grid>
                <Grid
                  columnItem={[2, 2]}
                  rowItem={[index + 1, bodyItems.length + 1]}
                  textAlign="left"
                >
                  <Typography
                    variant="body"
                    link={
                      subContent.link
                        ? {
                            url: subContent.link.url,
                            newTab: subContent.link.newTab,
                          }
                        : undefined
                    }
                    inline
                  >
                    {subContent.content}
                  </Typography>
                </Grid>
              </>
            ))}
          </Grid>
        </Spacing>
      ) : null}
    </Tile>
  );
};
