import { ReactNode } from 'react';
import { SpacingConfig } from '../../../reference/types';

export type Common = {
  children: ReactNode;
  wrap?: boolean;
  gap?: SpacingConfig;
  columnGap?: SpacingConfig;
  rowGap?: SpacingConfig;
  fullHeight?: boolean;
};
