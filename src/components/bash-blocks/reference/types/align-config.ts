import { Breakpoints } from '..';
import { Align } from './align';

export type AlignConfig = Align | Partial<Record<Breakpoints, Align>>;
