import { getResponse } from '../utils';

export const useSport = () => {
  getResponse(
    'https://raw.githubusercontent.com/FedeRog1977/brittonsbash-content/master/data/sport.data.json',
    'GET',
    undefined,
    'sport',
    true
  );
};
