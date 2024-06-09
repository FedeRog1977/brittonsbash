import { useState } from 'react';
import {
  MilesProps,
  ProjectProps,
  RoadieProps,
  compileMiles,
  compileProjects,
  compileRoadies,
  toFeet,
  toMiles,
  toSpeed,
} from '../../../../../utils';
import { ColumnTableProps } from '../../../../bash-blocks';

export const useSport = () => {
  const compiledRoadies = compileRoadies();
  const compiledProjects = compileProjects();
  const compiledMiles = compileMiles();

  const [sportData, setSportData]: any = useState(compiledRoadies);

  const [isRoadies, setIsRoadies] = useState(true);
  const [isProjects, setIsProjects] = useState(false);
  const [isMiles, setIsMiles] = useState(false);

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
      ? 'Hiking / Fell Running'
      : isMiles
        ? 'Walking / Running'
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
          sportData.distance.total as string,
          sportData.distance[2024] as string,
          sportData.distance[2023] as string,
          sportData.distance[2022] as string,
          sportData.distance[2021] as string,
          sportData.distance[2020] as string,
        ],
      },
      {
        title: 'Elevation',
        entries: [
          sportData.elevation.total as string,
          sportData.elevation[2024] as string,
          sportData.elevation[2023] as string,
          sportData.elevation[2022] as string,
          sportData.elevation[2021] as string,
          sportData.elevation[2020] as string,
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
            entries: [
              'Unique',
              'Total',
              '2024',
              '2023',
              '2022',
              '2021',
              '2020',
            ],
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
    leftColumn: {
      entries: sportData.roadies[2024].map(
        ({ name }: RoadieProps | ProjectProps | MilesProps) => name
      ),
    },
    rightColumns: isRoadies
      ? [
          {
            title: 'Distance',
            entries: sportData.roadies[2024].map(({ distance }: RoadieProps) =>
              toMiles(distance)
            ),
          },
          {
            title: 'Elevation',
            entries: sportData.roadies[2024].map(({ elevation }: RoadieProps) =>
              toFeet(elevation)
            ),
          },
          {
            title: 'Time',
            entries: sportData.roadies[2024].map(
              ({ time }: RoadieProps) => time
            ),
          },
          {
            title: 'Speed',
            entries: sportData.roadies[2024].map(({ speed }: RoadieProps) =>
              // TODO: once all speeds filled in, remove this logic
              speed ? toSpeed(speed, false) : <>&nbsp;</>
            ),
          },
        ]
      : isProjects
        ? [
            {
              title: 'Distance',
              entries: sportData.projects[2024].map(
                ({ distance }: ProjectProps) => toMiles(distance)
              ),
            },
            {
              title: 'Elevation',
              entries: sportData.projects[2024].map(
                ({ elevation }: ProjectProps) => toFeet(elevation)
              ),
            },
            {
              title: 'Time',
              entries: sportData.projects[2024].map(
                ({ time }: ProjectProps) => time
              ),
            },
          ]
        : [
            {
              title: 'Distance',
              entries: sportData.miles[2024].map(({ distance }: MilesProps) =>
                toMiles(distance)
              ),
            },
            {
              title: 'Elevation',
              entries: sportData.miles[2024].map(({ elevation }: MilesProps) =>
                toFeet(elevation)
              ),
            },
            {
              title: 'Time',
              entries: sportData.miles[2024].map(
                ({ time }: MilesProps) => time
              ),
            },
          ],
  };

  const activities2023: ColumnTableProps = {
    leftColumn: {
      entries: sportData.roadies[2023].map(
        ({ name }: RoadieProps | ProjectProps | MilesProps) => name
      ),
    },
    rightColumns: isRoadies
      ? [
          {
            title: 'Distance',
            entries: sportData.roadies[2023].map(({ distance }: RoadieProps) =>
              toMiles(distance)
            ),
          },
          {
            title: 'Elevation',
            entries: sportData.roadies[2023].map(({ elevation }: RoadieProps) =>
              toFeet(elevation)
            ),
          },
          {
            title: 'Time',
            entries: sportData.roadies[2023].map(
              ({ time }: RoadieProps) => time
            ),
          },
          {
            title: 'Speed',
            entries: sportData.roadies[2023].map(({ speed }: RoadieProps) =>
              // TODO: once all speeds filled in, remove this logic
              speed ? toSpeed(speed, false) : <>&nbsp;</>
            ),
          },
        ]
      : isProjects
        ? [
            {
              title: 'Distance',
              entries: sportData.projects[2023].map(
                ({ distance }: ProjectProps) => toMiles(distance)
              ),
            },
            {
              title: 'Elevation',
              entries: sportData.projects[2023].map(
                ({ elevation }: ProjectProps) => toFeet(elevation)
              ),
            },
            {
              title: 'Time',
              entries: sportData.projects[2023].map(
                ({ time }: ProjectProps) => time
              ),
            },
          ]
        : [
            {
              title: 'Distance',
              entries: sportData.miles[2023].map(({ distance }: MilesProps) =>
                toMiles(distance)
              ),
            },
            {
              title: 'Elevation',
              entries: sportData.miles[2023].map(({ elevation }: MilesProps) =>
                toFeet(elevation)
              ),
            },
            {
              title: 'Time',
              entries: sportData.miles[2023].map(
                ({ time }: MilesProps) => time
              ),
            },
          ],
  };

  const activities2022: ColumnTableProps = {
    leftColumn: {
      entries: sportData.roadies[2022].map(
        ({ name }: RoadieProps | ProjectProps | MilesProps) => name
      ),
    },
    rightColumns: isRoadies
      ? [
          {
            title: 'Distance',
            entries: sportData.roadies[2022].map(({ distance }: RoadieProps) =>
              toMiles(distance)
            ),
          },
          {
            title: 'Elevation',
            entries: sportData.roadies[2022].map(({ elevation }: RoadieProps) =>
              toFeet(elevation)
            ),
          },
          {
            title: 'Time',
            entries: sportData.roadies[2022].map(
              ({ time }: RoadieProps) => time
            ),
          },
          {
            title: 'Speed',
            entries: sportData.roadies[2022].map(({ speed }: RoadieProps) =>
              // TODO: once all speeds filled in, remove this logic
              speed ? toSpeed(speed, false) : <>&nbsp;</>
            ),
          },
        ]
      : isProjects
        ? [
            {
              title: 'Distance',
              entries: sportData.projects[2022].map(
                ({ distance }: ProjectProps) => toMiles(distance)
              ),
            },
            {
              title: 'Elevation',
              entries: sportData.projects[2022].map(
                ({ elevation }: ProjectProps) => toFeet(elevation)
              ),
            },
            {
              title: 'Time',
              entries: sportData.projects[2022].map(
                ({ time }: ProjectProps) => time
              ),
            },
          ]
        : [
            {
              title: 'Distance',
              entries: sportData.miles[2022].map(({ distance }: MilesProps) =>
                toMiles(distance)
              ),
            },
            {
              title: 'Elevation',
              entries: sportData.miles[2022].map(({ elevation }: MilesProps) =>
                toFeet(elevation)
              ),
            },
            {
              title: 'Time',
              entries: sportData.miles[2022].map(
                ({ time }: MilesProps) => time
              ),
            },
          ],
  };

  const activities2021: ColumnTableProps = {
    leftColumn: {
      entries: sportData.roadies[2021].map(
        ({ name }: RoadieProps | ProjectProps | MilesProps) => name
      ),
    },
    rightColumns: isRoadies
      ? [
          {
            title: 'Distance',
            entries: sportData.roadies[2021].map(({ distance }: RoadieProps) =>
              toMiles(distance)
            ),
          },
          {
            title: 'Elevation',
            entries: sportData.roadies[2021].map(({ elevation }: RoadieProps) =>
              toFeet(elevation)
            ),
          },
          {
            title: 'Time',
            entries: sportData.roadies[2021].map(
              ({ time }: RoadieProps) => time
            ),
          },
          {
            title: 'Speed',
            entries: sportData.roadies[2021].map(({ speed }: RoadieProps) =>
              // TODO: once all speeds filled in, remove this logic
              speed ? toSpeed(speed, false) : <>&nbsp;</>
            ),
          },
        ]
      : isProjects
        ? [
            {
              title: 'Distance',
              entries: sportData.projects[2021].map(
                ({ distance }: ProjectProps) => toMiles(distance)
              ),
            },
            {
              title: 'Elevation',
              entries: sportData.projects[2021].map(
                ({ elevation }: ProjectProps) => toFeet(elevation)
              ),
            },
            {
              title: 'Time',
              entries: sportData.projects[2021].map(
                ({ time }: ProjectProps) => time
              ),
            },
          ]
        : [
            {
              title: 'Distance',
              entries: sportData.miles[2021].map(({ distance }: MilesProps) =>
                toMiles(distance)
              ),
            },
            {
              title: 'Elevation',
              entries: sportData.miles[2021].map(({ elevation }: MilesProps) =>
                toFeet(elevation)
              ),
            },
            {
              title: 'Time',
              entries: sportData.miles[2021].map(
                ({ time }: MilesProps) => time
              ),
            },
          ],
  };

  const activities2020: ColumnTableProps = {
    leftColumn: {
      entries: sportData.roadies[2020].map(
        ({ name }: RoadieProps | ProjectProps | MilesProps) => name
      ),
    },
    rightColumns: isRoadies
      ? [
          {
            title: 'Distance',
            entries: sportData.roadies[2020].map(({ distance }: RoadieProps) =>
              toMiles(distance)
            ),
          },
          {
            title: 'Elevation',
            entries: sportData.roadies[2020].map(({ elevation }: RoadieProps) =>
              toFeet(elevation)
            ),
          },
          {
            title: 'Time',
            entries: sportData.roadies[2020].map(
              ({ time }: RoadieProps) => time
            ),
          },
          {
            title: 'Speed',
            entries: sportData.roadies[2020].map(({ speed }: RoadieProps) =>
              // TODO: once all speeds filled in, remove this logic
              speed ? toSpeed(speed, false) : <>&nbsp;</>
            ),
          },
        ]
      : isProjects
        ? [
            {
              title: 'Distance',
              entries: sportData.projects[2020].map(
                ({ distance }: ProjectProps) => toMiles(distance)
              ),
            },
            {
              title: 'Elevation',
              entries: sportData.projects[2020].map(
                ({ elevation }: ProjectProps) => toFeet(elevation)
              ),
            },
            {
              title: 'Time',
              entries: sportData.projects[2020].map(
                ({ time }: ProjectProps) => time
              ),
            },
          ]
        : [
            {
              title: 'Distance',
              entries: sportData.miles[2020].map(({ distance }: MilesProps) =>
                toMiles(distance)
              ),
            },
            {
              title: 'Elevation',
              entries: sportData.miles[2020].map(({ elevation }: MilesProps) =>
                toFeet(elevation)
              ),
            },
            {
              title: 'Time',
              entries: sportData.miles[2020].map(
                ({ time }: MilesProps) => time
              ),
            },
          ],
  };

  const handleCategory = (e: any) => {
    if (e.currentTarget.value === 'roadies') {
      setSportData(compiledRoadies);
      setIsRoadies(true);
      setIsProjects(false);
      setIsMiles(false);
    } else if (e.currentTarget.value === 'projects') {
      setSportData(compiledProjects);
      setIsRoadies(false);
      setIsProjects(true);
      setIsMiles(false);
    } else if (e.currentTarget.value === 'miles') {
      setSportData(compiledMiles);
      setIsRoadies(false);
      setIsProjects(false);
      setIsMiles(true);
    } else if (e.currentTarget.value === 'tennis') {
    } else {
      setSportData(compiledRoadies);
      setIsRoadies(true);
      setIsProjects(false);
      setIsMiles(false);
    }
  };

  return {
    handleCategory,
    title,
    subTitle,
    description,
    summary,
    routes,
    activities2024,
    activities2023,
    activities2022,
    activities2021,
    activities2020,
    isRoadies,
    isProjects,
    isMiles,
  };
};
