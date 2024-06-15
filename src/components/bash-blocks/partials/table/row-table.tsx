import { FC } from 'react';
import { generateUniqueKey } from '../../../../utils';
import { Stack, Typography } from '../../basics';
import styles from './table.module.scss';
import { Row } from './types/row';

export type RowTableProps = {
  titleRow: Row;
  rows: Row[];
};

export const RowTable: FC<RowTableProps> = ({ titleRow, rows }) => (
  <div className={styles.container}>
    <div className={styles.table}>
      <Stack direction="vertical" spacing="xs">
        <Stack direction="horizontal" alignHorizontal="apart">
          {titleRow.leftItem != null ? (
            <Typography variant="footnote" boldFace>
              {titleRow.leftItem}
            </Typography>
          ) : (
            <Typography variant="footnote">
              <>&nbsp;</>
            </Typography>
          )}

          <Typography variant="footnote" boldFace>
            {titleRow.rightItem}
          </Typography>
        </Stack>

        <Stack direction="vertical" spacing="xs">
          {rows?.map(({ leftItem, rightItem }, index) => {
            if (leftItem && rightItem) {
              return (
                <Stack
                  key={generateUniqueKey(index)}
                  direction="horizontal"
                  alignHorizontal="apart"
                >
                  <Typography variant="footnote" boldFace>
                    {leftItem}
                  </Typography>

                  <Typography variant="footnote">{rightItem}</Typography>
                </Stack>
              );
            }

            return null;
          })}
        </Stack>
      </Stack>
    </div>
  </div>
);
