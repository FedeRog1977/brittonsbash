import { Breakpoints } from './breakpoints';
import { SpacingSize } from './spacing-size';

export type SpacingConfig = SpacingSize | Partial<Record<Breakpoints, SpacingSize>>;
