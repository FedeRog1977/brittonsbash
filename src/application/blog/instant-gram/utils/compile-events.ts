import { brittonsBashContentFacade } from '../../../../implementations';
import { Event } from '../../../../utils';

const events = await brittonsBashContentFacade.getEvents();

export const compileEvents = () => {
  const eventsParsed: Event[] = [];

  events[2024].forEach((event) => {
    eventsParsed.push(event);
  });

  events[2023].forEach((event) => {
    eventsParsed.push(event);
  });

  events[2022].forEach((event) => {
    eventsParsed.push(event);
  });

  events[2021].forEach((event) => {
    eventsParsed.push(event);
  });

  events[2020].forEach((event) => {
    eventsParsed.push(event);
  });

  return { events, eventsParsed };
};
