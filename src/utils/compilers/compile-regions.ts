import { getSessionItem } from '../api/index.js';

export const compileRegions = () => getSessionItem('response-regions');
