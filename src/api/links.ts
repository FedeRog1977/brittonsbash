import { getResponse } from '../utils/index.js';

export const useLinks = () => {
  getResponse(
    'https://raw.githubusercontent.com/FedeRog1977/brittonsbash-content/master/data/links.data.json',
    'GET',
    undefined,
    'links'
  );
};
