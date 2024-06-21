import { miamiViceContent } from '../../..';
import { VideoTileProps } from '../../../../bash-blocks';

export const compileMiamiVice = () => {
  const allVideos: VideoTileProps[] = [];

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
