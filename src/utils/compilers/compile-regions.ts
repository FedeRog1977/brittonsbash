import { getSessionItem } from '../api';

export const compileRegions = () => getSessionItem('response-regions');
