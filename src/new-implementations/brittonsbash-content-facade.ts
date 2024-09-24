import { BrittonsBashContentClient } from '../new-services';
import { UrlGroup } from '../utils/types';

type BrittonsBashContentFacade = {
  getLinks: () => Promise<UrlGroup[]>;
};

const getBrittonsBashContentFacade = (): BrittonsBashContentFacade => {
  return new BrittonsBashContentClient(
    'https://raw.githubusercontent.com/FedeRog1977/brittonsbash-content/master/data/'
  );
};

export const brittonsBashContentFacade = getBrittonsBashContentFacade();
