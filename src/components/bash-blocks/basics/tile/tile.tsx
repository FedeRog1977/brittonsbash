import cx from 'classnames';
import styles from './tile.module.scss';
import { toUpperCase } from '../../../../utils';
import { Gradient } from '../gradient';
import { Image } from '../image';
import { FC, ReactNode } from 'react';
import { Img } from '../../reference';
import { GradientProps } from '../gradient';

export type TileProps = {
  type: 'clear' | 'solid';
  stacked?: boolean;
  img?: Img;
  gradient?: GradientProps;
  children: ReactNode;
};

export const Tile: FC<TileProps> = ({
  type,
  stacked,
  img,
  gradient,
  children,
}) => {
  const tile = cx(styles.tile, [styles[`tile${toUpperCase(type)}`]]);
  const container = cx(styles.container, { [styles.stacked]: stacked });
  const innerContainer = cx({ [styles.innerContainer]: stacked });

  return (
    <div className={tile}>
      <div className={container}>
        {img ? <Image {...img} /> : null}
        {gradient ? <Gradient {...gradient} /> : null}
        <div className={innerContainer}>{children}</div>
      </div>
    </div>
  );
};
