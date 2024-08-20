import { getSessionItem } from '../api';

export const compileLinks = () => {
  const links = getSessionItem('response-links');

  return links;
};
