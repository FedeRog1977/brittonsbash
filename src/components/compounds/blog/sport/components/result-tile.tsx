import {
  Typography,
  Tile,
  ColumnTable,
  Spacing,
  Button,
  Grid,
  Stack,
  ColumnTableProps,
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

export type ResultTileProps = {
  title: string;
  subTitle: string;
  description: string;
  routes: ColumnTableProps;
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
  const [sportYearData, setSportYearData] = useState(sport2024);

  const { showElement: showMunros, setShowElement: setShowMunros } =
    useShowElement();

  return (
    <Tile type="solid">
      <Stack direction="vertical" spacing="md">
        <Typography variant="t1" fontFamily="sport" textAlign="center">
          {title}
        </Typography>

        <Typography variant="h4" color="mediumGrey" textAlign="center">
          {subTitle}
        </Typography>

        <Typography variant="body" textAlign="left">
          {description}
        </Typography>

        <Typography variant="h2" fontFamily="sport">
          Summary
        </Typography>

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

        <Typography variant="h2" fontFamily="sport">
          Routes
        </Typography>

        <ColumnTable
          leftColumn={routes.leftColumn}
          rightColumns={routes.rightColumns}
        />

        <Stack direction="horizontal" alignHorizontal="apart">
          <Button
            variant="clear"
            typeVariant="h2"
            typeColor={
              Boolean(sportYearData === sport2024) ? 'lightBlue' : undefined
            }
            content="2024"
            func={() => setSportYearData(sport2024)}
          />

          <Button
            variant="clear"
            typeVariant="h2"
            typeColor={
              Boolean(sportYearData === sport2023) ? 'lightBlue' : undefined
            }
            content="2023"
            func={() => setSportYearData(sport2023)}
          />

          <Button
            variant="clear"
            typeVariant="h2"
            typeColor={
              Boolean(sportYearData === sport2022) ? 'lightBlue' : undefined
            }
            content="2022"
            func={() => setSportYearData(sport2022)}
          />

          <Button
            variant="clear"
            typeVariant="h2"
            typeColor={
              Boolean(sportYearData === sport2021) ? 'lightBlue' : undefined
            }
            content="2021"
            func={() => setSportYearData(sport2021)}
          />

          <Button
            variant="clear"
            typeVariant="h2"
            typeColor={
              Boolean(sportYearData === sport2020) ? 'lightBlue' : undefined
            }
            content="2020"
            func={() => setSportYearData(sport2020)}
          />
        </Stack>

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
      </Stack>
    </Tile>
  );
};
