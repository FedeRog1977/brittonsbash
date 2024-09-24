import { Breakpoints } from '../../../reference';

export type Order = number | Partial<Record<Breakpoints, number>>;
