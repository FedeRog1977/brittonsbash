import { FC } from 'react';
import {
  generateUniqueKey,
  getGridAlign,
  useScreenWidth,
} from '../../../../utils';
import { Grid, Spacing, Typography } from '../../basics';
import styles from './table.module.scss';
import { Column } from './types/column';

export type ColumnTableProps = {
  leftColumn: Column;
  rightColumns: Column[];
};

export const ColumnTable: FC<ColumnTableProps> = ({
  leftColumn,
  rightColumns,
}) => {
  const { isMobile } = useScreenWidth();
  const columnWidths = getGridAlign(rightColumns, '5fr');
  const columnCount = rightColumns.length + 1;

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <Grid alignColumns={columnWidths} columnGap={10}>
          <Grid columnItem={[1, columnCount]}>
            {leftColumn.title != null ? (
              <Typography variant="footnote" boldFace>
                {leftColumn.title}
              </Typography>
            ) : (
              <Typography variant="footnote">
                <>&nbsp;</>
              </Typography>
            )}
            {leftColumn.entries?.map((entry, index) => (
              <Spacing mT={isMobile ? 3.75 : 7.5}>
                <Typography
                  key={generateUniqueKey(index)}
                  variant="footnote"
                  boldFace
                >
                  {entry}
                </Typography>
              </Spacing>
            ))}
          </Grid>
          {rightColumns.map(({ title, entries }, index) => (
            <Grid columnItem={[index + 2, columnCount]} textAlign="right">
              <Typography variant="footnote" boldFace>
                {title}
              </Typography>
              {entries?.map((entry, index) => (
                <Spacing mT={isMobile ? 3.75 : 7.5}>
                  <Typography key={generateUniqueKey(index)} variant="footnote">
                    {entry}
                  </Typography>
                </Spacing>
              ))}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
