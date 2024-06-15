import { Button, Flex, FlexItem, Stack } from '../../../../bash-blocks';
import {
  EventProps,
  generateUniqueKey,
  useScreenWidth,
} from '../../../../../utils';
import { FC } from 'react';
import { Grid } from '../../../../bash-blocks/basics/grid/grid';
import { GridItem } from '../../../../bash-blocks/basics/grid/grid-item';

type SearchListProps = {
  url?: string;
  funcSelect: (() => void) | ((e: any) => void);
  items: (Pick<EventProps, 'prefix' | 'names'> & { id: string })[];
};

export const SearchList: FC<SearchListProps> = ({ url, funcSelect, items }) => {
  const { isMobile } = useScreenWidth();

  return (
    <Grid justifyContent="even" alignItems="center">
      {items.map(({ id, prefix, names }, index) => (
        <GridItem xs={12} lg={3}>
          <Button
            key={generateUniqueKey(index)}
            variant="clear"
            typeVariant={isMobile ? 'h4' : 'body'}
            // link={{ url: `#${url}#result` }}
            value={names.join(' - ')}
            func={funcSelect}
            width="full"
            // TODO: sort this formatting
            content={`${prefix ?? ''}\n${names.map((name) => [name].join('\n'))}`}
            subContent={id.slice(-2)}
            subContentTop
            padding="coarse"
          />
        </GridItem>
      ))}
    </Grid>
  );
};
