import { ColumnSpan } from './column-span';
import { Breakpoints } from './breakpoints';

export type ColumnSpanConfig =
  | ColumnSpan
  | Partial<Record<Breakpoints, ColumnSpan>>;
