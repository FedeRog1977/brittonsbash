import { Img } from './img';
import { Features } from './features';
import { Project } from './project';
import { MappedEventProject } from './mapped-event-project';

type EventBasics = {
  id: string;
  prefix?: string;
  names: string[];
  startDate: string;
  endDate?: string;
  features?: Features;
  description: string;
  images: Img[];
};

type MappedEvent = EventBasics & {
  type: 'mappedSport';
  sport: MappedEventProject;
};

type UnmappedEvent = EventBasics & {
  type: 'unmappedSport';
  sport?: Project | Project[];
};

export type Event = MappedEvent | UnmappedEvent;
