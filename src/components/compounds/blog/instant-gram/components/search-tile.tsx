import { Button, Stack, Tile } from '../../../../bash-blocks';
import { Event } from '../types/event';
import { FC } from 'react';
import { SearchList } from './search-list';
import { BigSearch } from '../../../../bash-blocks';

type SearchTileProps = {
  funcCategory: (value: string) => void;
  showSearchList: boolean;
  eventData: (Pick<Event, 'prefix' | 'names'> & { id: string })[];
  is2024: boolean;
  is2023: boolean;
  is2022: boolean;
  is2021: boolean;
  is2020: boolean;
  funcInput: (e: any) => void;
  funcButton: () => void;
  funcSelect: (e: any) => void;
};

export const SearchTile: FC<SearchTileProps> = ({
  funcCategory,
  showSearchList,
  eventData,
  is2024,
  is2023,
  is2022,
  is2021,
  is2020,
  funcInput,
  funcButton,
  funcSelect,
}) => (
  <Tile type="solid" gap>
    <Stack direction="vertical" spacing="md">
      <BigSearch
        funcInput={funcInput}
        funcButton={funcButton}
        placeholder="Lookup Events"
      />

      <Stack direction="horizontal" alignHorizontal="apart" wrap>
        {/* TODO: change data to:
          {
            "title": "2024",
            "entries": []
          }
          so this can be mapped
          And with this, standardize the { title, entries } type
        */}
        <Button
          variant="clear"
          typeVariant="t1"
          typeColor={
            Boolean(showSearchList && is2024) ? 'lightBlue' : undefined
          }
          typeFontFamily="instagram"
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
          typeFontFamily="instagram"
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
          typeFontFamily="instagram"
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
          typeFontFamily="instagram"
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
          typeFontFamily="instagram"
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
        <SearchList funcSelect={funcSelect} items={eventData} />
      ) : null}
    </Stack>
  </Tile>
);
