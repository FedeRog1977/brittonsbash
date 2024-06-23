import { FC } from 'react';
import { VideoTile } from '../../../bash-blocks';
import { SearchTile } from './components/search-tile';
import { useMiamiVice } from './utils/use-miami-vice';

export const MiamiVice: FC = () => {
  const {
    handleCategory,
    showSearchList,
    videoData,
    video,
    isFive,
    isFour,
    isThree,
    isTwo,
    isOne,
    handleSelect,
  } = useMiamiVice();

  return (
    <>
      <SearchTile
        funcCategory={handleCategory}
        showSearchList={showSearchList}
        videoData={videoData}
        isFive={isFive}
        isFour={isFour}
        isThree={isThree}
        isTwo={isTwo}
        isOne={isOne}
        funcSelect={handleSelect}
      />
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
