import { Breakpoints } from './breakpoints';
import { Align } from './align';

export type AlignConfig = Align | Partial<Record<Breakpoints, Align>>;
