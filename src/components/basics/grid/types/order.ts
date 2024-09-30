import { Breakpoints } from '../../../reference/types';

export type Order = number | Partial<Record<Breakpoints, number>>;
