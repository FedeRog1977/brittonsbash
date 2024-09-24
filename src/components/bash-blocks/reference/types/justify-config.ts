import { Breakpoints } from './breakpoints';
import { Justify } from './justify';

export type JustifyConfig = Justify | Partial<Record<Breakpoints, Justify>>;
