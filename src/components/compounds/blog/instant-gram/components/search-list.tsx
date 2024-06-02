import { Button } from '../../../../bash-blocks';
import { generateUniqueKey, useScreenWidth } from '../../../../../utils';
import { FC } from 'react';

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
    <>
      {items.map(({ id, prefix, names }, index) => (
        <Button
          key={generateUniqueKey(index)}
          variant="clear"
          typeVariant={isMobile ? 'h4' : 'body'}
          // link={{ url: `#${url}#result` }}
          value={names.join(' - ')}
          func={funcSelect}
          content={
            <>
              {prefix ? prefix + ':' : null}
              {names.map((name, index) => (
                <div key={generateUniqueKey(index)}>{name}</div>
              ))}
            </>
          }
          subContent={id.slice(-2)}
          subContentTop
          width={isMobile ? 'full' : 'quarter'}
          padding="coarse"
        />
      ))}
    </>
  );
};
