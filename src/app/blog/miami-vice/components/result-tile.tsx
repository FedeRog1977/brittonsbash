import { FC } from 'react';
import { Flex, Tile, Typography, Video, VideoProps } from '../../../../components';
import { isMobile } from '../../../../utils';

export type ResultTileProps = {
  heading: string;
  subHeading?: string;
  video: VideoProps['video'];
};

export const ResultTile: FC<ResultTileProps> = ({ heading, subHeading, video }) => (
  <Tile type="clear">
    <Flex direction="vertical" gap={isMobile() ? 'xs' : 'md'}>
      {subHeading ? (
        <Typography variant="h4" fontFamily="miami" color="lightGrey" textAlign="center">
          {subHeading.toLocaleUpperCase()}
        </Typography>
      ) : null}

      <Typography variant="t1" fontFamily="miami" textAlign="center">
        {heading.toLocaleUpperCase()}
      </Typography>

      <Video video={video} controls />
    </Flex>
  </Tile>
);
