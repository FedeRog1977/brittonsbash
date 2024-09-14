import { getResponse } from '../utils/index.js';

export const useEvents = () => {
  getResponse(
    'https://raw.githubusercontent.com/FedeRog1977/brittonsbash-content/master/data/events.data.json',
    'GET',
    undefined,
    'events',
    true
  );
};
