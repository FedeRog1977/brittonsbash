import { DataContentResponse, Img } from '../../../../bash-blocks';

export type Event = {
  id?: string;
  prefix?: string;
  names: string[];
  startDate: string;
  endDate?: string;
  // TODO: amend data on this level to reflect new format
  features?: DataContentResponse[];
  description: string;
  images: Img[];
};
