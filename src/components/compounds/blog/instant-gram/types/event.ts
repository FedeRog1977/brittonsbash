import { Img } from '../../../../bash-blocks';
import { Features } from './features';

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
