import { FC } from 'react';
import { formatItems, generateUniqueKey } from '../../../../../utils/index.js';
import { BookshelfProps, Bookshelf } from '../../../partials/index.js';
import { Flex, FlexItem } from '../../../basics/index.js';

export type BooksProps = { items: BookshelfProps[] };

export const Books: FC<BooksProps> = ({ items }) => (
  <Flex direction="horizontal" alignHorizontal="center" alignVertical="top" wrap rowGap="sm">
    {items.map(({ heading, items }, index) => (
      <FlexItem key={generateUniqueKey(index)} basis={{ xs: 12, lg: 4 }}>
        <Bookshelf heading={heading} items={items} />
      </FlexItem>
    ))}
  </Flex>
);
