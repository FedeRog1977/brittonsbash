import { toMiles, toFeet } from '../../utils';
import { MappedRoadies, Roadie, Sport } from '../../utils/types';

export const mapRoadies = (sport: Sport): MappedRoadies => {
  const roadies: MappedRoadies['roadies'] = {
    2024: sport[2024].roadies,
    2023: sport[2023].roadies,
    2022: sport[2022].roadies,
    2021: sport[2021].roadies,
    2020: sport[2020].roadies,
  };

  const number: MappedRoadies['number'] = {
    total:
      sport[2023].roadies.length +
      sport[2022].roadies.length +
      sport[2021].roadies.length +
      sport[2020].roadies.length,
    2024: sport[2024].roadies.length,
    2023: sport[2023].roadies.length,
    2022: sport[2022].roadies.length,
    2021: sport[2021].roadies.length,
    2020: sport[2020].roadies.length,
  };

  var centuriesTotal: number = 0;
  var strathavensTotal: number = 0;
  var fenwickWindfarmsTotal: number = 0;
  var fenwicksTotal: number = 0;
  var windfarmsTotal: number = 0;
  var thorntonhallsTotal: number = 0;

  var distance2024: number = 0;
  var elevation2024: number = 0;

  var centuries2024: number = 0;
  var strathavens2024: number = 0;
  var fenwickWindfarms2024: number = 0;
  var fenwicks2024: number = 0;
  var windfarms2024: number = 0;
  var thorntonhalls2024: number = 0;

  sport[2024].roadies.forEach((event: Roadie) => {
    distance2024 = distance2024 + event.distance;
    elevation2024 = elevation2024 + event.elevation;

    event.name === 'Century'
      ? (centuries2024 = centuries2024 + 1)
      : (centuries2024 = centuries2024 + 0);

    event.name === 'Strathaven'
      ? (strathavens2024 = strathavens2024 + 1)
      : (strathavens2024 = strathavens2024 + 0);

    event.name === 'Fenwick + Wind Farm'
      ? (fenwickWindfarms2024 = fenwickWindfarms2024 + 1)
      : (fenwickWindfarms2024 = fenwickWindfarms2024 + 0);

    event.name === 'Fenwick'
      ? (fenwicks2024 = fenwicks2024 + 1)
      : (fenwicks2024 = fenwicks2024 + 0);

    event.name === 'Wind Farm'
      ? (windfarms2024 = windfarms2024 + 1)
      : (windfarms2024 = windfarms2024 + 0);

    event.name === 'Thorntonhall'
      ? (thorntonhalls2024 = thorntonhalls2024 + 1)
      : (thorntonhalls2024 = thorntonhalls2024 + 0);
  });

  var distance2023: number = 0;
  var elevation2023: number = 0;

  var centuries2023: number = 0;
  var strathavens2023: number = 0;
  var fenwickWindfarms2023: number = 0;
  var fenwicks2023: number = 0;
  var windfarms2023: number = 0;
  var thorntonhalls2023: number = 0;

  sport[2023].roadies.forEach((event: Roadie) => {
    distance2023 = distance2023 + event.distance;
    elevation2023 = elevation2023 + event.elevation;

    event.name === 'Century'
      ? (centuries2023 = centuries2023 + 1)
      : (centuries2023 = centuries2023 + 0);

    event.name === 'Strathaven'
      ? (strathavens2023 = strathavens2023 + 1)
      : (strathavens2023 = strathavens2023 + 0);

    event.name === 'Fenwick + Wind Farm'
      ? (fenwickWindfarms2023 = fenwickWindfarms2023 + 1)
      : (fenwickWindfarms2023 = fenwickWindfarms2023 + 0);

    event.name === 'Fenwick'
      ? (fenwicks2023 = fenwicks2023 + 1)
      : (fenwicks2023 = fenwicks2023 + 0);

    event.name === 'Wind Farm'
      ? (windfarms2023 = windfarms2023 + 1)
      : (windfarms2023 = windfarms2023 + 0);

    event.name === 'Thorntonhall'
      ? (thorntonhalls2023 = thorntonhalls2023 + 1)
      : (thorntonhalls2023 = thorntonhalls2023 + 0);
  });

  var distance2022: number = 0;
  var elevation2022: number = 0;

  var centuries2022: number = 0;
  var strathavens2022: number = 0;
  var fenwickWindfarms2022: number = 0;
  var fenwicks2022: number = 0;
  var windfarms2022: number = 0;
  var thorntonhalls2022: number = 0;

  sport[2022].roadies.forEach((event: Roadie) => {
    distance2022 = distance2022 + event.distance;
    elevation2022 = elevation2022 + event.elevation;

    event.name === 'Century'
      ? (centuries2022 = centuries2022 + 1)
      : (centuries2022 = centuries2022 + 0);

    event.name === 'Strathaven'
      ? (strathavens2022 = strathavens2022 + 1)
      : (strathavens2022 = strathavens2022 + 0);

    event.name === 'Fenwick + Wind Farm'
      ? (fenwickWindfarms2022 = fenwickWindfarms2022 + 1)
      : (fenwickWindfarms2022 = fenwickWindfarms2022 + 0);

    event.name === 'Fenwick'
      ? (fenwicks2022 = fenwicks2022 + 1)
      : (fenwicks2022 = fenwicks2022 + 0);

    event.name === 'Wind Farm'
      ? (windfarms2022 = windfarms2022 + 1)
      : (windfarms2022 = windfarms2022 + 0);

    event.name === 'Thorntonhall'
      ? (thorntonhalls2022 = thorntonhalls2022 + 1)
      : (thorntonhalls2022 = thorntonhalls2022 + 0);
  });

  var distance2021: number = 0;
  var elevation2021: number = 0;

  var centuries2021: number = 0;
  var strathavens2021: number = 0;
  var fenwickWindfarms2021: number = 0;
  var fenwicks2021: number = 0;
  var windfarms2021: number = 0;
  var thorntonhalls2021: number = 0;

  sport[2021].roadies.forEach((event: Roadie) => {
    distance2021 = distance2021 + event.distance;
    elevation2021 = elevation2021 + event.elevation;

    event.name === 'Century'
      ? (centuries2021 = centuries2021 + 1)
      : (centuries2021 = centuries2021 + 0);

    event.name === 'Strathaven'
      ? (strathavens2021 = strathavens2021 + 1)
      : (strathavens2021 = strathavens2021 + 0);

    event.name === 'Fenwick + Wind Farm'
      ? (fenwickWindfarms2021 = fenwickWindfarms2021 + 1)
      : (fenwickWindfarms2021 = fenwickWindfarms2021 + 0);

    event.name === 'Fenwick'
      ? (fenwicks2021 = fenwicks2021 + 1)
      : (fenwicks2021 = fenwicks2021 + 0);

    event.name === 'Wind Farm'
      ? (windfarms2021 = windfarms2021 + 1)
      : (windfarms2021 = windfarms2021 + 0);

    event.name === 'Thorntonhall'
      ? (thorntonhalls2021 = thorntonhalls2021 + 1)
      : (thorntonhalls2021 = thorntonhalls2021 + 0);
  });

  var distance2020: number = 0;
  var elevation2020: number = 0;

  var centuries2020: number = 0;
  var strathavens2020: number = 0;
  var fenwickWindfarms2020: number = 0;
  var fenwicks2020: number = 0;
  var windfarms2020: number = 0;
  var thorntonhalls2020: number = 0;

  sport[2020].roadies.forEach((event: Roadie) => {
    distance2020 = distance2020 + event.distance;
    elevation2020 = elevation2020 + event.elevation;

    event.name === 'Century'
      ? (centuries2020 = centuries2020 + 1)
      : (centuries2020 = centuries2020 + 0);

    event.name === 'Strathaven'
      ? (strathavens2020 = strathavens2020 + 1)
      : (strathavens2020 = strathavens2020 + 0);

    event.name === 'Fenwick + Wind Farm'
      ? (fenwickWindfarms2020 = fenwickWindfarms2020 + 1)
      : (fenwickWindfarms2020 = fenwickWindfarms2020 + 0);

    event.name === 'Fenwick'
      ? (fenwicks2020 = fenwicks2020 + 1)
      : (fenwicks2020 = fenwicks2020 + 0);

    event.name === 'Wind Farm'
      ? (windfarms2020 = windfarms2020 + 1)
      : (windfarms2020 = windfarms2020 + 0);

    event.name === 'Thorntonhall'
      ? (thorntonhalls2020 = thorntonhalls2020 + 1)
      : (thorntonhalls2020 = thorntonhalls2020 + 0);
  });

  centuriesTotal = centuries2024 + centuries2023 + centuries2022 + centuries2021 + centuries2020;
  strathavensTotal =
    strathavens2024 + strathavens2023 + strathavens2022 + strathavens2021 + strathavens2020;
  fenwickWindfarmsTotal =
    fenwickWindfarms2024 +
    fenwickWindfarms2023 +
    fenwickWindfarms2022 +
    fenwickWindfarms2021 +
    fenwickWindfarms2020;
  fenwicksTotal = fenwicks2024 + fenwicks2023 + fenwicks2022 + fenwicks2021 + fenwicks2020;
  windfarmsTotal = windfarms2024 + windfarms2023 + windfarms2022 + windfarms2021 + windfarms2020;
  thorntonhallsTotal =
    thorntonhalls2024 +
    thorntonhalls2023 +
    thorntonhalls2022 +
    thorntonhalls2021 +
    thorntonhalls2020;

  const centuries: MappedRoadies['centuries'] = {
    total: centuriesTotal,
    2024: centuries2024,
    2023: centuries2023,
    2022: centuries2022,
    2021: centuries2021,
    2020: centuries2020,
  };

  const strathavens: MappedRoadies['strathavens'] = {
    total: strathavensTotal,
    2024: strathavens2024,
    2023: strathavens2023,
    2022: strathavens2022,
    2021: strathavens2021,
    2020: strathavens2020,
  };

  const fenwickWindfarms: MappedRoadies['fenwickWindfarms'] = {
    total: fenwickWindfarmsTotal,
    2024: fenwickWindfarms2024,
    2023: fenwickWindfarms2023,
    2022: fenwickWindfarms2022,
    2021: fenwickWindfarms2021,
    2020: fenwickWindfarms2020,
  };

  const fenwicks: MappedRoadies['fenwicks'] = {
    total: fenwicksTotal,
    2024: fenwicks2024,
    2023: fenwicks2023,
    2022: fenwicks2022,
    2021: fenwicks2021,
    2020: fenwicks2020,
  };

  const windfarms: MappedRoadies['windfarms'] = {
    total: windfarmsTotal,
    2024: windfarms2024,
    2023: windfarms2023,
    2022: windfarms2022,
    2021: windfarms2021,
    2020: windfarms2020,
  };

  const thorntonhalls: MappedRoadies['thorntonhalls'] = {
    total: thorntonhallsTotal,
    2024: thorntonhalls2024,
    2023: thorntonhalls2023,
    2022: thorntonhalls2022,
    2021: thorntonhalls2021,
    2020: thorntonhalls2020,
  };

  const distance: MappedRoadies['distance'] = {
    total: toMiles(distance2024 + distance2023 + distance2022 + distance2021 + distance2020),
    2024: toMiles(distance2024),
    2023: toMiles(distance2023),
    2022: toMiles(distance2022),
    2021: toMiles(distance2021),
    2020: toMiles(distance2020),
  };

  const elevation: MappedRoadies['elevation'] = {
    total: toFeet(elevation2024 + elevation2023 + elevation2022 + elevation2021 + elevation2020),
    2024: toFeet(elevation2024),
    2023: toFeet(elevation2023),
    2022: toFeet(elevation2022),
    2021: toFeet(elevation2021),
    2020: toFeet(elevation2020),
  };

  return {
    roadies,
    number,
    distance,
    elevation,
    centuries,
    strathavens,
    fenwickWindfarms,
    fenwicks,
    windfarms,
    thorntonhalls,
  };
};
