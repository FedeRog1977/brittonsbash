import { ArticleProps, Img } from '../../../../bash-blocks';

export type Event = {
  id?: string;
  prefix?: string;
  names: string[];
  startDate: string;
  endDate?: string;
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
  // TODO: remove ability for Article as this
  // supports MD now
  description: string | ArticleProps['sections'];
  images: Img[];
};
