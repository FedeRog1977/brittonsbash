import { BrittonsBashContentClient } from '../services';
import { baseUrls } from '../utils/constants';
import { Events, Hills, Regions, Sport, UrlGroup } from '../utils/types';

type BrittonsBashContentFacade = {
  getEvents: () => Promise<Events>;
  getHills: () => Promise<Hills>;
  getLinks: () => Promise<UrlGroup[]>;
  getRegions: () => Promise<Regions>;
  getSport: () => Promise<Sport>;
};

const getBrittonsBashContentFacade = (): BrittonsBashContentFacade => {
  return new BrittonsBashContentClient(baseUrls.brittonsBashContent);
};

export const brittonsBashContentFacade = getBrittonsBashContentFacade();
