import { FC } from 'react';
import { generateUniqueKey, useScreenWidth } from '../../../../utils';
import { Stack, Tile, Typography } from '../../basics';
import { Items } from './types/items';
import { Grid } from '../../basics/grid/grid';
import { GridItem } from '../../basics/grid/grid-item';

export type TitleTileProps = {
  heading?: string;
  titleItems?: Items[];
  bodyItems?: Items[];
};

export const TitleTile: FC<TitleTileProps> = ({
  heading,
  titleItems,
  bodyItems,
}) => (
  <Tile type="clear">
    <Stack direction="vertical" spacing="xs">
      {heading ? (
        <Typography variant="h3" textAlign="center">
          {heading}
        </Typography>
      ) : null}

      {titleItems
        ? titleItems.map(({ content, subContent }, index) => (
            <Grid
              key={generateUniqueKey(index)}
              justifyContent="center"
              spacing="xs"
            >
              <GridItem xs={5}>
                <Typography variant="h3" boldFace textAlign="right">
                  {content}
                </Typography>
              </GridItem>
              <GridItem xs={5}>
                <Typography variant="h3" markdown>
                  {subContent}
                </Typography>
              </GridItem>
            </Grid>
          ))
        : null}

      {bodyItems
        ? bodyItems.map(({ content, subContent }, index) => (
            <Grid
              key={generateUniqueKey(index)}
              justifyContent="center"
              spacing="xs"
            >
              <GridItem xs={5}>
                <Typography variant="body" boldFace textAlign="right">
                  {content}
                </Typography>
              </GridItem>
              <GridItem xs={5}>
                <Typography variant="body" markdown>
                  {subContent}
                </Typography>
              </GridItem>
            </Grid>
          ))
        : null}
    </Stack>
  </Tile>
);
