import { FC } from 'react';
import { generateUniqueKey, Route } from '../../../../utils';

export type RouteListProps = {
  id: string;
  func: (e: any) => void;
  landmassRoutes: Route[];
};

export const RouteList: FC<RouteListProps> = ({ id, func, landmassRoutes }) => {
  const routes = landmassRoutes.map(({ name }: any, index: number) => (
    <option key={generateUniqueKey(index)} value={name}>
      {name}
    </option>
  ));

  return (
    <select id={id} onChange={func}>
      {routes}
    </select>
  );
};
