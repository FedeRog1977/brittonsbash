import { useState } from 'react';
import { toFeet, toMiles } from '../../../../utils';
import { ColumnTableProps } from '../../../../components';
import { MappedProjects, Miles, Project, Roadie } from '../../../../utils/types';

export const useSport = (mappedProjects: MappedProjects) => {
  const summary: ColumnTableProps = {
    leftColumn: {
      entries: ['Total', '2024', '2023', '2022', '2021', '2020'],
    },
    rightColumns: [
      {
        title: 'Occurrences',
        entries: [
          `${mappedProjects.number.total}`,
          `${mappedProjects.number[2024]}`,
          `${mappedProjects.number[2023]}`,
          `${mappedProjects.number[2022]}`,
          `${mappedProjects.number[2021]}`,
          `${mappedProjects.number[2020]}`,
        ],
      },
      {
        title: 'Distance',
        entries: [
          `${mappedProjects.distance.total}`,
          `${mappedProjects.distance[2024]}`,
          `${mappedProjects.distance[2023]}`,
          `${mappedProjects.distance[2022]}`,
          `${mappedProjects.distance[2021]}`,
          `${mappedProjects.distance[2020]}`,
        ],
      },
      {
        title: 'Elevation',
        entries: [
          `${mappedProjects.elevation.total}`,
          `${mappedProjects.elevation[2024]}`,
          `${mappedProjects.elevation[2023]}`,
          `${mappedProjects.elevation[2022]}`,
          `${mappedProjects.elevation[2021]}`,
          `${mappedProjects.elevation[2020]}`,
        ],
      },
    ],
  };

  const routes: ColumnTableProps = {
    leftColumn: {
      entries: ['Unique', 'Total', '2024', '2023', '2022', '2021', '2020'],
    },
    rightColumns: [
      {
        title: 'Islands',
        entries: [
          `${mappedProjects.islands.number.unique}`,
          `${mappedProjects.islands.number.total}`,
          `${mappedProjects.islands.number[2024]}`,
          `${mappedProjects.islands.number[2023]}`,
          `${mappedProjects.islands.number[2022]}`,
          `${mappedProjects.islands.number[2021]}`,
          `${mappedProjects.islands.number[2020]}`,
        ],
      },
      {
        title: 'Munros',
        entries: [
          `${mappedProjects.munros.number.unique}`,
          `${mappedProjects.munros.number.total}`,
          `${mappedProjects.munros.number[2024]}`,
          `${mappedProjects.munros.number[2023]}`,
          `${mappedProjects.munros.number[2022]}`,
          `${mappedProjects.munros.number[2021]}`,
          `${mappedProjects.munros.number[2020]}`,
        ],
      },
      {
        title: 'Munro Tops',
        entries: [
          `${mappedProjects.munroTops.number.unique}`,
          `${mappedProjects.munroTops.number.total}`,
          `${mappedProjects.munroTops.number[2024]}`,
          `${mappedProjects.munroTops.number[2023]}`,
          `${mappedProjects.munroTops.number[2022]}`,
          `${mappedProjects.munroTops.number[2021]}`,
          `${mappedProjects.munroTops.number[2020]}`,
        ],
      },
      {
        title: 'Corbetts',
        entries: [
          `${mappedProjects.corbetts.number.unique}`,
          `${mappedProjects.corbetts.number.total}`,
          `${mappedProjects.corbetts.number[2024]}`,
          `${mappedProjects.corbetts.number[2023]}`,
          `${mappedProjects.corbetts.number[2022]}`,
          `${mappedProjects.corbetts.number[2021]}`,
          `${mappedProjects.corbetts.number[2020]}`,
        ],
      },
      {
        title: 'Corbett Tops',
        entries: [
          `${mappedProjects.corbettTops.number.unique}`,
          `${mappedProjects.corbettTops.number.total}`,
          `${mappedProjects.corbettTops.number[2024]}`,
          `${mappedProjects.corbettTops.number[2023]}`,
          `${mappedProjects.corbettTops.number[2022]}`,
          `${mappedProjects.corbettTops.number[2021]}`,
          `${mappedProjects.corbettTops.number[2020]}`,
        ],
      },
      {
        title: 'Grahams',
        entries: [
          `${mappedProjects.grahams.number.unique}`,
          `${mappedProjects.grahams.number.total}`,
          `${mappedProjects.grahams.number[2024]}`,
          `${mappedProjects.grahams.number[2023]}`,
          `${mappedProjects.grahams.number[2022]}`,
          `${mappedProjects.grahams.number[2021]}`,
          `${mappedProjects.grahams.number[2020]}`,
        ],
      },
      {
        title: 'Sub2000s',
        entries: [
          `${mappedProjects.subTwos.number.unique}`,
          `${mappedProjects.subTwos.number.total}`,
          `${mappedProjects.subTwos.number[2024]}`,
          `${mappedProjects.subTwos.number[2023]}`,
          `${mappedProjects.subTwos.number[2022]}`,
          `${mappedProjects.subTwos.number[2021]}`,
          `${mappedProjects.subTwos.number[2020]}`,
        ],
      },
      {
        title: 'Donalds',
        entries: [
          `${mappedProjects.donalds.number.unique}`,
          `${mappedProjects.donalds.number.total}`,
          `${mappedProjects.donalds.number[2024]}`,
          `${mappedProjects.donalds.number[2023]}`,
          `${mappedProjects.donalds.number[2022]}`,
          `${mappedProjects.donalds.number[2021]}`,
          `${mappedProjects.donalds.number[2020]}`,
        ],
      },
    ],
  };

  const activities2024: ColumnTableProps = {
    leftColumn: {
      entries: mappedProjects.projects[2024].map(({ name }: Roadie | Project | Miles) => name),
    },
    rightColumns: [
      {
        title: 'Distance',
        entries: mappedProjects.projects[2024].map(({ distance }: Project) => toMiles(distance)),
      },
      {
        title: 'Elevation',
        entries: mappedProjects.projects[2024].map(({ elevation }: Project) => toFeet(elevation)),
      },
      {
        title: 'Time',
        entries: mappedProjects.projects[2024].map(({ time }: Project) => time),
      },
    ],
  };

  const activities2023: ColumnTableProps = {
    leftColumn: {
      entries: mappedProjects.projects[2023].map(({ name }: Roadie | Project | Miles) => name),
    },
    rightColumns: [
      {
        title: 'Distance',
        entries: mappedProjects.projects[2023].map(({ distance }: Project) => toMiles(distance)),
      },
      {
        title: 'Elevation',
        entries: mappedProjects.projects[2023].map(({ elevation }: Project) => toFeet(elevation)),
      },
      {
        title: 'Time',
        entries: mappedProjects.projects[2023].map(({ time }: Project) => time),
      },
    ],
  };

  const activities2022: ColumnTableProps = {
    leftColumn: {
      entries: mappedProjects.projects[2022].map(({ name }: Roadie | Project | Miles) => name),
    },
    rightColumns: [
      {
        title: 'Distance',
        entries: mappedProjects.projects[2022].map(({ distance }: Project) => toMiles(distance)),
      },
      {
        title: 'Elevation',
        entries: mappedProjects.projects[2022].map(({ elevation }: Project) => toFeet(elevation)),
      },
      {
        title: 'Time',
        entries: mappedProjects.projects[2022].map(({ time }: Project) => time),
      },
    ],
  };

  const activities2021: ColumnTableProps = {
    leftColumn: {
      entries: mappedProjects.projects[2021].map(({ name }: Roadie | Project | Miles) => name),
    },
    rightColumns: [
      {
        title: 'Distance',
        entries: mappedProjects.projects[2021].map(({ distance }: Project) => toMiles(distance)),
      },
      {
        title: 'Elevation',
        entries: mappedProjects.projects[2021].map(({ elevation }: Project) => toFeet(elevation)),
      },
      {
        title: 'Time',
        entries: mappedProjects.projects[2021].map(({ time }: Project) => time),
      },
    ],
  };

  const activities2020: ColumnTableProps = {
    leftColumn: {
      entries: mappedProjects.projects[2020].map(({ name }: Roadie | Project | Miles) => name),
    },
    rightColumns: [
      {
        title: 'Distance',
        entries: mappedProjects.projects[2020].map(({ distance }: Project) => toMiles(distance)),
      },
      {
        title: 'Elevation',
        entries: mappedProjects.projects[2020].map(({ elevation }: Project) => toFeet(elevation)),
      },
      {
        title: 'Time',
        entries: mappedProjects.projects[2020].map(({ time }: Project) => time),
      },
    ],
  };

  const [is2024, setIs2024] = useState(true);
  const [is2023, setIs2023] = useState(false);
  const [is2022, setIs2022] = useState(false);
  const [is2021, setIs2021] = useState(false);
  const [is2020, setIs2020] = useState(false);

  const [activities, setActivities] = useState(activities2024);

  const handleActivities = (e: any) => {
    if (e.currentTarget.value === '2024') {
      setActivities(activities2024);
      setIs2024(true);
      setIs2023(false);
      setIs2022(false);
      setIs2021(false);
      setIs2020(false);
    } else if (e.currentTarget.value === '2023') {
      setActivities(activities2023);
      setIs2024(false);
      setIs2023(true);
      setIs2022(false);
      setIs2021(false);
      setIs2020(false);
    } else if (e.currentTarget.value === '2022') {
      setActivities(activities2022);
      setIs2024(false);
      setIs2023(false);
      setIs2022(true);
      setIs2021(false);
      setIs2020(false);
    } else if (e.currentTarget.value === '2021') {
      setActivities(activities2021);
      setIs2024(false);
      setIs2023(false);
      setIs2022(false);
      setIs2021(true);
      setIs2020(false);
    } else if (e.currentTarget.value === '2020') {
      setActivities(activities2020);
      setIs2024(false);
      setIs2023(false);
      setIs2022(false);
      setIs2021(false);
      setIs2020(true);
    } else {
      setActivities(activities2024);
      setIs2024(true);
      setIs2023(false);
      setIs2022(false);
      setIs2021(false);
      setIs2020(false);
    }
  };

  return {
    handleActivities,
    title: 'Projects',
    subTitle: 'Hiking and Fell Running',
    summary,
    routes,
    activities,
    is2024,
    is2023,
    is2022,
    is2021,
    is2020,
  };
};
