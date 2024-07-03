import { Button, Stack, Tile, VideoTileProps } from '../../../../bash-blocks';
import { useScreenWidth } from '../../../../../utils';
import { FC } from 'react';
import { SearchList } from './search-list';

export type SearchTileProps = {
  funcCategory: (value: string) => void;
  showSearchList: boolean;
  videoData: Pick<VideoTileProps, 'heading' | 'subHeading'>[];
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
    <Stack direction="vertical" spacing="md">
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
          typeColor={Boolean(showSearchList && isOne) ? 'lightBlue' : undefined}
          typeFontFamily="miami"
          content="ONE"
          subContent="Season"
          subContentTop
          func={() => funcCategory('One')}
        />

        <Button
          variant="clear"
          typeVariant="t1"
          typeColor={Boolean(showSearchList && isTwo) ? 'lightBlue' : undefined}
          typeFontFamily="miami"
          content="TWO"
          subContent="Season"
          subContentTop
          func={() => funcCategory('Two')}
        />

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
        />

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
        />

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
        />
      </Stack>

      {showSearchList ? (
        <SearchList funcSelect={funcSelect} items={videoData} />
      ) : null}
    </Stack>
  </Tile>
);
