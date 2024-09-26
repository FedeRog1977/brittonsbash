import { FC } from 'react';
import { compileHills, generateUniqueKey } from '../../../../utils';

type LandmassListProps = {
  id: string;
  func: (e: any) => void;
};

export const LandmassList: FC<LandmassListProps> = ({ id, func }: any) => {
  const hills = compileHills();

  const routes = hills.landmasses.map(
    // Requires significant work
    ({ name, subtype, subsubtype }: any, index: number) => (
      <option key={generateUniqueKey(index)} value={name}>
        {name}
      </option>
    )
  );

  return (
    <select id={id} onChange={func}>
      {routes}
    </select>
  );
};
