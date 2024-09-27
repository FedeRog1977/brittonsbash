import { BrittonsBashContentClient } from '../services';
import { baseUrls } from '../utils';
import { EventsAggregateTemp, UrlGroup } from '../utils/types';

type BrittonsBashContentFacade = {
  getEvents: () => Promise<EventsAggregateTemp>;
  getLinks: () => Promise<UrlGroup[]>;
};

const getBrittonsBashContentFacade = (): BrittonsBashContentFacade => {
  return new BrittonsBashContentClient(baseUrls.brittonsBashContent);
};

export const brittonsBashContentFacade = getBrittonsBashContentFacade();
