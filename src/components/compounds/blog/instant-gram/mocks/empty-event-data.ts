import { Event } from '../types/event.js';

export const emptyEventData: (Pick<Event, 'prefix' | 'names'> & {
  id: string;
})[] = [
  {
    id: '',
    names: [''],
  },
];
