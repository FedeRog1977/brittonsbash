import { BrittonsBashContentClient } from '../services';
import { baseUrls } from '../utils/constants';
import {
  Culinary,
  Event,
  Events,
  Features,
  Hills,
  Img,
  MappedProjects,
  Project,
  Regions,
  SportOptions,
  UrlGroup,
} from '../utils/types';

type BrittonsBashContentFacade = {
  getCulinary: () => Promise<Culinary>;
  getEvents: () => Promise<Events>;
  getEventNames: (year: string) => Promise<Array<Partial<Event>>>;
  getEvent: (year: string, event: string) => Promise<Event>;
  getHills: () => Promise<Hills>;
  getLinks: () => Promise<UrlGroup[]>;
  getMappedEventFeatures: () => Promise<Features>;
  getMappedEventImages: () => Promise<Img[]>;
  getMappedEventSports: () => Promise<Project[]>;
  getMappedEvents: () => Promise<Event[]>;
  getMappedProjects: () => Promise<MappedProjects>;
  getRegions: () => Promise<Regions>;
  getSport: (group: SportOptions, year: string, sport: string) => Promise<Project | Project[]>;
};

const getBrittonsBashContentFacade = (): BrittonsBashContentFacade => {
  return new BrittonsBashContentClient(baseUrls.brittonsBashContent);
};

export const brittonsBashContentFacade = getBrittonsBashContentFacade();
