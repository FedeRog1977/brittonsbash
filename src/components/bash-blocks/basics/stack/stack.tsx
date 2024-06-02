import { FC } from 'react';
import { FlexBase } from '../flex-base';
import { Horizontal } from './types/horizontal';
import { Vertical } from './types/vertical';

type Stack = Horizontal | Vertical;
export type StackProps = Stack & { wrap?: boolean };

export const Stack: FC<StackProps> = ({
  children,
  spacing,
  wrap,
  ...props
}) => (
  <FlexBase {...props} gap={spacing} wrap={wrap}>
    {children}
  </FlexBase>
);
