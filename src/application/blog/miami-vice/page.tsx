import { FootnoteTile, PageLayout } from '../../../components';
import { ReactNode } from 'react';
import { useMiamiVice } from './utils/use-miami-vice';
import { SearchTile } from './components/search-tile';
import { ResultTile } from './components/result-tile';
import { miamiViceContent } from './content/miami-vice-content';

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
    <ResultTile
      heading={video?.heading as string}
      subHeading={video?.subHeading}
      video={video?.video as string}
    />,
    <FootnoteTile {...miamiViceContent.tileTwo} />,
  ];

  return <PageLayout background={miamiViceContent.background}>{content}</PageLayout>;
};
