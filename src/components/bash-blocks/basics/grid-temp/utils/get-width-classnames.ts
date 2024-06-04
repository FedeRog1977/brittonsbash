import { toUpperCase } from '../../../../../utils';
import { ColumnSpan } from '../../../reference';
import { Width } from '../types/width';

export const getWidthClassName = (
  styles: Record<string, string>,
  width: Width,
  columnSpan?: ColumnSpan
): string | undefined =>
  columnSpan && styles[`width${toUpperCase(width)}${columnSpan}`];
