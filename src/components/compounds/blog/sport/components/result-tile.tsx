import {
  Typography,
  Tile,
  ColumnTable,
  Spacing,
  Button,
  Grid,
} from '../../../../bash-blocks';
import {
  toMiles,
  toFeet,
  toSpeed,
  useScreenWidth,
  RoadieProps,
  ProjectProps,
  MilesProps,
  formatCoordinates,
  useShowElement,
  CompiledMilesProps,
  CompiledProjectProps,
  CompiledRoadieProps,
} from '../../../../../utils';
import { FC, useState } from 'react';
import { Column } from '../../../../bash-blocks/partials/table/types/column.type';

export type ResultTileProps = {
  title: string;
  subTitle: string;
  description: string;
  routes: Column[];
  isRoadies: boolean;
  isProjects: boolean;
  isMiles: boolean;
  sportData: CompiledRoadieProps | CompiledProjectProps | CompiledMilesProps;
  sport2024: RoadieProps[] | ProjectProps[] | MilesProps[];
  sport2023: RoadieProps[] | ProjectProps[] | MilesProps[];
  sport2022: RoadieProps[] | ProjectProps[] | MilesProps[];
  sport2021: RoadieProps[] | ProjectProps[] | MilesProps[];
  sport2020: RoadieProps[] | ProjectProps[] | MilesProps[];
};

export const ResultTile: FC<ResultTileProps> = ({
  title,
  subTitle,
  description,
  routes,
  isRoadies,
  isProjects,
  isMiles,
  sportData,
  sport2024,
  sport2023,
  sport2022,
  sport2021,
  sport2020,
}) => {
  const { isMobile } = useScreenWidth();
  const [sportYearData, setSportYearData] = useState(sport2024);

  const { showElement: showMunros, setShowElement: setShowMunros } =
    useShowElement();

  return (
    <Tile type="solid">
      <Spacing mB={15}>
        <Typography variant="t1" fontFamily="sport" textAlign="center">
          {title}
        </Typography>
      </Spacing>
      <Spacing mT={15} mB={15}>
        <Typography variant="h4" color="mediumGrey" textAlign="center">
          {subTitle}
        </Typography>
      </Spacing>
      <Spacing mT={15} mB={15}>
        <Typography variant="body" textAlign="left">
          {description}
        </Typography>
      </Spacing>
      <Spacing mT={15} mB={15}>
        <Typography variant="h2" fontFamily="sport" textAlign="left">
          Summary
        </Typography>
      </Spacing>
      <Spacing mX={isMobile ? -20 : 0} mT={15} mB={15}>
        <ColumnTable
          leftColumn={{
            entries: ['Total', '2024', '2023', '2022', '2021', '2020'],
          }}
          rightColumns={[
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
          ]}
        />
      </Spacing>
      <Spacing mT={15} mB={15}>
        <Typography variant="h2" fontFamily="sport" textAlign="left">
          {isProjects ? 'Hills' : 'Routes'}
        </Typography>
      </Spacing>
      <Spacing mX={isMobile ? -20 : 0} mT={15} mB={15}>
        <ColumnTable
          leftColumn={{
            entries: [
              isProjects ? 'Unique' : '',
              'Total',
              '2024',
              '2023',
              '2022',
              '2021',
              '2020',
            ],
          }}
          rightColumns={routes}
        />
      </Spacing>
      <Spacing mT={15} mB={15}>
        <Grid
          alignColumns={isMobile ? '1fr 1fr 1fr' : '1fr 1fr 1fr 1fr 1fr'}
          justifyItems="center"
        >
          <Grid
            columnItem={[1, isMobile ? 3 : 5]}
            rowItem={isMobile ? [1, 2] : undefined}
          >
            <Button
              variant="clear"
              typeVariant="h2"
              typeColor={
                Boolean(sportYearData === sport2024) ? 'lightBlue' : undefined
              }
              content="2024"
              func={() => setSportYearData(sport2024)}
            />
          </Grid>
          <Grid
            columnItem={[2, isMobile ? 3 : 5]}
            rowItem={isMobile ? [1, 2] : undefined}
          >
            <Button
              variant="clear"
              typeVariant="h2"
              typeColor={
                Boolean(sportYearData === sport2023) ? 'lightBlue' : undefined
              }
              content="2023"
              func={() => setSportYearData(sport2023)}
            />
          </Grid>
          <Grid
            columnItem={[3, isMobile ? 3 : 5]}
            rowItem={isMobile ? [1, 2] : undefined}
          >
            <Button
              variant="clear"
              typeVariant="h2"
              typeColor={
                Boolean(sportYearData === sport2022) ? 'lightBlue' : undefined
              }
              content="2022"
              func={() => setSportYearData(sport2022)}
            />
          </Grid>
          <Grid
            columnItem={[isMobile ? 1 : 4, isMobile ? 3 : 5]}
            rowItem={isMobile ? [2, 2] : undefined}
          >
            <Button
              variant="clear"
              typeVariant="h2"
              typeColor={
                Boolean(sportYearData === sport2021) ? 'lightBlue' : undefined
              }
              content="2021"
              func={() => setSportYearData(sport2021)}
            />
          </Grid>
          <Grid
            columnItem={[isMobile ? 2 : 5, isMobile ? 3 : 5]}
            rowItem={isMobile ? [2, 2] : undefined}
          >
            <Button
              variant="clear"
              typeVariant="h2"
              typeColor={
                Boolean(sportYearData === sport2020) ? 'lightBlue' : undefined
              }
              content="2020"
              func={() => setSportYearData(sport2020)}
            />
          </Grid>
        </Grid>
      </Spacing>
      <Spacing mX={isMobile ? -20 : 0} mT={15} mB={15}>
        <ColumnTable
          leftColumn={{
            entries: sportYearData.map(
              ({ name }: RoadieProps | ProjectProps | MilesProps) => (
                <a
                  href="#"
                  onClick={() => {
                    setShowMunros(!showMunros);
                  }}
                >
                  {name}
                </a>
              )
            ),
          }}
          rightColumns={[
            {
              title: 'Distance',
              entries: sportYearData.map(
                ({ distance }: RoadieProps | ProjectProps | MilesProps) =>
                  toMiles(distance)
              ),
            },
            {
              title: 'Elevation',
              entries: sportYearData.map(
                ({ elevation }: RoadieProps | ProjectProps | MilesProps) =>
                  toFeet(elevation)
              ),
            },
            {
              title: 'Time',
              entries: sportYearData.map(
                ({ time }: RoadieProps | ProjectProps | MilesProps) => time
              ),
            },
            ...(isRoadies
              ? [
                  {
                    title: 'Speed',
                    entries: sportYearData.map(({ speed }: RoadieProps) =>
                      speed ? toSpeed(speed, false) : <>&nbsp;</>
                    ),
                  },
                ]
              : []),
          ]}
        />
      </Spacing>
    </Tile>
  );
};
