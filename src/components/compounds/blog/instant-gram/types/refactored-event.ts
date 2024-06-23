import { ArticlePrefaceProps } from '../../../../bash-blocks';
import { Event } from './event';

export type RefactoredEvent = {
  prefix?: Event['prefix'];
  names: string[];
  startDate: Event['startDate'];
  endDate?: Event['endDate'];
  features?: ArticlePrefaceProps['entries'];
  description: Event['description'];
  images: Event['images'];
  distance?: string;
  elevation?: string;
  time?: string;
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
