import cx from 'classnames';
import { FC } from 'react';
import { Horizontal } from './types/horizontal.js';
import { Vertical } from './types/vertical.js';
import styles from './flex.module.scss';
import { toUpperCase } from '../../../../utils/index.js';
import { getResponsiveSpacingClassNames } from '../../reference/index.js';

type FlexProps = Horizontal | Vertical;

export const Flex: FC<FlexProps> = ({
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
