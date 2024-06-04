import { FC } from 'react';
import { FlexBase } from '../flex-base';
import { Horizontal } from './types/horizontal';
import { Vertical } from './types/vertical';

export type FlexProps = Horizontal | Vertical;

// TODO: export from index.ts once old Flex is discontinued
export const FlexTemp: FC<FlexProps> = ({ children, ...props }) => (
  <FlexBase {...props} wrap>
    {children}
  </FlexBase>
);
