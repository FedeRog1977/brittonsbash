import cx from 'classnames';
import { FC } from 'react';
import styles from './flex-base.module.scss';
import { Horizontal } from './types/horizontal.js';
import { Vertical } from './types/vertical.js';
import { toUpperCase } from '../../../../../utils';
import { getResponsiveSpacingClassNames } from '../../utils';

type FlexBase = Horizontal | Vertical;
export type FlexBaseProps = FlexBase & { wrap?: boolean };

// TODO: maybe move to new reference/components
export const FlexBase: FC<FlexBaseProps> = ({
  children,
  direction,
  gap,
  rowGap,
  columnGap,
  alignHorizontal = direction === 'horizontal' ? 'left' : 'stretch',
  alignVertical = direction === 'vertical' ? 'top' : 'stretch',
  fullHeight = false,
  wrap = false,
}) => {
  const classNames = cx(
    styles.flex,
    styles[`direction${toUpperCase(direction)}`],
    styles[`alignHorizontal${toUpperCase(alignHorizontal)}`],
    styles[`alignVertical${toUpperCase(alignVertical)}`],
    ...getResponsiveSpacingClassNames('gap', styles, gap),
    ...getResponsiveSpacingClassNames('rowGap', styles, rowGap),
    ...getResponsiveSpacingClassNames('columnGap', styles, columnGap),
    {
      [styles.fullHeight]: fullHeight,
      [styles.wrap]: wrap,
    }
  );

  return <div className={classNames}>{children}</div>;
};
