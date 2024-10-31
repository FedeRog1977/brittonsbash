import { Img } from './img';
import { Features } from './features';
import { Project } from './project';

export type Event = {
  id: string;
  prefix?: string;
  names: string[];
  startDate: string;
  endDate?: string;
  features?: Features;
  description: string;
  images: Img[];
  sport?: Project | Project[];
};
