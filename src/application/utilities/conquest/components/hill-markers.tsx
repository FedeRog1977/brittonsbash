import { FC } from 'react';
import { brittonsBashContentFacade } from '../../../../implementations';
import { HillMarkerArray } from './hill-marker-array';

// TODO: all facade uses should be in their respective page.tsx's
const hills = await brittonsBashContentFacade.getHills();

export type HillMarkerProps = {
  type: 'Munro' | 'Corbett' | 'Munro Top' | 'Corbett Top';
};

export const HillMarkers: FC<HillMarkerProps> = ({ type }) => {
  if (type === 'Munro') {
    return <HillMarkerArray type={type} hills={hills.munros} />;
  }

  if (type === 'Corbett') {
    return <HillMarkerArray type={type} hills={hills.corbetts} />;
  }

  return <></>;
};
