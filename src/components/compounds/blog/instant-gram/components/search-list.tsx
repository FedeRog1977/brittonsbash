import { Button } from '../../../../bash-blocks';
import { generateUniqueKey, isMobile } from '../../../../../utils';
import { FC } from 'react';
import { Grid } from '../../../../bash-blocks/basics/grid/grid';
import { GridItem } from '../../../../bash-blocks/basics/grid/grid-item';
import { Event } from '../types/event';

type SearchListProps = {
  funcSelect: (() => void) | ((e: any) => void);
  items: (Pick<Event, 'prefix' | 'names'> & { id: string })[];
};

export const SearchList: FC<SearchListProps> = ({ funcSelect, items }) => (
  <Grid justifyContent="even" alignItems="center">
    {items.map(({ id, prefix, names }, index) => (
      <GridItem xs={12} lg={3}>
        <Button
          key={generateUniqueKey(index)}
          variant="clear"
          typeVariant={isMobile() ? 'h4' : 'body'}
          typeFontFamily="instagram"
          value={names.join(' - ')}
          func={funcSelect}
          width="full"
          // TODO: sort this formatting
          // content={`${prefix ?? ''}\n${names.map((name) => [name].join('<br>'))}`}
          content={
            <>
              {prefix ? <div>{prefix}</div> : null}
              {names.map((name) => (
                <div>{name}</div>
              ))}
            </>
          }
          subContent={id.slice(-2)}
          subContentTop
          padding="coarse"
        />
      </GridItem>
    ))}
  </Grid>
);
