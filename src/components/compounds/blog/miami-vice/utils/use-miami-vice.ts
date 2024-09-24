import { useState } from 'react';
import { compileMiamiVice } from '../utils/compile-miami-vice.js';
import { useShowElement } from '../../../../../utils/index.js';
import { emptyVideoData } from '../mocks/empty-video-data.js';
import { miamiViceContent } from '../content/miami-vice.js';

export const useMiamiVice = () => {
  const allVideos = compileMiamiVice();
  const [video, setVideo] = useState(allVideos[0]);

  const [isFive, setIsFive] = useState(false);
  const [isFour, setIsFour] = useState(false);
  const [isThree, setIsThree] = useState(false);
  const [isTwo, setIsTwo] = useState(false);
  const [isOne, setIsOne] = useState(false);

  const { showElement: showSearchList, setShowElement: setShowSearchList } = useShowElement();
  const [videoData, setVideoData] = useState(emptyVideoData);

  const handleCategory = (value: string) => {
    if (value === 'Five') {
      setIsFive(true);
      setIsFour(false);
      setIsThree(false);
      setIsTwo(false);
      setIsOne(false);
      setShowSearchList(!showSearchList);
      setVideoData(miamiViceContent.tileOne.season5);
    }
    if (value === 'Four') {
      setIsFive(false);
      setIsFour(true);
      setIsThree(false);
      setIsTwo(false);
      setIsOne(false);
      setShowSearchList(!showSearchList);
      setVideoData(miamiViceContent.tileOne.season4);
    }
    if (value === 'Three') {
      setIsFive(false);
      setIsFour(false);
      setIsThree(true);
      setIsTwo(false);
      setIsOne(false);
      setShowSearchList(!showSearchList);
      setVideoData(miamiViceContent.tileOne.season3);
    }
    if (value === 'Two') {
      setIsFive(false);
      setIsFour(false);
      setIsThree(false);
      setIsTwo(true);
      setIsOne(false);
      setShowSearchList(!showSearchList);
      setVideoData(miamiViceContent.tileOne.season2);
    }
    if (value === 'One') {
      setIsFive(false);
      setIsFour(false);
      setIsThree(false);
      setIsTwo(false);
      setIsOne(true);
      setShowSearchList(!showSearchList);
      setVideoData(miamiViceContent.tileOne.season1);
    }
  };

  const handleSelect = (e: any) => {
    for (var i in allVideos) {
      const fullName = allVideos[i]?.heading;

      if (fullName === e.currentTarget.value) {
        setVideo(allVideos[i]);
      }
    }

    setShowSearchList(!showSearchList);
  };

  return {
    handleCategory,
    showSearchList,
    videoData,
    isFive,
    isFour,
    isThree,
    isTwo,
    isOne,
    handleSelect,
    video,
  };
};
