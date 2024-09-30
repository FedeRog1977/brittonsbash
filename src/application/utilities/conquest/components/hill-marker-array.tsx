import { FC } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { generateUniqueKey, toCoords, toFeet } from '../../../../utils';
import { Hill } from '../../../../utils/types';
import { Flex, Typography } from '../../../../components';
import { HillMarkerProps } from './hill-markers';

type HillMarkerArrayProps = {
  hills: Hill[];
} & HillMarkerProps;

export const HillMarkerArray: FC<HillMarkerArrayProps> = ({ hills, type }) => (
  <>
    {hills.map(({ name, lat, lon, elevation, summit, image }, index) => {
      const { latFormatted, lonFormatted } = toCoords(lat, lon);

      return (
        <Marker key={generateUniqueKey(index)} position={[lat, lon]}>
          <Popup>
            <Flex direction="vertical" alignHorizontal="center" gap="md">
              <Typography variant="h4" color="darkGrey">
                {name}
              </Typography>

              <Typography variant="body" boldFace color="darkGrey">
                {type + ' at ' + toFeet(elevation)}
              </Typography>

              <Typography variant="body" color="darkGrey">
                {latFormatted + ', ' + lonFormatted}
              </Typography>

              <Typography variant="body" color="darkGrey">
                {summit + ' summit'}
              </Typography>

              <img
                style={{
                  width: '250px',
                }}
                src="https://lewisbritton.com/images/general/placeholder.webp"
                alt="placeholder"
              />
            </Flex>
          </Popup>
        </Marker>
      );
    })}
  </>
);
