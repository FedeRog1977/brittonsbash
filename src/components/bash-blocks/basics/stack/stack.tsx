import { FC } from 'react';
import { Horizontal } from './types/horizontal';
import { Vertical } from './types/vertical';
import { FlexBase } from '../../reference';

type Stack = Horizontal | Vertical;
export type StackProps = Stack & { wrap?: boolean };

// TODO: DISCONTINUE ALONG WITH FLEXBASE
export const Stack: FC<StackProps> = ({ children, spacing, ...props }) => (
  <FlexBase {...props} gap={spacing}>
    {children}
  </FlexBase>
);
