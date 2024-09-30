import { FC } from 'react';
import { brittonsBashContentFacade } from '../../../../implementations';
import { generateUniqueKey } from '../../../../utils';

// TODO: all facade uses should be in their respective page.tsx's
const hills = await brittonsBashContentFacade.getHills();

type LandmassListProps = {
  id: string;
  func: (e: any) => void;
};

export const LandmassList: FC<LandmassListProps> = ({ id, func }: any) => {
  const routes = hills.landmasses.map(
    // TODO: requires significant work
    ({ name }, index) => (
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
