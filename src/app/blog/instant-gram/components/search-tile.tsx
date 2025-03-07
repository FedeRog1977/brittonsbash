import { BigSearch, Button, Flex, FlexItem, Tile } from '../../../../components';
import { Event } from '../../../../utils/types';
import { FC } from 'react';
import { SearchList } from './search-list';

type SearchTileProps = {
  funcCategory: (value: string) => void;
  showSearchList: boolean;
  eventData: Partial<Event>[];
  is2025: boolean;
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
  is2025,
  is2024,
  is2023,
  is2022,
  is2021,
  is2020,
  funcInput,
  funcButton,
  funcSelect,
}) => (
  <Tile type="clear">
    <Flex direction="vertical" gap="md">
      <BigSearch funcInput={funcInput} funcButton={funcButton} placeholder="Lookup Events" />

      <Flex direction="horizontal" wrap>
        <FlexItem grow>
          <Button
            variant="inverse"
            typeVariant="t2"
            typeColor={Boolean(showSearchList && is2025) ? 'lightBlue' : undefined}
            content="2025"
            value="2025"
            func={() => {
              funcCategory('2025');
            }}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="inverse"
            typeVariant="t2"
            typeColor={Boolean(showSearchList && is2024) ? 'lightBlue' : undefined}
            content="2024"
            value="2024"
            func={() => {
              funcCategory('2024');
            }}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="inverse"
            typeVariant="t2"
            typeColor={Boolean(showSearchList && is2023) ? 'lightBlue' : undefined}
            content="2023"
            value="2023"
            func={() => {
              funcCategory('2023');
            }}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="inverse"
            typeVariant="t2"
            typeColor={Boolean(showSearchList && is2022) ? 'lightBlue' : undefined}
            content="2022"
            value="2022"
            func={() => {
              funcCategory('2022');
            }}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="inverse"
            typeVariant="t2"
            typeColor={Boolean(showSearchList && is2021) ? 'lightBlue' : undefined}
            content="2021"
            value="2021"
            func={() => {
              funcCategory('2021');
            }}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="inverse"
            typeVariant="t2"
            typeColor={Boolean(showSearchList && is2020) ? 'lightBlue' : undefined}
            content="2020"
            value="2020"
            func={() => {
              funcCategory('2020');
            }}
            width="full"
          />
        </FlexItem>
      </Flex>

      {showSearchList ? <SearchList funcSelect={funcSelect} items={eventData} /> : null}
    </Flex>
  </Tile>
);
