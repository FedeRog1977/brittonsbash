import { BrittonsBashContentClient } from '../new-services';
import { baseUrls } from '../utils';
import { UrlGroup } from '../utils/types';

type BrittonsBashContentFacade = {
  getLinks: () => Promise<UrlGroup[]>;
};

const getBrittonsBashContentFacade = (): BrittonsBashContentFacade => {
  return new BrittonsBashContentClient(baseUrls.brittonsBashContent);
};

export const brittonsBashContentFacade = getBrittonsBashContentFacade();
