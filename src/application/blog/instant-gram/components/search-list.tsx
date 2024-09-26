import { Button, Flex, FlexItem } from '../../../../components';
import { generateUniqueKey } from '../../../../utils';
import { FC } from 'react';
import { Event } from '../types/event';

type SearchListProps = {
  funcSelect: (() => void) | ((e: any) => void);
  items: (Pick<Event, 'prefix' | 'names'> & { id: string })[];
};

export const SearchList: FC<SearchListProps> = ({ funcSelect, items }) => (
  <Flex direction="horizontal" wrap>
    {items.map(({ id, prefix, names }, index) => (
      <FlexItem basis={{ xs: 12, sm: 4 }} grow>
        <Button
          key={generateUniqueKey(index)}
          variant="clear"
          typeVariant="h4"
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
      </FlexItem>
    ))}
  </Flex>
);
