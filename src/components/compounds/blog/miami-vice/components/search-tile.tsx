import { Button, Stack, Tile, VideoTileProps } from '../../../../bash-blocks';
import { useScreenWidth, useShowElement } from '../../../../../utils';
import { FC, useState } from 'react';
import { SearchList } from './search-list';
import { miamiViceContent } from '../content';

export type SearchTileProps = {
  funcSelect: (e: any) => void;
};

export const SearchTile: FC<SearchTileProps> = ({ funcSelect }) => {
  const { isMobile } = useScreenWidth();
  const { showElement, setShowElement } = useShowElement();

  const emptyVideoData: VideoTileProps[] = [
    {
      heading: '',
      subHeading: '',
      video: '',
    },
  ];
  const [parsedVideoData, setParsedEventData] = useState(emptyVideoData);

  return (
    <Tile type="solid" gap>
      <Stack direction="vertical" spacing="md">
        <Stack direction="horizontal" alignHorizontal="apart" wrap>
          <Button
            variant="clear"
            typeVariant={isMobile ? 't1' : 't2'}
            typeColor={
              Boolean(
                showElement &&
                  parsedVideoData === miamiViceContent.tileOne.season1
              )
                ? 'lightBlue'
                : undefined
            }
            content="1"
            subContent="Season"
            subContentTop={isMobile}
            func={() => {
              setShowElement(!showElement);
              setParsedEventData(miamiViceContent.tileOne.season1);
            }}
          />

          <Button
            variant="clear"
            typeVariant={isMobile ? 't1' : 't2'}
            typeColor={
              Boolean(
                showElement &&
                  parsedVideoData === miamiViceContent.tileOne.season2
              )
                ? 'lightBlue'
                : undefined
            }
            content="2"
            subContent="Season"
            subContentTop={isMobile}
            func={() => {
              setShowElement(!showElement);
              setParsedEventData(miamiViceContent.tileOne.season2);
            }}
          />

          <Button
            variant="clear"
            typeVariant={isMobile ? 't1' : 't2'}
            typeColor={
              Boolean(
                showElement &&
                  parsedVideoData === miamiViceContent.tileOne.season3
              )
                ? 'lightBlue'
                : undefined
            }
            content="3"
            subContent="Season"
            subContentTop={isMobile}
            func={() => {
              setShowElement(!showElement);
              setParsedEventData(miamiViceContent.tileOne.season3);
            }}
          />

          <Button
            variant="clear"
            typeVariant={isMobile ? 't1' : 't2'}
            typeColor={
              Boolean(
                showElement &&
                  parsedVideoData === miamiViceContent.tileOne.season4
              )
                ? 'lightBlue'
                : undefined
            }
            content="4"
            subContent="Season"
            subContentTop={isMobile}
            func={() => {
              setShowElement(!showElement);
              setParsedEventData(miamiViceContent.tileOne.season4);
            }}
          />

          <Button
            variant="clear"
            typeVariant={isMobile ? 't1' : 't2'}
            typeColor={
              Boolean(
                showElement &&
                  parsedVideoData === miamiViceContent.tileOne.season5
              )
                ? 'lightBlue'
                : undefined
            }
            content="5"
            subContent="Season"
            subContentTop={isMobile}
            func={() => {
              setShowElement(!showElement);
              setParsedEventData(miamiViceContent.tileOne.season5);
            }}
          />
        </Stack>

        {showElement ? (
          <SearchList funcSelect={funcSelect} items={parsedVideoData} />
        ) : null}
      </Stack>
    </Tile>
  );
};
