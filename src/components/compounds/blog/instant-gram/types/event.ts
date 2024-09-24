import { Img } from '../../../../bash-blocks/index.js';
import { Features } from './features.js';

export type Event = {
  id?: string;
  prefix?: string;
  names: string[];
  startDate: string;
  endDate?: string;
  features?: Features;
  description: string;
  images: Img[];
};
