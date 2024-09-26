import { Button, Flex, FlexItem } from '../../../../components';
import { generateUniqueKey } from '../../../../utils';
import { FC } from 'react';

export type SearchListProps = {
  funcSelect: (() => void) | ((e: any) => void);
  // TODO: make partial of future type
  items: {
    heading: string;
    subHeading?: string;
  }[];
};

export const SearchList: FC<SearchListProps> = ({ funcSelect, items }) => (
  <Flex direction="horizontal" wrap>
    {items.map(({ heading, subHeading }, index) => (
      <FlexItem basis={{ xs: 12, sm: 4 }} grow>
        <Button
          key={generateUniqueKey(index)}
          variant="clear"
          typeVariant="h4"
          typeFontFamily="miami"
          value={heading}
          func={funcSelect}
          width="full"
          content={heading}
          subContent={subHeading}
          subContentTop
          padding="coarse"
        />
      </FlexItem>
    ))}
  </Flex>
);
