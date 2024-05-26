import { FC, ReactElement } from 'react';
import { generateUniqueKey, useScreenWidth } from '../../../../scripts';
import { Grid, Spacing, Typography } from '../../basics';
import styles from './table.module.scss';
import { Column } from './types/column.type';

export type ColumnTableProps = {
    leftColumn: Column;
    rightColumns: Column[];
    scroll?: boolean;
};

export const ColumnTable: FC<ColumnTableProps> = ({
    leftColumn,
    rightColumns,
    scroll,
}) => {
    const { isMobile } = useScreenWidth();

    const content: ReactElement = (
        <div className={styles.table}>
            <Grid alignColumns="1fr 3fr">
                <Grid columnItem={[1, 2]}>
                    {leftColumn.title != null ? (
                        <Typography variant="footnote" boldFace inline>
                            {leftColumn.title}
                        </Typography>
                    ) : (
                        <Typography variant="footnote">
                            <>&nbsp;</>
                        </Typography>
                    )}
                    {leftColumn.entries?.map((entry, index) => (
                        <>
                            {entry ? (
                                <Spacing mT={isMobile ? 3.75 : 7.5}>
                                    <Typography
                                        key={generateUniqueKey(index)}
                                        variant="footnote"
                                        boldFace
                                    >
                                        {entry}
                                    </Typography>
                                </Spacing>
                            ) : null}
                        </>
                    ))}
                </Grid>
                <Grid columnItem={[2, 2]} textAlign="right">
                    {rightColumns.map(({ title, entries }, index) => (
                        <div
                            style={{
                                // Fix this
                                width: 'fit-content',
                                display: 'inline-block',
                                marginLeft: '15px',
                            }}
                        >
                            <Typography variant="footnote" boldFace inline>
                                {title}
                            </Typography>
                            {entries?.map((entry, index) => (
                                <>
                                    {entry ? (
                                        <Spacing mT={isMobile ? 3.75 : 7.5}>
                                            <Typography
                                                key={generateUniqueKey(index)}
                                                variant="footnote"
                                            >
                                                {entry}
                                            </Typography>
                                        </Spacing>
                                    ) : null}
                                </>
                            ))}
                        </div>
                    ))}
                </Grid>
            </Grid>
        </div>
    );

    if (scroll)
        return (
            <div className={styles.container}>
                <div
                    // Fix this
                    style={{ overflowY: 'scroll', maxHeight: '300px' }}
                    className={styles.scrollY}
                >
                    {content}
                </div>
            </div>
        );

    return <div className={styles.container}>{content}</div>;
};
