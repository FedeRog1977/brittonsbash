import { BrittonsBashContentClient } from '../services';
import { baseUrls } from '../utils/constants';
import {
  Culinary,
  Events,
  Features,
  Hills,
  Img,
  MappedEvents,
  MappedMiles,
  MappedProjects,
  MappedRoadies,
  Project,
  Regions,
  UrlGroup,
} from '../utils/types';

type BrittonsBashContentFacade = {
  getCulinary: () => Promise<Culinary>;
  getEvents: () => Promise<Events>;
  getHills: () => Promise<Hills>;
  getLinks: () => Promise<UrlGroup[]>;
  getMappedEventFeatures: () => Promise<Features>;
  getMappedEventImages: () => Promise<Img[]>;
  getMappedEventSports: () => Promise<Project[]>;
  getMappedEvents: () => Promise<MappedEvents>;
  getMappedMiles: () => Promise<MappedMiles>;
  getMappedProjects: () => Promise<MappedProjects>;
  getMappedRoadies: () => Promise<MappedRoadies>;
  getRegions: () => Promise<Regions>;
};

const getBrittonsBashContentFacade = (): BrittonsBashContentFacade => {
  return new BrittonsBashContentClient(baseUrls.brittonsBashContent);
};

export const brittonsBashContentFacade = getBrittonsBashContentFacade();
