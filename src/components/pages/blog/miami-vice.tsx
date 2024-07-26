import {
  SearchTile,
  miamiViceContent,
  useMiamiVice,
} from '../../compounds/blog/miami-vice';
import { FootnoteTile, PageLayout, VideoTile } from '../../bash-blocks';
import { ReactNode } from 'react';

export const MiamiVice = () => {
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

  const content: ReactNode[] = [
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
    />,
    <VideoTile
      type="solid"
      heading={video.heading}
      subHeading={video.subHeading}
      video={video.video}
      controls
    />,
    <FootnoteTile {...miamiViceContent.tileTwo} />,
  ];

  return (
    <PageLayout background={miamiViceContent.background}>{content}</PageLayout>
  );
};
