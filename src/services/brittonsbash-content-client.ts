import { Event, EventsAggregateTemp, UrlGroup } from '../utils/types';

type BrittonsBashContent = {
  getEvents: () => Promise<EventsAggregateTemp>;
  getLinks: () => Promise<UrlGroup[]>;
};

export class BrittonsBashContentClient implements BrittonsBashContent {
  private readonly baseUrl: string;

  private get linksUrl(): string {
    return `${this.baseUrl}/links.data.json`;
  }

  private get eventsUrl(): string {
    return `${this.baseUrl}/events.data.json`;
  }

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // NOTE: this is a temporary service implementation as it will be moved to it's own service type
  public async getEvents(): Promise<EventsAggregateTemp> {
    const apiUrl = this.eventsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: EventsAggregateTemp = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid events data received');
    }
  }
  // ---

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
}
