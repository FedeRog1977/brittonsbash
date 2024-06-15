import { Button, Stack, Tile } from '../../../../bash-blocks';
import { EventProps } from '../../../../../utils';
import { FC } from 'react';
import { SearchList } from './search-list';
import { BigSearch } from '../../../../bash-blocks';

type SearchTileProps = {
  url?: string;
  funcCategory: (value: string) => void;
  showSearchList: boolean;
  eventData: (Pick<EventProps, 'prefix' | 'names'> & { id: string })[];
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
  showSearchList,
  eventData,
  funcInput,
  funcButton,
  funcSelect,
  is2024,
  is2023,
  is2022,
  is2021,
  is2020,
}) => (
  <Tile type="solid" gap>
    <Stack direction="vertical" spacing="md">
      <BigSearch
        funcInput={funcInput}
        funcButton={funcButton}
        placeholder="Lookup Events"
      />

      <Stack direction="horizontal" alignHorizontal="apart" wrap>
        <Button
          variant="clear"
          typeVariant="t1"
          typeColor={
            Boolean(showSearchList && is2024) ? 'lightBlue' : undefined
          }
          content="2024"
          subContent="Season 5"
          subContentTop
          value="2024"
          func={() => {
            funcCategory('2024');
          }}
        />

        <Button
          variant="clear"
          typeVariant="t1"
          typeColor={
            Boolean(showSearchList && is2023) ? 'lightBlue' : undefined
          }
          content="2023"
          subContent="Season 4"
          subContentTop
          value="2023"
          func={() => {
            funcCategory('2023');
          }}
        />

        <Button
          variant="clear"
          typeVariant="t1"
          typeColor={
            Boolean(showSearchList && is2022) ? 'lightBlue' : undefined
          }
          content="2022"
          subContent="Season 3"
          subContentTop
          value="2022"
          func={() => {
            funcCategory('2022');
          }}
        />

        <Button
          variant="clear"
          typeVariant="t1"
          typeColor={
            Boolean(showSearchList && is2021) ? 'lightBlue' : undefined
          }
          content="2021"
          subContent="Season 2"
          subContentTop
          value="2021"
          func={() => {
            funcCategory('2021');
          }}
        />

        <Button
          variant="clear"
          typeVariant="t1"
          typeColor={
            Boolean(showSearchList && is2020) ? 'lightBlue' : undefined
          }
          content="2020"
          subContent="Season 1"
          subContentTop
          value="2020"
          func={() => {
            funcCategory('2020');
          }}
        />
      </Stack>

      {showSearchList ? (
        <SearchList url={url} funcSelect={funcSelect} items={eventData} />
      ) : null}
    </Stack>
  </Tile>
);
