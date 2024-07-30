import { Button, Flex, FlexItem, Tile } from '../../../../bash-blocks';
import { FC } from 'react';
import { SearchList } from './search-list';
import { ResultTileProps } from './result-tile';

export type SearchTileProps = {
  funcCategory: (value: string) => void;
  showSearchList: boolean;
  videoData: Pick<ResultTileProps, 'heading' | 'subHeading'>[];
  isFive: boolean;
  isFour: boolean;
  isThree: boolean;
  isTwo: boolean;
  isOne: boolean;
  funcSelect: (e: any) => void;
};

export const SearchTile: FC<SearchTileProps> = ({
  funcCategory,
  showSearchList,
  videoData,
  isFive,
  isFour,
  isThree,
  isTwo,
  isOne,
  funcSelect,
}) => (
  <Tile type="solid">
    <Flex direction="vertical" gap="md">
      <Flex direction="horizontal" alignHorizontal="apart" wrap>
        {/* TODO: change data to:
            {
              "title": "2024",
              "entries": []
            }
          so this can be mapped
          And with this, standardize the { title, entries } type
        */}
        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(showSearchList && isOne) ? 'lightBlue' : undefined
            }
            typeFontFamily="miami"
            content="ONE"
            subContent="Season"
            subContentTop
            func={() => funcCategory('One')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(showSearchList && isTwo) ? 'lightBlue' : undefined
            }
            typeFontFamily="miami"
            content="TWO"
            subContent="Season"
            subContentTop
            func={() => funcCategory('Two')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(showSearchList && isThree) ? 'lightBlue' : undefined
            }
            typeFontFamily="miami"
            content="THREE"
            subContent="Season"
            subContentTop
            func={() => funcCategory('Three')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(showSearchList && isFour) ? 'lightBlue' : undefined
            }
            typeFontFamily="miami"
            content="FOUR"
            subContent="Season"
            subContentTop
            func={() => funcCategory('Four')}
            width="full"
          />
        </FlexItem>

        <FlexItem grow>
          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(showSearchList && isFive) ? 'lightBlue' : undefined
            }
            typeFontFamily="miami"
            content="FIVE"
            subContent="Season"
            subContentTop
            func={() => funcCategory('Five')}
            width="full"
          />
        </FlexItem>
      </Flex>

      {showSearchList ? (
        <SearchList funcSelect={funcSelect} items={videoData} />
      ) : null}
    </Flex>
  </Tile>
);
