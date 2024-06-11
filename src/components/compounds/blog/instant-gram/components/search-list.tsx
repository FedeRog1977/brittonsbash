import { Button, Flex, FlexItem, Stack } from '../../../../bash-blocks';
import { generateUniqueKey, useScreenWidth } from '../../../../../utils';
import { FC } from 'react';
import { GridTemp } from '../../../../bash-blocks/basics/grid-temp/grid';
import { GridItemTemp } from '../../../../bash-blocks/basics/grid-temp/grid-item';

type SearchListProps = {
  url?: string;
  funcSelect: (() => void) | ((e: any) => void);
  items: {
    id: string;
    prefix?: string;
    names: string[];
  }[];
};

export const SearchList: FC<SearchListProps> = ({ url, funcSelect, items }) => {
  const { isMobile } = useScreenWidth();

  return (
    <GridTemp justifyContent="even" alignItems="center">
      {items.map(({ id, prefix, names }, index) => (
        <GridItemTemp xs={12} lg={3}>
          <Button
            key={generateUniqueKey(index)}
            variant="clear"
            typeVariant={isMobile ? 'h4' : 'body'}
            // link={{ url: `#${url}#result` }}
            value={names.join(' - ')}
            func={funcSelect}
            width="full"
            // TODO: sort this formatting
            content={`${prefix ?? ''}\n${names.map((name) => [name].join('\n'))}`}
            subContent={id.slice(-2)}
            subContentTop
            padding="coarse"
          />
        </GridItemTemp>
      ))}
    </GridTemp>
  );
};
