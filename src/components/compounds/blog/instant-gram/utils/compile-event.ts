import { toSum, toFeet, toMiles } from '../../../../../utils/helpers';
import { Event } from '../types/event';
import { Project } from '../types/project';
import { RefactoredEvent } from '../types/refactored-event';

export type CompiledEvent = {
  event: Event;
  sport: Project[];
  showSport: boolean;
};

export const compileEvent = ({ event, sport, showSport }: CompiledEvent) => {
  const names: string[] = [];
  const distances: number[] = [];
  const elevations: number[] = [];
  const times: string[] = [];
  const islandSetAggregate: string[] = [];
  const munroSetAggregate: string[] = [];
  const munroTopSetAggregate: string[] = [];
  const corbettSetAggregate: string[] = [];
  const corbettTopSetAggregate: string[] = [];
  const grahamSetAggregate: string[] = [];
  const subTwoSetAggregate: string[] = [];
  const donaldSetAggregate: string[] = [];

  names.pop();
  distances.pop();
  elevations.pop();
  times.pop();
  islandSetAggregate.pop();
  munroSetAggregate.pop();
  munroTopSetAggregate.pop();
  corbettSetAggregate.pop();
  corbettTopSetAggregate.pop();
  grahamSetAggregate.pop();
  subTwoSetAggregate.pop();
  donaldSetAggregate.pop();

  event.names.forEach((name: string) => {
    names.push(name);
  });

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
    sport.islands?.forEach((islandSet: string) => {
      islandSetAggregate.push(islandSet);
    });
    sport.munros?.forEach((munroSet: string) => {
      munroSetAggregate.push(munroSet);
    });
    sport.munroTops?.forEach((munroTopSet: string) => {
      munroTopSetAggregate.push(munroTopSet);
    });
    sport.corbetts?.forEach((corbettSet: string) => {
      corbettSetAggregate.push(corbettSet);
    });
    sport.corbettTops?.forEach((corbettTopSet: string) => {
      corbettTopSetAggregate.push(corbettTopSet);
    });
    sport.grahams?.forEach((grahamSet: string) => {
      grahamSetAggregate.push(grahamSet);
    });
    sport.subTwos?.forEach((subTwoSet: string) => {
      subTwoSetAggregate.push(subTwoSet);
    });
    sport.donalds?.forEach((donaldSet: string) => {
      donaldSetAggregate.push(donaldSet);
    });
  });

  const refactoredEvent: RefactoredEvent = {
    prefix: event.prefix,
    names,
    startDate: event.startDate,
    endDate: event.endDate,
    // TODO: amend data on this level to reflect new format
    features: event.features,
    description: event.description,
    images: event.images,
    distance: toMiles(distances.reduce(toSum)),
    elevation: toFeet(elevations.reduce(toSum)),
    time: times.join(', '),
    islands: islandSetAggregate.join(', '),
    munros: munroSetAggregate.join(', '),
    munroTops: munroTopSetAggregate.join(', '),
    corbetts: corbettSetAggregate.join(', '),
    corbettTops: corbettTopSetAggregate.join(', '),
    grahams: grahamSetAggregate.join(', '),
    subTwos: subTwoSetAggregate.join(', '),
    donalds: donaldSetAggregate.join(', '),
    showSport: showSport,
  };

  return refactoredEvent;
};
