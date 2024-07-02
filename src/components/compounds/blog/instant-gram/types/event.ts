import { ArticleProps, Img } from '../../../../bash-blocks';

export type Event = {
  id?: string;
  prefix?: string;
  names: string[];
  startDate: string;
  endDate?: string;
  // TODO: make this accept from the api as DataContentResponse[]
  // Just like output
  features?: {
    cities?: string[];
    districts?: string[];
    attractions?: string[];
    youthHostels?: string[];
    supermarkets?: string[];
    shops?: string[];
    foodstuffs?: string[];
    cafes?: string[];
    bakeries?: string[];
    gelaterias?: string[];
    restaurants?: string[];
    bars?: string[];
    filmingLocations?: string[];
  };
  description: string;
  images: Img[];
};
