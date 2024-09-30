import { Events, MappedEvents } from '../../utils/types';

export const mapEvents = (events: Events): MappedEvents => ({
  events,
  mappedEvents: events[2024]
    .concat(events[2023])
    .concat(events[2022])
    .concat(events[2021])
    .concat(events[2020]),
});
