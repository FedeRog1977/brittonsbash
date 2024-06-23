import { Event } from '../types/event';

export const emptyEventData: (Pick<Event, 'prefix' | 'names'> & {
  id: string;
})[] = [
  {
    id: '',
    names: [''],
  },
];
