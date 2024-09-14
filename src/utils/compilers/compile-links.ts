import { getSessionItem } from '../api/index.js';

export const compileLinks = () => getSessionItem('response-links');
