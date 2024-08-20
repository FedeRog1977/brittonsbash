import { getSessionItem } from '../api';

export const compileLinks = () => getSessionItem('response-links');
