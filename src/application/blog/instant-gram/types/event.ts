// TODO: replace this with the type in utils/types
import { Img } from '../../../../components';
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
