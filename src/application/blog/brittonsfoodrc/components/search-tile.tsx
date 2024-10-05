import { Button, Flex, FlexItem, Tile } from '../../../../components';
import { FC } from 'react';
import { SearchList } from './search-list';
import { Food } from '../types/food';

export type SearchTileProps = {
  funcCategory: (value: string) => void;
  showSearchList: boolean;
  foodData: Pick<Food, 'name'>[];
  isMeat: boolean;
  isPoultry: boolean;
  isFish: boolean;
  isPasta: boolean;
  isBread: boolean;
  isSweet: boolean;
  isMisc: boolean;
  funcSelect: (e: any) => void;
};

export const SearchTile: FC<SearchTileProps> = ({
  funcCategory,
  showSearchList,
  foodData,
  isMeat,
  isPoultry,
  isFish,
  isPasta,
  isBread,
  isSweet,
  isMisc,
  funcSelect,
}) => (
  <Tile type="solid">
    <Flex direction="vertical" gap="md">
      <Flex direction="horizontal" alignHorizontal="apart" wrap>
        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t2"
            typeColor={Boolean(showSearchList && isMeat) ? 'lightBlue' : undefined}
            content="Meat"
            func={() => funcCategory('Meat')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t2"
            typeColor={Boolean(showSearchList && isPoultry) ? 'lightBlue' : undefined}
            content="Poultry"
            func={() => funcCategory('Poultry')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t2"
            typeColor={Boolean(showSearchList && isFish) ? 'lightBlue' : undefined}
            content="Fish"
            func={() => funcCategory('Fish')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t2"
            typeColor={Boolean(showSearchList && isPasta) ? 'lightBlue' : undefined}
            content="Pasta"
            func={() => funcCategory('Pasta')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t2"
            typeColor={Boolean(showSearchList && isBread) ? 'lightBlue' : undefined}
            content="Bread"
            func={() => funcCategory('Bread')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t2"
            typeColor={Boolean(showSearchList && isSweet) ? 'lightBlue' : undefined}
            content="Sweet"
            func={() => funcCategory('Sweet')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t2"
            typeColor={Boolean(showSearchList && isMisc) ? 'lightBlue' : undefined}
            content="Misc"
            func={() => funcCategory('Misc')}
            width="full"
          />
        </FlexItem>
      </Flex>

      {showSearchList ? <SearchList funcSelect={funcSelect} items={foodData} /> : null}
    </Flex>
  </Tile>
);
