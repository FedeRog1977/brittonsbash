import { useState } from 'react';
import { compileMiamiVice } from '../../../../../utils';

export const useMiamiVice = () => {
  const allVideos = compileMiamiVice();
  const [video, setVideo] = useState(allVideos[0]);

  const handleSelect = (e: any) => {
    for (var i in allVideos) {
      const fullName = allVideos[i].heading;

      if (fullName === e.currentTarget.value) {
        setVideo(allVideos[i]);
      }
    }
  };

  return {
    handleSelect,
    video,
  };
};
