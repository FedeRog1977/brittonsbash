import {
  SearchTile,
  miamiViceContent,
  useMiamiVice,
} from '../../compounds/blog/miami-vice';
import {
  FootnoteTile,
  PageLayout,
  Spacing,
  VideoTile,
} from '../../bash-blocks';

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

  return (
    <PageLayout background={miamiViceContent.background}>
      <Spacing marginBottom="md">
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
      </Spacing>

      <Spacing marginBottom="md">
        <VideoTile
          type="solid"
          heading={video.heading}
          subHeading={video.subHeading}
          video={video.video}
          controls
        />
      </Spacing>

      <Spacing marginBottom="md">
        <FootnoteTile {...miamiViceContent.tileTwo} />
      </Spacing>
    </PageLayout>
  );
};
