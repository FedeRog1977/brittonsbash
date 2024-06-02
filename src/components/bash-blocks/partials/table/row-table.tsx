import { FC } from 'react';
import { generateUniqueKey, useScreenWidth } from '../../../../utils';
import { Grid, Spacing, Typography } from '../../basics';
import styles from './table.module.scss';
import { Row } from './types/row';

export type RowTableProps = {
  titleRow: Row;
  rows: Row[];
};

export const RowTable: FC<RowTableProps> = ({ titleRow, rows }) => {
  const { isMobile } = useScreenWidth();

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <Grid alignColumns="auto auto">
          <Grid columnItem={[1, 2]} rowItem={[1, rows.length + 1]}>
            <div
              style={{
                width: 'fit-content',
                marginRight: '1rem',
                display: 'inline-block',
              }}
            >
              {titleRow.leftItem != null ? (
                <Typography variant="footnote" boldFace>
                  {titleRow.leftItem}
                </Typography>
              ) : (
                <Typography variant="footnote">
                  <>&nbsp;</>
                </Typography>
              )}
            </div>
          </Grid>
          <Grid
            columnItem={[2, 2]}
            rowItem={[1, rows.length + 1]}
            textAlign="right"
          >
            <div
              style={{
                width: 'fit-content',
                maxWidth: isMobile ? '250px' : '500px',
                marginLeft: '1rem',
                display: 'inline-block',
              }}
            >
              <Typography variant="footnote" boldFace>
                {titleRow.rightItem}
              </Typography>
            </div>
          </Grid>
          <>
            {rows?.map(({ leftItem, rightItem }, index) => {
              if (Boolean(leftItem && rightItem)) {
                return (
                  <>
                    <Grid
                      key={generateUniqueKey(index)}
                      columnItem={[1, 2]}
                      rowItem={[index + 2, rows.length + 1]}
                    >
                      <div
                        style={{
                          width: 'fit-content',
                          marginRight: '1rem',
                          display: 'inline-block',
                        }}
                      >
                        <Spacing mT={isMobile ? 3.75 : 7.5}>
                          <Typography variant="footnote" boldFace>
                            {leftItem}
                          </Typography>
                        </Spacing>
                      </div>
                    </Grid>
                    <Grid
                      columnItem={[2, 2]}
                      rowItem={[index + 2, rows.length + 1]}
                      textAlign="right"
                    >
                      <div
                        style={{
                          width: 'fit-content',
                          maxWidth: isMobile ? '250px' : '500px',
                          marginLeft: '1rem',
                          display: 'inline-block',
                        }}
                      >
                        <Spacing mT={isMobile ? 3.75 : 7.5}>
                          <Typography variant="footnote">
                            {rightItem}
                          </Typography>
                        </Spacing>
                      </div>
                    </Grid>
                  </>
                );
              }

              return null;
            })}
          </>
        </Grid>
      </div>
    </div>
  );
};
