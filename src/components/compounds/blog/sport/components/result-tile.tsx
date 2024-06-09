import {
  Typography,
  Tile,
  ColumnTable,
  Button,
  Stack,
  ColumnTableProps,
} from '../../../../bash-blocks';
import {
  CompiledMilesProps,
  CompiledProjectProps,
  CompiledRoadieProps,
  useShowElement,
} from '../../../../../utils';
import { FC, useState } from 'react';

export type ResultTileProps = {
  title: string;
  subTitle: string;
  description: string;
  summary: ColumnTableProps;
  routes: ColumnTableProps;
  activities2024: ColumnTableProps;
  activities2023: ColumnTableProps;
  activities2022: ColumnTableProps;
  activities2021: ColumnTableProps;
  activities2020: ColumnTableProps;
};

export const ResultTile: FC<ResultTileProps> = ({
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
}) => {
  const [activities, setActivities] = useState(activities2024);

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
          leftColumn={summary.leftColumn}
          rightColumns={summary.rightColumns}
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
              Boolean(activities === activities2024) ? 'lightBlue' : undefined
            }
            typeFontFamily="sport"
            content="2024"
            func={() => setActivities(activities2024)}
          />

          <Button
            variant="clear"
            typeVariant="h2"
            typeColor={
              Boolean(activities === activities2023) ? 'lightBlue' : undefined
            }
            typeFontFamily="sport"
            content="2023"
            func={() => setActivities(activities2023)}
          />

          <Button
            variant="clear"
            typeVariant="h2"
            typeColor={
              Boolean(activities === activities2022) ? 'lightBlue' : undefined
            }
            typeFontFamily="sport"
            content="2022"
            func={() => setActivities(activities2022)}
          />

          <Button
            variant="clear"
            typeVariant="h2"
            typeColor={
              Boolean(activities === activities2021) ? 'lightBlue' : undefined
            }
            typeFontFamily="sport"
            content="2021"
            func={() => setActivities(activities2021)}
          />

          <Button
            variant="clear"
            typeVariant="h2"
            typeColor={
              Boolean(activities === activities2020) ? 'lightBlue' : undefined
            }
            typeFontFamily="sport"
            content="2020"
            func={() => setActivities(activities2020)}
          />
        </Stack>

        <ColumnTable
          leftColumn={activities.leftColumn}
          rightColumns={activities.rightColumns}
        />
      </Stack>
    </Tile>
  );
};
