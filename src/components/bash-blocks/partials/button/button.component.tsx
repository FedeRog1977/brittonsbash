import styles from './button.module.scss';
import cx from 'classnames';
import { toUpperCase } from '../../../../scripts';
import { Grid, Typography, TypographyProps } from '../../basics';
import { FC, ReactElement } from 'react';
import { getGridArgs } from './hooks/get-grid-args';

export type ButtonProps = {
    variant?: 'default' | 'clear' | 'solid' | 'inverse';
    typeVariant?: TypographyProps['variant'];
    typeColor?: TypographyProps['color'];
    content: string | ReactElement;
    subContent?: string | ReactElement;
    subContentTop?: boolean;
    icon?: ReactElement;
    value?: string;
    func?: (() => void) | ((e: any) => void);
    space?: boolean;
    width?: 'default' | 'quarter' | 'half' | 'full';
    padding?: 'default' | 'coarse';
    transition?: boolean;
};

export const Button: FC<ButtonProps> = ({
    variant = 'default',
    typeVariant = 'body',
    typeColor = 'white',
    content,
    subContent,
    subContentTop,
    icon,
    value,
    func,
    space,
    width = 'default',
    padding = 'default',
    transition,
}) => {
    const classNames = cx(
        styles.button,
        styles[`variant${toUpperCase(variant)}`],
        styles[`width${toUpperCase(width)}`],
        styles[`padding${toUpperCase(padding)}`],
        {
            [styles.transition]: transition,
        }
    );

    const {
        gridArgs,
        gridItemSubContentArgs,
        gridItemContentArgs,
        gridItemIconArgs,
    } = getGridArgs(
        Boolean(subContent),
        Boolean(subContentTop),
        Boolean(space)
    );

    return (
        <button className={classNames} onClick={func} value={value}>
            <Grid
                alignColumns={gridArgs.alignColumns}
                alignRows={gridArgs.alignRows}
                justifyContent={gridArgs.justifyContent}
                alignItems={gridArgs.alignItems}
            >
                {subContent ? (
                    <Grid
                        columnItem={gridItemSubContentArgs.columnItem}
                        rowItem={gridItemSubContentArgs.rowItem}
                        textAlign={gridItemSubContentArgs.textAlign}
                    >
                        <Typography variant="body" color="lightGrey">
                            {subContent}
                            {subContentTop ? null : <>&nbsp;</>}
                        </Typography>
                    </Grid>
                ) : null}
                <Grid
                    columnItem={gridItemContentArgs.columnItem}
                    rowItem={gridItemContentArgs.rowItem}
                    textAlign={gridItemContentArgs.textAlign}
                >
                    <Typography variant={typeVariant} color={typeColor}>
                        {content}
                    </Typography>
                </Grid>
                {icon ? (
                    <Grid
                        columnItem={gridItemIconArgs.columnItem}
                        rowItem={gridItemIconArgs.rowItem}
                        textAlign={gridItemIconArgs.textAlign}
                    >
                        <Typography variant="footnote" color={typeColor}>
                            {space ? null : <>&nbsp;</>}
                            {icon}
                        </Typography>
                    </Grid>
                ) : null}
            </Grid>
        </button>
    );
};
