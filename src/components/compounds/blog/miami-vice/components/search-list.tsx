import { Button, Stack } from '../../../../bash-blocks';
import { generateUniqueKey, useScreenWidth } from '../../../../../utils';
import { FC } from 'react';
import { GridTemp } from '../../../../bash-blocks/basics/grid-temp/grid';
import { GridItemTemp } from '../../../../bash-blocks/basics/grid-temp/grid-item';

export type SearchListProps = {
  funcSelect: (() => void) | ((e: any) => void);
  items: {
    heading: string;
    subHeading?: string;
    video: string;
  }[];
};

export const SearchList: FC<SearchListProps> = ({ funcSelect, items }) => {
  const { isMobile } = useScreenWidth();

  return (
    <GridTemp justifyContent="even" alignItems="center">
      {items.map(({ heading, subHeading }, index) => (
        <GridItemTemp xs={12} lg={3}>
          <Button
            key={generateUniqueKey(index)}
            variant="clear"
            typeVariant={isMobile ? 'h4' : 'body'}
            value={heading}
            func={funcSelect}
            // () => {
            //     funcSelect
            //     window.location.href = '#/blog/miami-vice/#result'
            // }
            width="full"
            content={heading}
            subContent={subHeading}
            subContentTop
            padding="coarse"
          />
        </GridItemTemp>
      ))}
    </GridTemp>
  );
};
