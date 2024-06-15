import { Breakpoints } from '..';
import { Justify } from './justify';

export type JustifyConfig = Justify | Partial<Record<Breakpoints, Justify>>;
