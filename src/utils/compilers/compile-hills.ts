import { getSessionItem } from '../api/index.js';

export const compileHills = () => getSessionItem('response-hills');
