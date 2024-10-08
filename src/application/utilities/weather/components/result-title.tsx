import { FC } from 'react';
import { Flex, Tile, Typography } from '../../../../components';
import { WeatherDaily } from './daily';
import { isMobile } from '../../../../utils';

type ResultTileProps = {
  title: string;
  subTitle: string;
  subSubTitle?: string;
  lat: number;
  lon: number;
};

export const ResultTitle: FC<ResultTileProps> = ({ title, subTitle, subSubTitle, lat, lon }) => (
  <Tile type="solid">
    <Flex direction="vertical" gap={isMobile() ? 'xs' : 'md'}>
      <Typography variant="h1" textAlign="center">
        {title}
      </Typography>

      <Typography variant="h2" color="mediumGrey" textAlign="center">
        {subTitle}
      </Typography>

      {subSubTitle ? (
        <Typography variant="h4" color="mediumGrey" textAlign="center">
          Marked by {subSubTitle}
        </Typography>
      ) : null}

      <WeatherDaily latIn={lat} lonIn={lon} />
    </Flex>
  </Tile>
);
