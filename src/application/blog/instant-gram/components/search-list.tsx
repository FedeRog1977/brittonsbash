import { Button, Flex, FlexItem } from '../../../../components';
import { generateUniqueKey } from '../../../../utils';
import { FC } from 'react';
import { Event } from '../../../../utils/types';

type SearchListProps = {
  funcSelect: (() => void) | ((e: any) => void);
  items: Partial<Event>[];
};

export const SearchList: FC<SearchListProps> = ({ funcSelect, items }) => (
  <Flex direction="horizontal" wrap>
    {items.map(({ id, prefix, names }, index) => (
      <FlexItem basis={{ xs: 12, sm: 4 }} grow>
        <Button
          key={generateUniqueKey(index)}
          variant="inverse"
          typeVariant="h4"
          value={names?.join(' - ')}
          // value={`${id?.split('').slice(1, 5).join('')}-${id?.toLocaleLowerCase()}`}
          func={funcSelect}
          width="full"
          content={
            <>
              {prefix ? <div>{prefix}:</div> : null}
              {names?.map((name) => <div>{name}</div>)}
            </>
          }
          subContent={id?.slice(-2)}
          subContentTop
          padding="coarse"
        />
      </FlexItem>
    ))}
  </Flex>
);
