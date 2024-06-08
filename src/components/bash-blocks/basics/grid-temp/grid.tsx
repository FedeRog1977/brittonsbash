import cx from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './grid.module.scss';
import {
  SpacingConfig,
  getResponsiveAlignmentClassNames,
  getResponsiveSpacingClassNames,
} from '../../reference';
import { JustifyConfig } from '../../reference/types/justify-config.js';
import { AlignConfig } from '../../reference/types/align-config.js';

export type GridProps = {
  children: ReactNode;
  spacing?: SpacingConfig;
  alignHorizontal?: JustifyConfig;
  alignVertical?: AlignConfig;
};

const defaultSpacing: SpacingConfig = { xs: 'sm' };

// TODO: export from index.ts once old Grid is discontinued
export const GridTemp: FC<GridProps> = ({
  children,
  spacing = defaultSpacing,
  alignHorizontal = 'left',
  alignVertical = 'top',
}) => {
  const classNames = cx(
    styles.grid,
    ...getResponsiveSpacingClassNames('spacing', styles, spacing),
    ...getResponsiveAlignmentClassNames(
      'justify',
      'content',
      styles,
      alignHorizontal
    ),
    ...getResponsiveAlignmentClassNames('align', 'items', styles, alignVertical)
  );

  return <div className={classNames}>{children}</div>;
};
