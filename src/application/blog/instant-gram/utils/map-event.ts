import { toSum, toFeet, toMiles } from '../../../../utils';
import { MappedEvent, Project, Event } from '../../../../utils/types';
import { mapEventFeaturesReadable } from './map-event-features-readable';

export const mapEvent = (event: Event, sport: Project[], showSport: boolean): MappedEvent => {
  const names: string[] = [];
  const distances: number[] = [];
  const elevations: number[] = [];
  const times: string[] = [];
  const islands: string[] = [];
  const munros: string[] = [];
  const munroTops: string[] = [];
  const corbetts: string[] = [];
  const corbettTops: string[] = [];
  const grahams: string[] = [];
  const subTwos: string[] = [];
  const donalds: string[] = [];

  names.pop();
  distances.pop();
  elevations.pop();
  times.pop();
  islands.pop();
  munros.pop();
  munroTops.pop();
  corbetts.pop();
  corbettTops.pop();
  grahams.pop();
  subTwos.pop();
  donalds.pop();

  event.names.forEach((name: string) => {
    names.push(name);
  });

  const features = event.features ? mapEventFeaturesReadable(event.features) : undefined;

  if (sport.length === 0) {
    sport.push({
      id: '',
      name: '',
      distance: 0,
      elevation: 0,
      time: '',
      companionship: 0,
      islands: [],
      munros: [],
      munroTops: [],
      corbetts: [],
      corbettTops: [],
      grahams: [],
      subTwos: [],
      donalds: [],
    });
  }

  sport.forEach((sport: Project) => {
    distances.push(sport.distance);
    elevations.push(sport.elevation);
    times.push(sport.time);
    sport.islands?.forEach((island: string) => {
      islands.push(island);
    });
    sport.munros?.forEach((munro: string) => {
      munros.push(munro);
    });
    sport.munroTops?.forEach((munroTop: string) => {
      munroTops.push(munroTop);
    });
    sport.corbetts?.forEach((corbett: string) => {
      corbetts.push(corbett);
    });
    sport.corbettTops?.forEach((corbettTop: string) => {
      corbettTops.push(corbettTop);
    });
    sport.grahams?.forEach((graham: string) => {
      grahams.push(graham);
    });
    sport.subTwos?.forEach((subTwo: string) => {
      subTwos.push(subTwo);
    });
    sport.donalds?.forEach((donald: string) => {
      donalds.push(donald);
    });
  });

  return {
    prefix: event.prefix,
    names,
    startDate: event.startDate,
    endDate: event.endDate,
    features,
    description: event.description,
    images: event.images,
    distance: toMiles(distances.reduce(toSum)),
    elevation: toFeet(elevations.reduce(toSum)),
    times: times.join(', '),
    islands: islands.sort().join(', '),
    munros: munros.sort().join(', '),
    munroTops: munroTops.sort().join(', '),
    corbetts: corbetts.sort().join(', '),
    corbettTops: corbettTops.sort().join(', '),
    grahams: grahams.sort().join(', '),
    subTwos: subTwos.sort().join(', '),
    donalds: donalds.sort().join(', '),
    showSport: showSport,
  };
};
