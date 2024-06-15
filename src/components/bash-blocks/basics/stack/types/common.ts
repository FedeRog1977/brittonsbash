import { ReactNode } from 'react';
import { SpacingConfig } from '../../../reference';

export type Common = {
  children: ReactNode;
  spacing?: SpacingConfig;
  fullHeight?: boolean;
};
