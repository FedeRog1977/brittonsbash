import { Button, Stack } from '../../../../bash-blocks';
import { generateUniqueKey, isMobile } from '../../../../../utils';
import { FC } from 'react';
import { Grid } from '../../../../bash-blocks/basics/grid/grid';
import { GridItem } from '../../../../bash-blocks/basics/grid/grid-item';

export type SearchListProps = {
  funcSelect: (() => void) | ((e: any) => void);
  // TODO: make partial of future type
  items: {
    name: string;
  }[];
};

export const SearchList: FC<SearchListProps> = ({ funcSelect, items }) => (
  <Grid justifyContent="even" alignItems="center">
    {items.map(({ name }, index) => (
      <GridItem xs={12} lg={3}>
        <Button
          key={generateUniqueKey(index)}
          variant="clear"
          typeVariant={isMobile() ? 'h4' : 'body'}
          value={name}
          func={funcSelect}
          width="full"
          content={name}
          padding="coarse"
        />
      </GridItem>
    ))}
  </Grid>
);
