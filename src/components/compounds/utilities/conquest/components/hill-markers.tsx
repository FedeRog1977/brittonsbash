import { FC } from 'react';
import { compileHills } from '../../../../../utils/index.js';
import { HillMarkerArray } from './hill-marker-array.js';

export type HillMarkerProps = {
  type: 'Munro' | 'Corbett' | 'Munro Top' | 'Corbett Top';
};

export const HillMarkers: FC<HillMarkerProps> = ({ type }) => {
  const hills = compileHills();

  if (type === 'Munro') {
    return <HillMarkerArray type={type} hills={hills.munros} />;
  }

  if (type === 'Corbett') {
    return <HillMarkerArray type={type} hills={hills.corbetts} />;
  }

  return <></>;
};
