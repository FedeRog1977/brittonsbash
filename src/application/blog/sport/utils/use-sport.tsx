import { useState } from 'react';
import { toFeet, toMiles, toSpeed } from '../../../../utils';
import { ColumnTableProps } from '../../../../components';
import { Miles } from '../types/miles';
import { Project } from '../types/project';
import { Roadie } from '../types/roadie';
import { compileMiles } from './compile-miles';
import { compileProjects } from './compile-projects';
import { compileRoadies } from './compile-roadies';

export const useSport = () => {
  const compiledRoadies = compileRoadies();
  const compiledProjects = compileProjects();
  const compiledMiles = compileMiles();

  const [isRoadies, setIsRoadies] = useState(true);
  const [isProjects, setIsProjects] = useState(false);
  const [isMiles, setIsMiles] = useState(false);

  const [sportData, setSportData]: any = useState(compiledRoadies);

  const title: string = isRoadies
    ? 'Roadies'
    : isProjects
      ? 'Projects'
      : isMiles
        ? 'Miles'
        : 'Unrecognised Sport';

  const subTitle: string = isRoadies
    ? 'Road Cycling'
    : isProjects
      ? 'Hiking and Fell Running'
      : isMiles
        ? 'Walking and Running'
        : 'Unrecognised Sport';

  const description: string = isRoadies
    ? 'My Roadies hit all of the major rewards I look for in an activity: enjoyment, fitness, and calorie burn. Both of my major routes are more than thirty miles long which is what I look for in these things from a Roadie.'
    : isProjects
      ? 'My Projects hit all of the major rewards I look for in an activity: enjoyment, fitness, and calorie burn. As long as a Project is over ten miles long and has a decent amount of climbing, it delivers all of these things. Perhaps even more so that the other sports.'
      : isMiles
        ? 'My Miles, as of recently, hit all of the major rewards I look for in an activity: enjoyment, fitness, and calorie burn. My most frequent route is a Waterfoot, which I have just started segmenting into a half-walk, half-run. Before this they delivered all but fitness. Now that has changed.'
        : 'This is not even a sport yet.';

  const summary: ColumnTableProps = {
    leftColumn: {
      entries: ['Total', '2024', '2023', '2022', '2021', '2020'],
    },
    rightColumns: [
      {
        title: 'Occurrences',
        entries: [
          `${sportData.number.total}`,
          `${sportData.number[2024]}`,
          `${sportData.number[2023]}`,
          `${sportData.number[2022]}`,
          `${sportData.number[2021]}`,
          `${sportData.number[2020]}`,
        ],
      },
      {
        title: 'Distance',
        entries: [
          `${sportData.distance.total}`,
          `${sportData.distance[2024]}`,
          `${sportData.distance[2023]}`,
          `${sportData.distance[2022]}`,
          `${sportData.distance[2021]}`,
          `${sportData.distance[2020]}`,
        ],
      },
      {
        title: 'Elevation',
        entries: [
          `${sportData.elevation.total}`,
          `${sportData.elevation[2024]}`,
          `${sportData.elevation[2023]}`,
          `${sportData.elevation[2022]}`,
          `${sportData.elevation[2021]}`,
          `${sportData.elevation[2020]}`,
        ],
      },
    ],
  };

  const routes: ColumnTableProps = {
    leftColumn: isRoadies
      ? {
          entries: ['Total', '2024', '2023', '2022', '2021', '2020'],
        }
      : isProjects
        ? {
            entries: ['Unique', 'Total', '2024', '2023', '2022', '2021', '2020'],
          }
        : {
            entries: ['Total', '2024', '2023', '2022', '2021', '2020'],
          },
    rightColumns: isRoadies
      ? [
          {
            title: 'Centuries',
            entries: [
              `${sportData.centuries.total}`,
              `${sportData.centuries[2024]}`,
              `${sportData.centuries[2023]}`,
              `${sportData.centuries[2022]}`,
              `${sportData.centuries[2021]}`,
              `${sportData.centuries[2020]}`,
            ],
          },
          {
            title: 'Strathavens',
            entries: [
              `${sportData.strathavens.total}`,
              `${sportData.strathavens[2024]}`,
              `${sportData.strathavens[2023]}`,
              `${sportData.strathavens[2022]}`,
              `${sportData.strathavens[2021]}`,
              `${sportData.strathavens[2020]}`,
            ],
          },
          {
            title: 'Fenwick + W.F.s',
            entries: [
              `${sportData.fenwickWindfarms.total}`,
              `${sportData.fenwickWindfarms[2024]}`,
              `${sportData.fenwickWindfarms[2023]}`,
              `${sportData.fenwickWindfarms[2022]}`,
              `${sportData.fenwickWindfarms[2021]}`,
              `${sportData.fenwickWindfarms[2020]}`,
            ],
          },
          {
            title: 'Fenwicks',
            entries: [
              `${sportData.fenwicks.total}`,
              `${sportData.fenwicks[2024]}`,
              `${sportData.fenwicks[2023]}`,
              `${sportData.fenwicks[2022]}`,
              `${sportData.fenwicks[2021]}`,
              `${sportData.fenwicks[2020]}`,
            ],
          },
          {
            title: 'Wind Farms',
            entries: [
              `${sportData.windfarms.total}`,
              `${sportData.windfarms[2024]}`,
              `${sportData.windfarms[2023]}`,
              `${sportData.windfarms[2022]}`,
              `${sportData.windfarms[2021]}`,
              `${sportData.windfarms[2020]}`,
            ],
          },
          {
            title: 'Thorntonhalls',
            entries: [
              `${sportData.thorntonhalls.total}`,
              `${sportData.thorntonhalls[2024]}`,
              `${sportData.thorntonhalls[2023]}`,
              `${sportData.thorntonhalls[2022]}`,
              `${sportData.thorntonhalls[2021]}`,
              `${sportData.thorntonhalls[2020]}`,
            ],
          },
        ]
      : isProjects
        ? [
            {
              title: 'Islands',
              entries: [
                `${sportData.islands.number.unique}`,
                `${sportData.islands.number.total}`,
                `${sportData.islands.number[2024]}`,
                `${sportData.islands.number[2023]}`,
                `${sportData.islands.number[2022]}`,
                `${sportData.islands.number[2021]}`,
                `${sportData.islands.number[2020]}`,
              ],
            },
            {
              title: 'Munros',
              entries: [
                `${sportData.munros.number.unique}`,
                `${sportData.munros.number.total}`,
                `${sportData.munros.number[2024]}`,
                `${sportData.munros.number[2023]}`,
                `${sportData.munros.number[2022]}`,
                `${sportData.munros.number[2021]}`,
                `${sportData.munros.number[2020]}`,
              ],
            },
            {
              title: 'Munro Tops',
              entries: [
                `${sportData.munroTops.number.unique}`,
                `${sportData.munroTops.number.total}`,
                `${sportData.munroTops.number[2024]}`,
                `${sportData.munroTops.number[2023]}`,
                `${sportData.munroTops.number[2022]}`,
                `${sportData.munroTops.number[2021]}`,
                `${sportData.munroTops.number[2020]}`,
              ],
            },
            {
              title: 'Corbetts',
              entries: [
                `${sportData.corbetts.number.unique}`,
                `${sportData.corbetts.number.total}`,
                `${sportData.corbetts.number[2024]}`,
                `${sportData.corbetts.number[2023]}`,
                `${sportData.corbetts.number[2022]}`,
                `${sportData.corbetts.number[2021]}`,
                `${sportData.corbetts.number[2020]}`,
              ],
            },
            {
              title: 'Corbett Tops',
              entries: [
                `${sportData.corbettTops.number.unique}`,
                `${sportData.corbettTops.number.total}`,
                `${sportData.corbettTops.number[2024]}`,
                `${sportData.corbettTops.number[2023]}`,
                `${sportData.corbettTops.number[2022]}`,
                `${sportData.corbettTops.number[2021]}`,
                `${sportData.corbettTops.number[2020]}`,
              ],
            },
            {
              title: 'Grahams',
              entries: [
                `${sportData.grahams.number.unique}`,
                `${sportData.grahams.number.total}`,
                `${sportData.grahams.number[2024]}`,
                `${sportData.grahams.number[2023]}`,
                `${sportData.grahams.number[2022]}`,
                `${sportData.grahams.number[2021]}`,
                `${sportData.grahams.number[2020]}`,
              ],
            },
            {
              title: 'Sub2000s',
              entries: [
                `${sportData.subTwos.number.unique}`,
                `${sportData.subTwos.number.total}`,
                `${sportData.subTwos.number[2024]}`,
                `${sportData.subTwos.number[2023]}`,
                `${sportData.subTwos.number[2022]}`,
                `${sportData.subTwos.number[2021]}`,
                `${sportData.subTwos.number[2020]}`,
              ],
            },
            {
              title: 'Donalds',
              entries: [
                `${sportData.donalds.number.unique}`,
                `${sportData.donalds.number.total}`,
                `${sportData.donalds.number[2024]}`,
                `${sportData.donalds.number[2023]}`,
                `${sportData.donalds.number[2022]}`,
                `${sportData.donalds.number[2021]}`,
                `${sportData.donalds.number[2020]}`,
              ],
            },
          ]
        : [
            {
              title: 'Wind Farms',
              entries: [
                `${sportData.windfarms.total}`,
                `${sportData.windfarms[2024]}`,
                `${sportData.windfarms[2023]}`,
                `${sportData.windfarms[2022]}`,
                `${sportData.windfarms[2021]}`,
                `${sportData.windfarms[2020]}`,
              ],
            },
            {
              title: 'Thorntonhalls',
              entries: [
                `${sportData.thorntonhalls.total}`,
                `${sportData.thorntonhalls[2024]}`,
                `${sportData.thorntonhalls[2023]}`,
                `${sportData.thorntonhalls[2022]}`,
                `${sportData.thorntonhalls[2021]}`,
                `${sportData.thorntonhalls[2020]}`,
              ],
            },
            {
              title: 'Waterfoots',
              entries: [
                `${sportData.waterfoots.total}`,
                `${sportData.waterfoots[2024]}`,
                `${sportData.waterfoots[2023]}`,
                `${sportData.waterfoots[2022]}`,
                `${sportData.waterfoots[2021]}`,
                `${sportData.waterfoots[2020]}`,
              ],
            },
          ],
  };

  const activities2024: ColumnTableProps = {
    leftColumn: isRoadies
      ? {
          entries: sportData.roadies[2024].map(({ name }: Roadie | Project | Miles) => name),
        }
      : isProjects
        ? {
            entries: sportData.projects[2024].map(({ name }: Roadie | Project | Miles) => name),
          }
        : {
            entries: sportData.miles[2024].map(({ name }: Roadie | Project | Miles) => name),
          },
    rightColumns: isRoadies
      ? [
          {
            title: 'Distance',
            entries: sportData.roadies[2024].map(({ distance }: Roadie) => toMiles(distance)),
          },
          {
            title: 'Elevation',
            entries: sportData.roadies[2024].map(({ elevation }: Roadie) => toFeet(elevation)),
          },
          {
            title: 'Time',
            entries: sportData.roadies[2024].map(({ time }: Roadie) => time),
          },
          {
            title: 'Speed',
            entries: sportData.roadies[2024].map(({ speed }: Roadie) =>
              // TODO: once all speeds filled in, remove this logic
              speed ? toSpeed(speed, false) : <>&nbsp;</>
            ),
          },
        ]
      : isProjects
        ? [
            {
              title: 'Distance',
              entries: sportData.projects[2024].map(({ distance }: Project) => toMiles(distance)),
            },
            {
              title: 'Elevation',
              entries: sportData.projects[2024].map(({ elevation }: Project) => toFeet(elevation)),
            },
            {
              title: 'Time',
              entries: sportData.projects[2024].map(({ time }: Project) => time),
            },
          ]
        : [
            {
              title: 'Distance',
              entries: sportData.miles[2024].map(({ distance }: Miles) => toMiles(distance)),
            },
            {
              title: 'Elevation',
              entries: sportData.miles[2024].map(({ elevation }: Miles) => toFeet(elevation)),
            },
            {
              title: 'Time',
              entries: sportData.miles[2024].map(({ time }: Miles) => time),
            },
          ],
  };

  const activities2023: ColumnTableProps = {
    leftColumn: isRoadies
      ? {
          entries: sportData.roadies[2023].map(({ name }: Roadie | Project | Miles) => name),
        }
      : isProjects
        ? {
            entries: sportData.projects[2023].map(({ name }: Roadie | Project | Miles) => name),
          }
        : {
            entries: sportData.miles[2023].map(({ name }: Roadie | Project | Miles) => name),
          },
    rightColumns: isRoadies
      ? [
          {
            title: 'Distance',
            entries: sportData.roadies[2023].map(({ distance }: Roadie) => toMiles(distance)),
          },
          {
            title: 'Elevation',
            entries: sportData.roadies[2023].map(({ elevation }: Roadie) => toFeet(elevation)),
          },
          {
            title: 'Time',
            entries: sportData.roadies[2023].map(({ time }: Roadie) => time),
          },
          {
            title: 'Speed',
            entries: sportData.roadies[2023].map(({ speed }: Roadie) =>
              // TODO: once all speeds filled in, remove this logic
              speed ? toSpeed(speed, false) : <>&nbsp;</>
            ),
          },
        ]
      : isProjects
        ? [
            {
              title: 'Distance',
              entries: sportData.projects[2023].map(({ distance }: Project) => toMiles(distance)),
            },
            {
              title: 'Elevation',
              entries: sportData.projects[2023].map(({ elevation }: Project) => toFeet(elevation)),
            },
            {
              title: 'Time',
              entries: sportData.projects[2023].map(({ time }: Project) => time),
            },
          ]
        : [
            {
              title: 'Distance',
              entries: sportData.miles[2023].map(({ distance }: Miles) => toMiles(distance)),
            },
            {
              title: 'Elevation',
              entries: sportData.miles[2023].map(({ elevation }: Miles) => toFeet(elevation)),
            },
            {
              title: 'Time',
              entries: sportData.miles[2023].map(({ time }: Miles) => time),
            },
          ],
  };

  const activities2022: ColumnTableProps = {
    leftColumn: isRoadies
      ? {
          entries: sportData.roadies[2022].map(({ name }: Roadie | Project | Miles) => name),
        }
      : isProjects
        ? {
            entries: sportData.projects[2022].map(({ name }: Roadie | Project | Miles) => name),
          }
        : {
            entries: sportData.miles[2022].map(({ name }: Roadie | Project | Miles) => name),
          },
    rightColumns: isRoadies
      ? [
          {
            title: 'Distance',
            entries: sportData.roadies[2022].map(({ distance }: Roadie) => toMiles(distance)),
          },
          {
            title: 'Elevation',
            entries: sportData.roadies[2022].map(({ elevation }: Roadie) => toFeet(elevation)),
          },
          {
            title: 'Time',
            entries: sportData.roadies[2022].map(({ time }: Roadie) => time),
          },
          {
            title: 'Speed',
            entries: sportData.roadies[2022].map(({ speed }: Roadie) =>
              // TODO: once all speeds filled in, remove this logic
              speed ? toSpeed(speed, false) : <>&nbsp;</>
            ),
          },
        ]
      : isProjects
        ? [
            {
              title: 'Distance',
              entries: sportData.projects[2022].map(({ distance }: Project) => toMiles(distance)),
            },
            {
              title: 'Elevation',
              entries: sportData.projects[2022].map(({ elevation }: Project) => toFeet(elevation)),
            },
            {
              title: 'Time',
              entries: sportData.projects[2022].map(({ time }: Project) => time),
            },
          ]
        : [
            {
              title: 'Distance',
              entries: sportData.miles[2022].map(({ distance }: Miles) => toMiles(distance)),
            },
            {
              title: 'Elevation',
              entries: sportData.miles[2022].map(({ elevation }: Miles) => toFeet(elevation)),
            },
            {
              title: 'Time',
              entries: sportData.miles[2022].map(({ time }: Miles) => time),
            },
          ],
  };

  const activities2021: ColumnTableProps = {
    leftColumn: isRoadies
      ? {
          entries: sportData.roadies[2021].map(({ name }: Roadie | Project | Miles) => name),
        }
      : isProjects
        ? {
            entries: sportData.projects[2021].map(({ name }: Roadie | Project | Miles) => name),
          }
        : {
            entries: sportData.miles[2021].map(({ name }: Roadie | Project | Miles) => name),
          },
    rightColumns: isRoadies
      ? [
          {
            title: 'Distance',
            entries: sportData.roadies[2021].map(({ distance }: Roadie) => toMiles(distance)),
          },
          {
            title: 'Elevation',
            entries: sportData.roadies[2021].map(({ elevation }: Roadie) => toFeet(elevation)),
          },
          {
            title: 'Time',
            entries: sportData.roadies[2021].map(({ time }: Roadie) => time),
          },
          {
            title: 'Speed',
            entries: sportData.roadies[2021].map(({ speed }: Roadie) =>
              // TODO: once all speeds filled in, remove this logic
              speed ? toSpeed(speed, false) : <>&nbsp;</>
            ),
          },
        ]
      : isProjects
        ? [
            {
              title: 'Distance',
              entries: sportData.projects[2021].map(({ distance }: Project) => toMiles(distance)),
            },
            {
              title: 'Elevation',
              entries: sportData.projects[2021].map(({ elevation }: Project) => toFeet(elevation)),
            },
            {
              title: 'Time',
              entries: sportData.projects[2021].map(({ time }: Project) => time),
            },
          ]
        : [
            {
              title: 'Distance',
              entries: sportData.miles[2021].map(({ distance }: Miles) => toMiles(distance)),
            },
            {
              title: 'Elevation',
              entries: sportData.miles[2021].map(({ elevation }: Miles) => toFeet(elevation)),
            },
            {
              title: 'Time',
              entries: sportData.miles[2021].map(({ time }: Miles) => time),
            },
          ],
  };

  const activities2020: ColumnTableProps = {
    leftColumn: isRoadies
      ? {
          entries: sportData.roadies[2020].map(({ name }: Roadie | Project | Miles) => name),
        }
      : isProjects
        ? {
            entries: sportData.projects[2020].map(({ name }: Roadie | Project | Miles) => name),
          }
        : {
            entries: sportData.miles[2020].map(({ name }: Roadie | Project | Miles) => name),
          },
    rightColumns: isRoadies
      ? [
          {
            title: 'Distance',
            entries: sportData.roadies[2020].map(({ distance }: Roadie) => toMiles(distance)),
          },
          {
            title: 'Elevation',
            entries: sportData.roadies[2020].map(({ elevation }: Roadie) => toFeet(elevation)),
          },
          {
            title: 'Time',
            entries: sportData.roadies[2020].map(({ time }: Roadie) => time),
          },
          {
            title: 'Speed',
            entries: sportData.roadies[2020].map(({ speed }: Roadie) =>
              // TODO: once all speeds filled in, remove this logic
              speed ? toSpeed(speed, false) : <>&nbsp;</>
            ),
          },
        ]
      : isProjects
        ? [
            {
              title: 'Distance',
              entries: sportData.projects[2020].map(({ distance }: Project) => toMiles(distance)),
            },
            {
              title: 'Elevation',
              entries: sportData.projects[2020].map(({ elevation }: Project) => toFeet(elevation)),
            },
            {
              title: 'Time',
              entries: sportData.projects[2020].map(({ time }: Project) => time),
            },
          ]
        : [
            {
              title: 'Distance',
              entries: sportData.miles[2020].map(({ distance }: Miles) => toMiles(distance)),
            },
            {
              title: 'Elevation',
              entries: sportData.miles[2020].map(({ elevation }: Miles) => toFeet(elevation)),
            },
            {
              title: 'Time',
              entries: sportData.miles[2020].map(({ time }: Miles) => time),
            },
          ],
  };

  const [is2024, setIs2024] = useState(true);
  const [is2023, setIs2023] = useState(false);
  const [is2022, setIs2022] = useState(false);
  const [is2021, setIs2021] = useState(false);
  const [is2020, setIs2020] = useState(false);

  const [activities, setActivities] = useState(activities2024);

  const handleCategory = (e: any) => {
    if (e.currentTarget.value === 'roadies') {
      setSportData(compiledRoadies);
      setIsRoadies(true);
      setIsProjects(false);
      setIsMiles(false);
      setActivities(activities2024);
      setIs2024(true);
      setIs2023(false);
      setIs2022(false);
      setIs2021(false);
      setIs2020(false);
    } else if (e.currentTarget.value === 'projects') {
      setSportData(compiledProjects);
      setIsRoadies(false);
      setIsProjects(true);
      setIsMiles(false);
      setActivities(activities2024);
      setIs2024(true);
      setIs2023(false);
      setIs2022(false);
      setIs2021(false);
      setIs2020(false);
    } else if (e.currentTarget.value === 'miles') {
      setSportData(compiledMiles);
      setIsRoadies(false);
      setIsProjects(false);
      setIsMiles(true);
      setActivities(activities2024);
      setIs2024(true);
      setIs2023(false);
      setIs2022(false);
      setIs2021(false);
      setIs2020(false);
    } else if (e.currentTarget.value === 'tennis') {
    } else {
      setSportData(compiledRoadies);
      setIsRoadies(true);
      setIsProjects(false);
      setIsMiles(false);
      setActivities(activities2024);
      setIs2024(true);
      setIs2023(false);
      setIs2022(false);
      setIs2021(false);
      setIs2020(false);
    }
  };

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
    handleCategory,
    handleActivities,
    title,
    subTitle,
    description,
    summary,
    routes,
    activities,
    isRoadies,
    isProjects,
    isMiles,
    is2024,
    is2023,
    is2022,
    is2021,
    is2020,
  };
};
