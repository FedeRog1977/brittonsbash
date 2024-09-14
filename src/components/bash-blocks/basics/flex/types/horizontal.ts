import {
  AlignCrossAxis,
  AlignHorizontal,
  AlignMainAxis,
  AlignVertical,
} from '../../../reference/index.js';
import { Common } from './common.js';

export type Horizontal = Common & {
  direction: 'horizontal';
  alignHorizontal?: AlignHorizontal | AlignMainAxis;
  alignVertical?: AlignVertical | AlignCrossAxis;
};
