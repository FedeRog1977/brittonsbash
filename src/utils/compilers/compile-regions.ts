import { getSessionItem } from '../api';

export const compileRegions = () => {
  const regions = getSessionItem('response-regions');

  return regions;
};
