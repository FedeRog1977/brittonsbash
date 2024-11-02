import { Img } from './img';
import { Features } from './features';
import { Project } from './project';
import { MappedEventProject } from './mapped-event-project';
import { GenericDataContent } from './generic-data-content';

type EventBasics = {
  id: string;
  prefix?: string;
  names: string[];
  startDate: string;
  endDate?: string;
  description: string;
  images: Img[];
};

export type UnmappedEvent = EventBasics & {
  // type: 'unmapped';
  features?: Features;
  sport?: Project | Project[];
};

type MappedSportEvent = EventBasics & {
  type: 'mappedSport';
  features?: GenericDataContent[];
  sport: MappedEventProject;
};

type UnmappedSportEvent = EventBasics & {
  type: 'unmappedSport';
  features?: GenericDataContent[];
  sport?: Project;
};

export type Event = UnmappedEvent | MappedSportEvent | UnmappedSportEvent;
