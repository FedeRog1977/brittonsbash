import { FC } from 'react';
import { generateUniqueKey, useScreenWidth } from '../../../../utils';
import { Stack, Tile, Typography } from '../../basics';
import { Items } from './types/items';
import { GridTemp } from '../../basics/grid-temp/grid';
import { GridItemTemp } from '../../basics/grid-temp/grid-item';

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
  <Tile type="clear" dense>
    <Stack direction="vertical" spacing="xs">
      {heading ? (
        <Typography variant="h3" textAlign="center">
          {heading}
        </Typography>
      ) : null}

      {titleItems
        ? titleItems.map(({ content, subContent }, index) => (
            <GridTemp
              key={generateUniqueKey(index)}
              justifyContent="center"
              spacing="xs"
            >
              <GridItemTemp xs={5}>
                <Typography variant="h3" boldFace textAlign="right">
                  {content}
                </Typography>
              </GridItemTemp>
              <GridItemTemp xs={5}>
                <Typography variant="h3" markdown>
                  {subContent}
                </Typography>
              </GridItemTemp>
            </GridTemp>
          ))
        : null}

      {bodyItems
        ? bodyItems.map(({ content, subContent }, index) => (
            <GridTemp
              key={generateUniqueKey(index)}
              justifyContent="center"
              spacing="xs"
            >
              <GridItemTemp xs={5}>
                <Typography variant="body" boldFace textAlign="right">
                  {content}
                </Typography>
              </GridItemTemp>
              <GridItemTemp xs={5}>
                <Typography variant="body" markdown>
                  {subContent}
                </Typography>
              </GridItemTemp>
            </GridTemp>
          ))
        : null}
    </Stack>
  </Tile>
);
