import cx from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './grid-item.module.scss';
import { ColumnSpan, getResponsiveColumnSpanClassNames } from '../../reference';
import { Order } from './types/order';
import { getOrderClassNames } from './utils/get-order-classnames';
import { getPositionClassName } from './utils/get-position-classnames';

export type GridItemProps = {
  children: ReactNode;
  xs: ColumnSpan;
  sm?: ColumnSpan;
  md?: ColumnSpan;
  lg?: ColumnSpan;
  xl?: ColumnSpan;
  xxl?: ColumnSpan;
  order?: Order;
  position?: 'overlay' | 'underlay';
};

export const GridItem: FC<GridItemProps> = ({
  children,
  order,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  position,
}) => {
  const classNames = cx(
    ...getResponsiveColumnSpanClassNames('width', styles, {
      xs,
      sm,
      md,
      lg,
      xl,
      '2xl': xxl,
    }),
    ...getOrderClassNames(styles, order),
    getPositionClassName(styles, position)
  );

  return <div className={classNames}>{children}</div>;
};
