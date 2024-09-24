import { UrlGroup } from '../utils/types';

type BrittonsBashContentService = {
  getLinks: () => Promise<UrlGroup[]>;
};

export class ClientBrittonsBashContentService implements BrittonsBashContentService {
  // Base URL: https://raw.githubusercontent.com/FedeRog1977
  private readonly baseUrl: string;

  private get linksUrl(): string {
    return `${this.baseUrl}/brittonsbash-content/master/data/links.data.json`;
  }

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
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
}
