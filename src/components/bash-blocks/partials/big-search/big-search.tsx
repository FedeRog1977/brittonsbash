import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { generateUniqueKey, useScreenWidth } from '../../../../utils';
import { Search, SearchList, Stack } from '../../basics';
import { Button } from '../button';
import { SearchProps } from '../../basics';
import { GridTemp } from '../../basics/grid-temp/grid';
import { GridItemTemp } from '../../basics/grid-temp/grid-item';

export type BigSearchProps = {
  funcInput: SearchProps['func'];
  funcButton: () => void;
  placeholder?: string;
  selects?: {
    funcSelect: (() => void) | ((e: any) => void);
    content: any[];
    placeholder?: string;
  }[];
};

export const BigSearch: FC<BigSearchProps> = ({
  funcInput,
  funcButton,
  placeholder = 'Search',
  selects,
}) => {
  const { isMobile } = useScreenWidth();

  return (
    <Stack direction="vertical" spacing="md">
      <GridTemp
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 'xs', lg: 'md' }}
      >
        <GridItemTemp xs={isMobile ? 8 : 6}>
          <Search func={funcInput} placeholder={placeholder ?? undefined} />
        </GridItemTemp>

        <GridItemTemp xs={2}>
          <Button
            content={isMobile ? <FontAwesomeIcon icon={faSearch} /> : 'Search'}
            func={funcButton}
            width="full"
            padding={isMobile ? 'default' : 'coarse'}
          />
        </GridItemTemp>
      </GridTemp>

      {selects ? (
        <GridTemp justifyContent="center" alignItems="center" spacing="xs">
          {selects.map(({ funcSelect, content, placeholder }, index) => (
            <GridItemTemp key={generateUniqueKey(index)} xs={3}>
              <SearchList
                key={generateUniqueKey(index)}
                func={() => funcSelect}
                content={content}
                placeholder={placeholder ?? ''}
              />
            </GridItemTemp>
          ))}
        </GridTemp>
      ) : null}
    </Stack>
  );
};
