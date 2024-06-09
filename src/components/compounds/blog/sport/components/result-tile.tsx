import {
  Typography,
  Tile,
  ColumnTable,
  Button,
  Stack,
  ColumnTableProps,
} from '../../../../bash-blocks';
import { FC, useState } from 'react';

export type ResultTileProps = {
  funcActivities: (e: any) => void;
  title: string;
  subTitle: string;
  description: string;
  summary: ColumnTableProps;
  routes: ColumnTableProps;
  activities: ColumnTableProps;
  is2024: boolean;
  is2023: boolean;
  is2022: boolean;
  is2021: boolean;
  is2020: boolean;
};

export const ResultTile: FC<ResultTileProps> = ({
  funcActivities,
  title,
  subTitle,
  description,
  summary,
  routes,
  activities,
  is2024,
  is2023,
  is2022,
  is2021,
  is2020,
}) => (
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

      <Stack direction="horizontal" alignHorizontal="apart" wrap>
        <Button
          variant="clear"
          typeVariant="h2"
          typeColor={is2024 ? 'lightBlue' : undefined}
          typeFontFamily="sport"
          value="2024"
          func={funcActivities}
          content="2024"
        />

        <Button
          variant="clear"
          typeVariant="h2"
          typeColor={is2023 ? 'lightBlue' : undefined}
          typeFontFamily="sport"
          value="2023"
          func={funcActivities}
          content="2023"
        />

        <Button
          variant="clear"
          typeVariant="h2"
          typeColor={is2022 ? 'lightBlue' : undefined}
          typeFontFamily="sport"
          value="2022"
          func={funcActivities}
          content="2022"
        />

        <Button
          variant="clear"
          typeVariant="h2"
          typeColor={is2021 ? 'lightBlue' : undefined}
          typeFontFamily="sport"
          value="2021"
          func={funcActivities}
          content="2021"
        />

        <Button
          variant="clear"
          typeVariant="h2"
          typeColor={is2020 ? 'lightBlue' : undefined}
          typeFontFamily="sport"
          value="2020"
          func={funcActivities}
          content="2020"
        />
      </Stack>

      <ColumnTable
        leftColumn={activities.leftColumn}
        rightColumns={activities.rightColumns}
      />
    </Stack>
  </Tile>
);
