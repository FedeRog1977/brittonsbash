import { Button, Flex, FlexItem } from '../../../../components';
import { generateUniqueKey } from '../../../../utils';
import { FC } from 'react';

export type SearchListProps = {
  funcSelect: (() => void) | ((e: any) => void);
  // TODO: make partial of future type
  items: {
    name: string;
  }[];
};

export const SearchList: FC<SearchListProps> = ({ funcSelect, items }) => (
  <Flex direction="horizontal" wrap>
    {items.map(({ name }, index) => (
      <FlexItem basis={{ xs: 12, sm: 4 }} grow>
        <Button
          key={generateUniqueKey(index)}
          variant="inverse"
          typeVariant="h4"
          value={name}
          func={funcSelect}
          width="full"
          content={name}
          padding="coarse"
        />
      </FlexItem>
    ))}
  </Flex>
);
