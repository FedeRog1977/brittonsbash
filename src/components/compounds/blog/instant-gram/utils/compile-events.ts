import { getSessionItem } from '../../../../../utils/api/index.js';
import { Event } from '../types/event.js';

export const compileEvents = () => {
  const events = getSessionItem('response-events');
  const eventsParsed: Event[] = [];

  events[2024].forEach((event: Event) => {
    eventsParsed.push(event);
  });

  events[2023].forEach((event: Event) => {
    eventsParsed.push(event);
  });

  events[2022].forEach((event: Event) => {
    eventsParsed.push(event);
  });

  events[2021].forEach((event: Event) => {
    eventsParsed.push(event);
  });

  events[2020].forEach((event: Event) => {
    eventsParsed.push(event);
  });

  return { events, eventsParsed };
};
