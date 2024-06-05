import { FC } from 'react';
import { formatItems, generateUniqueKey } from '../../../../../utils';
import { BookshelfProps, Bookshelf } from '../../../partials';
import { FlexTemp } from '../../../basics/flex-temp/flex';
import { FlexItemTemp } from '../../../basics/flex-temp/flex-item';

export type BooksProps = { items: BookshelfProps[] };

export const Books: FC<BooksProps> = ({ items }) => {
  const formattedItems = formatItems(
    3,
    items ? items : []
  ) as BookshelfProps[][];

  return (
    <>
      {formattedItems.map((row) => (
        <FlexTemp
          direction="horizontal"
          alignHorizontal="center"
          alignVertical="center"
        >
          {row.map(({ heading, items }, index) => (
            <FlexItemTemp
              key={generateUniqueKey(index)}
              basis={{ xs: 12, lg: 4 }}
            >
              <Bookshelf heading={heading} items={items} />
            </FlexItemTemp>
          ))}
        </FlexTemp>
      ))}
    </>
  );
};
