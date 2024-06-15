import { FC } from 'react';
import { VideoTile } from '../../../bash-blocks';
import { SearchTile } from './components/search-tile';
import { useMiamiVice } from './utils/use-miami-vice';

export const MiamiVice: FC = () => {
  const { handleSelect, video } = useMiamiVice();

  return (
    <>
      <SearchTile funcSelect={handleSelect} />
      <VideoTile
        type="solid"
        heading={video.heading}
        subHeading={video.subHeading}
        video={video.video}
        controls
      />
    </>
  );
};
