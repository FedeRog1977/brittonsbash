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
  stacked?: boolean;
};

const defaultSpacing: SpacingConfig = { xs: 'sm', lg: 'md' };

export const GridTemp: FC<GridProps> = ({
  children,
  spacing = defaultSpacing,
  alignHorizontal = 'left',
  alignVertical = 'top',
  stacked,
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
    ...getResponsiveAlignmentClassNames(
      'align',
      'items',
      styles,
      alignVertical
    ),
    { [styles.stacked]: stacked }
  );

  return (
    <div data-testid="grid" className={classNames}>
      {children}
    </div>
  );
};
