import { Events, Hills, UrlGroup } from '../utils/types';
import { Regions } from '../utils/types/regions';
import { Sport } from '../utils/types/sport';

type BrittonsBashContent = {
  getEvents: () => Promise<Events>;
  getHills: () => Promise<Hills>;
  getLinks: () => Promise<UrlGroup[]>;
  getRegions: () => Promise<Regions>;
  getSport: () => Promise<Sport>;
};

export class BrittonsBashContentClient implements BrittonsBashContent {
  private readonly baseUrl: string;

  private get linksUrl(): string {
    return `${this.baseUrl}/links.data.json`;
  }

  private get hillsUrl(): string {
    return `${this.baseUrl}/hills.data.json`;
  }

  private get eventsUrl(): string {
    return `${this.baseUrl}/events.data.json`;
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

  public async getSport(): Promise<Sport> {
    const apiUrl = this.sportUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Sport = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid sport data received');
    }
  }
}
