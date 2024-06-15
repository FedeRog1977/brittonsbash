import { ReactNode } from 'react';
import { SpacingConfig } from '../../../types';

export type Common = {
  children: ReactNode;
  gap?: SpacingConfig;
  columnGap?: SpacingConfig;
  rowGap?: SpacingConfig;
  fullHeight?: boolean;
};
