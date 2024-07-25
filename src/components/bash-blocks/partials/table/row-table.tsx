import { FC } from 'react';
import { generateUniqueKey } from '../../../../utils';
import { Flex, Typography } from '../../basics';
import styles from './table.module.scss';
import { Row } from './types/row';

export type RowTableProps = {
  titleRow: Row;
  rows: Row[];
};

// TODO: segment these into the text content, and the styled table
export const RowTable: FC<RowTableProps> = ({ titleRow, rows }) => (
  <div className={styles.container}>
    <div className={styles.table}>
      <Flex direction="vertical" gap="xs">
        <Flex direction="horizontal" alignHorizontal="apart">
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
        </Flex>

        <Flex direction="vertical" gap="xs">
          {rows?.map(({ leftItem, rightItem }, index) => {
            if (leftItem && rightItem) {
              return (
                <Flex
                  key={generateUniqueKey(index)}
                  direction="horizontal"
                  alignHorizontal="apart"
                >
                  <Typography variant="footnote" boldFace>
                    {leftItem}
                  </Typography>

                  <Typography variant="footnote">{rightItem}</Typography>
                </Flex>
              );
            }

            return null;
          })}
        </Flex>
      </Flex>
    </div>
  </div>
);
