import { ResultTileProps } from '../components/result-tile';
import { miamiViceContent } from '../content/miami-vice-content';

export const compileMiamiVice = () => {
  const allVideos: ResultTileProps[] = [];

  miamiViceContent.tileOne.season1.forEach((video) => {
    allVideos.push(video);
  });
  miamiViceContent.tileOne.season2.forEach((video) => {
    allVideos.push(video);
  });
  miamiViceContent.tileOne.season3.forEach((video) => {
    allVideos.push(video);
  });
  miamiViceContent.tileOne.season4.forEach((video) => {
    allVideos.push(video);
  });
  miamiViceContent.tileOne.season5.forEach((video) => {
    allVideos.push(video);
  });

  return allVideos;
};
