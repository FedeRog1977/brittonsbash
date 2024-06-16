import { Button, Stack, Tile, VideoTileProps } from '../../../../bash-blocks';
import { useScreenWidth, useShowElement } from '../../../../../utils';
import { FC, useState } from 'react';
import { SearchList } from './search-list';
import { brittonsFoodRCContent } from '../content';

export type SearchTileProps = {
  funcSelect: (e: any) => void;
};

export const SearchTile: FC<SearchTileProps> = ({ funcSelect }) => {
  const { showElement, setShowElement } = useShowElement();

  // TODO: move this to hook like IG and Sport
  // And remove any once types are sorted
  const emptyFoodData: any = [
    {
      name: '',
      ingredients: ['', ''],
      description: [''],
      images: [
        {
          url: '',
          alt: '',
        },
      ],
      tags: [],
    },
  ];
  const [parsedFoodData, setParsedFoodData] = useState(emptyFoodData);

  return (
    <Tile type="solid" gap>
      <Stack direction="vertical" spacing="md">
        <Stack direction="horizontal" alignHorizontal="apart" wrap>
          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(
                showElement &&
                  parsedFoodData === brittonsFoodRCContent.tileOne.roast
              )
                ? 'lightBlue'
                : undefined
            }
            typeFontFamily="calligraphy"
            content="Roast"
            func={() => {
              setShowElement(!showElement);
              setParsedFoodData(brittonsFoodRCContent.tileOne.roast);
            }}
          />

          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(
                showElement &&
                  parsedFoodData === brittonsFoodRCContent.tileOne.stew
              )
                ? 'lightBlue'
                : undefined
            }
            typeFontFamily="calligraphy"
            content="Stew"
            func={() => {
              setShowElement(!showElement);
              setParsedFoodData(brittonsFoodRCContent.tileOne.stew);
            }}
          />

          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(
                showElement &&
                  parsedFoodData === brittonsFoodRCContent.tileOne.ragu
              )
                ? 'lightBlue'
                : undefined
            }
            typeFontFamily="calligraphy"
            content="Ragu"
            func={() => {
              setShowElement(!showElement);
              setParsedFoodData(brittonsFoodRCContent.tileOne.ragu);
            }}
          />

          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(
                showElement &&
                  parsedFoodData === brittonsFoodRCContent.tileOne.fish
              )
                ? 'lightBlue'
                : undefined
            }
            typeFontFamily="calligraphy"
            content="Fish"
            func={() => {
              setShowElement(!showElement);
              setParsedFoodData(brittonsFoodRCContent.tileOne.fish);
            }}
          />

          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(
                showElement &&
                  parsedFoodData === brittonsFoodRCContent.tileOne.pasta
              )
                ? 'lightBlue'
                : undefined
            }
            typeFontFamily="calligraphy"
            content="Pasta"
            func={() => {
              setShowElement(!showElement);
              setParsedFoodData(brittonsFoodRCContent.tileOne.pasta);
            }}
          />

          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(
                showElement &&
                  parsedFoodData === brittonsFoodRCContent.tileOne.bread
              )
                ? 'lightBlue'
                : undefined
            }
            typeFontFamily="calligraphy"
            content="Bread"
            func={() => {
              setShowElement(!showElement);
              setParsedFoodData(brittonsFoodRCContent.tileOne.bread);
            }}
          />

          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(
                showElement &&
                  parsedFoodData === brittonsFoodRCContent.tileOne.sweet
              )
                ? 'lightBlue'
                : undefined
            }
            typeFontFamily="calligraphy"
            content="Sweet"
            func={() => {
              setShowElement(!showElement);
              setParsedFoodData(brittonsFoodRCContent.tileOne.sweet);
            }}
          />

          <Button
            variant="clear"
            typeVariant="t1"
            typeColor={
              Boolean(
                showElement &&
                  parsedFoodData === brittonsFoodRCContent.tileOne.misc
              )
                ? 'lightBlue'
                : undefined
            }
            typeFontFamily="calligraphy"
            content="Misc"
            func={() => {
              setShowElement(!showElement);
              setParsedFoodData(brittonsFoodRCContent.tileOne.misc);
            }}
          />
        </Stack>

        {showElement ? (
          <SearchList funcSelect={funcSelect} items={parsedFoodData} />
        ) : null}
      </Stack>
    </Tile>
  );
};
