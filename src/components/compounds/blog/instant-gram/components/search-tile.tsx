import { Button, Spacing, Stack, Tile } from '../../../../bash-blocks';
import {
  compileEvents,
  useScreenWidth,
  useShowElement,
} from '../../../../../utils';
import { FC, useState } from 'react';
import { SearchList } from './search-list';
import { BigSearch } from '../../../../bash-blocks';
import { GridTemp } from '../../../../bash-blocks/basics/grid-temp/grid';
import { GridItemTemp } from '../../../../bash-blocks/basics/grid-temp/grid-item';
import { SpacingTemp } from '../../../../bash-blocks/basics/spacing-temp';

type SearchTileProps = {
  url?: string;
  funcCategory: (value: string) => void;
  funcInput: (e: any) => void;
  funcButton: () => void;
  funcSelect: (e: any) => void;
  is2024: boolean;
  is2023: boolean;
  is2022: boolean;
  is2021: boolean;
  is2020: boolean;
};

export const SearchTile: FC<SearchTileProps> = ({
  url,
  funcCategory,
  funcInput,
  funcButton,
  funcSelect,
  is2024,
  is2023,
  is2022,
  is2021,
  is2020,
}) => {
  const { isMobile } = useScreenWidth();
  const { showElement, setShowElement } = useShowElement();

  const { events } = compileEvents();

  // TODO: move this logic to hook
  const emptyEventData = [
    {
      id: '',
      names: [''],
      startDate: '',
      images: [
        {
          url: '',
          alt: '',
        },
      ],
    },
  ];
  const [parsedEventData, setParsedEventData] = useState(emptyEventData);

  return (
    <Tile type="solid" gap>
      <Stack direction="vertical" spacing="md">
        <BigSearch
          funcInput={funcInput}
          funcButton={funcButton}
          placeholder="Lookup Events"
        />

        {/* TODO: maybe add other justify props to SPacing or make FlexBase consistent with Grid */}
        <Stack direction="horizontal" alignHorizontal="apart" wrap>
          <Button
            variant="clear"
            typeVariant={isMobile ? 't1' : 't2'}
            typeColor={Boolean(showElement && is2024) ? 'lightBlue' : undefined}
            content="2024"
            subContent="Season 5"
            subContentTop={isMobile}
            value="2024"
            func={() => {
              funcCategory('2024');
              setShowElement(!showElement);
              setParsedEventData(events[2024]);
            }}
          />

          <Button
            variant="clear"
            typeVariant={isMobile ? 't1' : 't2'}
            typeColor={Boolean(showElement && is2023) ? 'lightBlue' : undefined}
            content="2023"
            subContent="Season 4"
            subContentTop={isMobile}
            value="2023"
            func={() => {
              funcCategory('2023');
              setShowElement(!showElement);
              setParsedEventData(events[2023]);
            }}
          />

          <Button
            variant="clear"
            typeVariant={isMobile ? 't1' : 't2'}
            typeColor={Boolean(showElement && is2022) ? 'lightBlue' : undefined}
            content="2022"
            subContent="Season 3"
            subContentTop={isMobile}
            value="2022"
            func={() => {
              funcCategory('2022');
              setShowElement(!showElement);
              setParsedEventData(events[2022]);
            }}
          />

          <Button
            variant="clear"
            typeVariant={isMobile ? 't1' : 't2'}
            typeColor={Boolean(showElement && is2021) ? 'lightBlue' : undefined}
            content="2021"
            subContent="Season 2"
            subContentTop={isMobile}
            value="2021"
            func={() => {
              funcCategory('2021');
              setShowElement(!showElement);
              setParsedEventData(events[2021]);
            }}
          />

          <Button
            variant="clear"
            typeVariant={isMobile ? 't1' : 't2'}
            typeColor={Boolean(showElement && is2020) ? 'lightBlue' : undefined}
            content="2020"
            subContent="Season 1"
            subContentTop={isMobile}
            value="2020"
            func={() => {
              funcCategory('2020');
              setShowElement(!showElement);
              setParsedEventData(events[2020]);
            }}
          />
        </Stack>

        {showElement ? (
          <SearchList
            url={url}
            funcSelect={funcSelect}
            items={parsedEventData}
          />
        ) : null}
      </Stack>
    </Tile>
  );
};
