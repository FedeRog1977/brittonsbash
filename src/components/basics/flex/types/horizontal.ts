import {
  AlignCrossAxis,
  AlignHorizontal,
  AlignMainAxis,
  AlignVertical,
} from '../../../reference/types';
import { Common } from './common';

export type Horizontal = Common & {
  direction: 'horizontal';
  alignHorizontal?: AlignHorizontal | AlignMainAxis;
  alignVertical?: AlignVertical | AlignCrossAxis;
};
