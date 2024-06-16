import { FC } from 'react';
import { SearchTile } from './components/search-tile';
import { useBrittonsFoodRC } from './utils/use-brittons-foodrc';
import { ResultTile } from './components/result-tile';

export const BrittonsFoodRC: FC = () => {
  const {
    handleSelect,
    food,
    handleToggleElements,
    showDescription,
    showMatrix,
  } = useBrittonsFoodRC();

  return (
    <>
      <SearchTile funcSelect={handleSelect} />
      <ResultTile
        food={food}
        funcToggleElements={handleToggleElements}
        showDescription={showDescription}
        showMatrix={showMatrix}
      />
    </>
  );
};
