import {
  Culinary,
  Event,
  Events,
  Features,
  Hills,
  Img,
  MappedEvents,
  MappedMiles,
  MappedProjects,
  MappedRoadies,
  Project,
  UrlGroup,
} from '../utils/types';
import { Regions } from '../utils/types/regions';
import { Sport } from '../utils/types/sport';
import { mapEventFeatures } from './utils/map-event-features';
import { mapEventImages } from './utils/map-event-images';
import { mapEventSports } from './utils/map-event-sports';
import { mapEvents } from './utils/map-events';
import { mapMiles } from './utils/map-miles';
import { mapProjects } from './utils/map-projects';
import { mapRoadies } from './utils/map-roadies';

type BrittonsBashContent = {
  getCulinary: () => Promise<Culinary>;
  getEvents: () => Promise<Events>;
  getEventNames: (year: string) => Promise<Array<Partial<Event>>>;
  getEvent: (year: string, event: string) => Promise<Event>;
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

export class BrittonsBashContentClient implements BrittonsBashContent {
  private readonly baseUrl: string;

  private get culinaryUrl(): string {
    return `${this.baseUrl}/culinary.data.json`;
  }

  private get eventsUrl(): string {
    return `${this.baseUrl}/events.data.json`;
  }

  private get eventUrl(): string {
    return `${this.baseUrl}/events/:year/:event.json`;
  }

  private get hillsUrl(): string {
    return `${this.baseUrl}/hills.data.json`;
  }

  private get linksUrl(): string {
    return `${this.baseUrl}/links.data.json`;
  }

  private get regionsUrl(): string {
    return `${this.baseUrl}/regions.data.json`;
  }

  private get sportUrl(): string {
    return `${this.baseUrl}/sport.data.json`;
  }

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async getCulinary(): Promise<Culinary> {
    const apiUrl = this.culinaryUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Culinary = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid events data received');
    }
  }

  // TODO: discontinue in favour of getEvent() when ready
  public async getEvents(): Promise<Events> {
    const apiUrl = this.eventsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Events = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid events data received');
    }
  }

  public async getEventNames(year: string): Promise<Array<Partial<Event>>> {
    const apiUrl = this.eventUrl.replace(':year', year).replace('/:event.json', '/names.json');

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Array<Partial<Event>> = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid event names data received');
    }
  }

  public async getEvent(year: string, event: string): Promise<Event> {
    const apiUrl = this.eventUrl.replace(':year', year).replace(':event', event);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Event = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid event data received');
    }
  }

  public async getHills(): Promise<Hills> {
    const apiUrl = this.hillsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Hills = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid hills data received');
    }
  }

  public async getLinks(): Promise<UrlGroup[]> {
    const apiUrl = this.linksUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: UrlGroup[] = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid links data received');
    }
  }

  public async getMappedEventFeatures(): Promise<Features> {
    const apiUrl = this.eventsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Events = await response.json();

    const mappedParsedResponse: Features = mapEventFeatures(parsedResponse);

    try {
      return mappedParsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid event data received');
    }
  }

  public async getMappedEventImages(): Promise<Img[]> {
    const apiUrl = this.eventsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Events = await response.json();

    const mappedParsedResponse: Img[] = mapEventImages(parsedResponse);

    try {
      return mappedParsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid event data received');
    }
  }

  public async getMappedEventSports(): Promise<Project[]> {
    const apiUrl = this.sportUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Sport = await response.json();

    const mappedParsedResponse: Project[] = mapEventSports(parsedResponse);

    try {
      return mappedParsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid sport data received');
    }
  }

  public async getMappedEvents(): Promise<MappedEvents> {
    const apiUrl = this.eventsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Events = await response.json();

    const mappedParsedResponse: MappedEvents = mapEvents(parsedResponse);

    try {
      return mappedParsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid event data received');
    }
  }

  public async getMappedMiles(): Promise<MappedMiles> {
    const apiUrl = this.sportUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Sport = await response.json();

    const mappedParsedResponse: MappedMiles = mapMiles(parsedResponse);

    try {
      return mappedParsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid sport data received');
    }
  }

  public async getMappedProjects(): Promise<MappedProjects> {
    const apiUrl = this.sportUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Sport = await response.json();

    const mappedParsedResponse: MappedProjects = mapProjects(parsedResponse);

    try {
      return mappedParsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid sport data received');
    }
  }

  public async getMappedRoadies(): Promise<MappedRoadies> {
    const apiUrl = this.sportUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Sport = await response.json();

    const mappedParsedResponse: MappedRoadies = mapRoadies(parsedResponse);

    try {
      return mappedParsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid sport data received');
    }
  }

  public async getRegions(): Promise<Regions> {
    const apiUrl = this.regionsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Regions = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid regions data received');
    }
  }
}
