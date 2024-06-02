import { FC } from 'react';
import { formatItems, generateUniqueKey } from '../../../../../utils';
import { Flex } from '../../../basics';
import { BookshelfProps, Bookshelf } from '../../../partials';

export type BooksProps = { items: BookshelfProps[] };

export const Books: FC<BooksProps> = ({ items }) => {
  const formattedItems = formatItems(
    3,
    items ? items : []
  ) as BookshelfProps[][];

  return (
    <>
      {formattedItems.map((row) => (
        <Flex>
          {row.map(({ heading, items }, index) => (
            <Flex item key={generateUniqueKey(index)}>
              <Bookshelf heading={heading} items={items} />
            </Flex>
          ))}
        </Flex>
      ))}
    </>
  );
};
