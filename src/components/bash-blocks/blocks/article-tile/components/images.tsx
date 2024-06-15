import { FC } from 'react';
import { ImageMatrix, ImageMatrixProps } from '../../../partials';

export type ImagesProps = { items: ImageMatrixProps['items'] };

export const Images: FC<ImagesProps> = ({ items }) => (
  <ImageMatrix items={items} />
);
