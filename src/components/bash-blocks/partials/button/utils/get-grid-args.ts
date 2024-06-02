import { GridProps } from '../../../basics';

export const getGridArgs = (
  subContent: boolean,
  subContentTop: boolean,
  space: boolean
) => {
  const gridArgs: Partial<GridProps> = {
    alignColumns: subContentTop ? 'auto' : 'auto auto',
    alignRows: subContentTop ? 'auto auto' : 'auto',
    justifyContent: space ? undefined : 'center',
    alignItems: 'center',
  };

  const gridItemSubContentArgs: Partial<GridProps> = {
    columnItem: subContentTop ? [1, 1] : [1, 2],
    rowItem: subContentTop ? [1, 2] : undefined,
    textAlign: subContentTop ? 'center' : 'right',
  };

  const gridItemContentArgs: Partial<GridProps> = {
    columnItem: subContentTop ? [1, 1] : [subContent ? 2 : 1, 2],
    rowItem: subContentTop ? [subContent ? 2 : 1, 2] : undefined,
    textAlign: subContentTop ? 'center' : 'left',
  };

  const gridItemIconArgs: Partial<GridProps> = {
    columnItem: subContentTop ? undefined : [2, 2],
    rowItem: subContentTop ? [2, 2] : undefined,
    textAlign: space ? 'right' : undefined,
  };

  return {
    gridArgs,
    gridItemSubContentArgs,
    gridItemContentArgs,
    gridItemIconArgs,
  };
};
