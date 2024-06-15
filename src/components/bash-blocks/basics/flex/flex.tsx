import { FC } from 'react';
import { Horizontal } from './types/horizontal';
import { Vertical } from './types/vertical';
import { FlexBase } from '../../reference';

export type FlexProps = Horizontal | Vertical;

export const Flex: FC<FlexProps> = ({ children, ...props }) => (
  <FlexBase {...props} wrap>
    {children}
  </FlexBase>
);
