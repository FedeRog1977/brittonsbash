import cx from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './grid-item.module.scss';
import { ColumnSpan } from './types/column-span';
import { Order } from './types/order';
import { getOrderClassNames } from './utils/get-order-classnames';
import { getPositionClassName } from './utils/get-position-classnames';
import { getWidthClassName } from './utils/get-width-classnames';

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

export const GridItemTemp: FC<GridItemProps> = ({
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
    getWidthClassName(styles, 'xs', xs),
    getWidthClassName(styles, 'sm', sm),
    getWidthClassName(styles, 'md', md),
    getWidthClassName(styles, 'lg', lg),
    getWidthClassName(styles, 'xl', xl),
    getWidthClassName(styles, '2xl', xxl),
    getPositionClassName(styles, position),
    ...getOrderClassNames(styles, order)
  );

  return (
    <div data-testid="grid-item" className={classNames}>
      {children}
    </div>
  );
};
