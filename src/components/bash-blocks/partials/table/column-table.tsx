import { FC } from 'react';
import {
  generateUniqueKey,
  getGridAlign,
  useScreenWidth,
} from '../../../../utils';
import { Grid, Spacing, Stack, Typography } from '../../basics';
import styles from './table.module.scss';
import { Column } from './types/column';

export type ColumnTableProps = {
  leftColumn: Column;
  rightColumns: Column[];
};

export const ColumnTable: FC<ColumnTableProps> = ({
  leftColumn,
  rightColumns,
}) => (
  <div className={styles.container}>
    <div className={styles.table}>
      <Stack direction="horizontal" alignHorizontal="apart">
        <Stack direction="vertical" spacing="xs">
          <Typography variant="footnote" boldFace>
            {leftColumn.title != null ? leftColumn.title : <>&nbsp;</>}
          </Typography>

          {leftColumn.entries?.map((entry, index) => (
            <Typography
              key={generateUniqueKey(index)}
              variant="footnote"
              boldFace
            >
              {entry}
            </Typography>
          ))}
        </Stack>

        <Stack direction="horizontal" spacing="lg">
          {rightColumns.map(({ title, entries }, index) => (
            <Stack
              key={generateUniqueKey(index)}
              direction="vertical"
              alignHorizontal="right"
              spacing="xs"
            >
              <Typography variant="footnote" boldFace>
                {title}
              </Typography>

              {entries?.map((entry, index) => (
                <Typography key={generateUniqueKey(index)} variant="footnote">
                  {entry}
                </Typography>
              ))}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </div>
  </div>
);
