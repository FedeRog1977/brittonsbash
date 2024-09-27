// TODO: replace this with the type in utils/types
import { DataContentResponse } from '../../../../components';
import { Event } from './event';

export type CompiledEvent = {
  prefix?: Event['prefix'];
  names: string[];
  startDate: Event['startDate'];
  endDate?: Event['endDate'];
  features?: DataContentResponse[];
  description: Event['description'];
  images: Event['images'];
  distance?: string;
  elevation?: string;
  times?: string;
  islands?: string;
  munros?: string;
  munroTops?: string;
  corbetts?: string;
  corbettTops?: string;
  grahams?: string;
  subTwos?: string;
  donalds?: string;
  showSport: boolean;
};
