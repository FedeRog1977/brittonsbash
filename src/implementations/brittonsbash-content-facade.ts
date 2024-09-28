import { BrittonsBashContentClient } from '../services';
import { baseUrls, Hills } from '../utils';
import { EventsAggregateTemp, UrlGroup } from '../utils';

type BrittonsBashContentFacade = {
  getEvents: () => Promise<EventsAggregateTemp>;
  getHills: () => Promise<Hills>;
  getLinks: () => Promise<UrlGroup[]>;
  // getRegions: () => Promise<>;
  // getSport: () => Promise<>;
};

const getBrittonsBashContentFacade = (): BrittonsBashContentFacade => {
  return new BrittonsBashContentClient(baseUrls.brittonsBashContent);
};

export const brittonsBashContentFacade = getBrittonsBashContentFacade();
