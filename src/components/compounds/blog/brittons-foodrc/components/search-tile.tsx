import { Button, Flex, FlexItem, Tile } from '../../../../bash-blocks';
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
            typeVariant="t1"
            typeColor={
              Boolean(showSearchList && isMeat) ? 'lightBlue' : undefined
            }
            typeFontFamily="calligraphy"
            content="Meat"
            func={() => funcCategory('Meat')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(showSearchList && isPoultry) ? 'lightBlue' : undefined
            }
            typeFontFamily="calligraphy"
            content="Poultry"
            func={() => funcCategory('Poultry')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(showSearchList && isFish) ? 'lightBlue' : undefined
            }
            typeFontFamily="calligraphy"
            content="Fish"
            func={() => funcCategory('Fish')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(showSearchList && isPasta) ? 'lightBlue' : undefined
            }
            typeFontFamily="calligraphy"
            content="Pasta"
            func={() => funcCategory('Pasta')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(showSearchList && isBread) ? 'lightBlue' : undefined
            }
            typeFontFamily="calligraphy"
            content="Bread"
            func={() => funcCategory('Bread')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(showSearchList && isSweet) ? 'lightBlue' : undefined
            }
            typeFontFamily="calligraphy"
            content="Sweet"
            func={() => funcCategory('Sweet')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(showSearchList && isMisc) ? 'lightBlue' : undefined
            }
            typeFontFamily="calligraphy"
            content="Misc"
            func={() => funcCategory('Misc')}
            width="full"
          />
        </FlexItem>
      </Flex>

      {showSearchList ? (
        <SearchList funcSelect={funcSelect} items={foodData} />
      ) : null}
    </Flex>
  </Tile>
);
