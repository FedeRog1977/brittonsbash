import { FC } from 'react';
import { formatItems, generateUniqueKey } from '../../../../../utils';
import { BookshelfProps, Bookshelf } from '../../../partials';
import { Flex, FlexItem } from '../../../basics';

export type BooksProps = { items: BookshelfProps[] };

export const Books: FC<BooksProps> = ({ items }) => {
  const formattedItems = formatItems(
    3,
    items ? items : []
  ) as BookshelfProps[][];

  return (
    <>
      {formattedItems.map((row) => (
        <Flex
          direction="horizontal"
          alignHorizontal="center"
          alignVertical="center"
        >
          {row.map(({ heading, items }, index) => (
            <FlexItem key={generateUniqueKey(index)} basis={{ xs: 12, lg: 4 }}>
              <Bookshelf heading={heading} items={items} />
            </FlexItem>
          ))}
        </Flex>
      ))}
    </>
  );
};
