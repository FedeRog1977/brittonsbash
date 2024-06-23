import { FC } from 'react';
import { SearchTile } from './components/search-tile';
import { useBrittonsFoodRC } from './utils/use-brittons-foodrc';
import { ResultTile } from './components/result-tile';

export const BrittonsFoodRC: FC = () => {
  const {
    handleCategory,
    showSearchList,
    foodData,
    isMeat,
    isPoultry,
    isFish,
    isPasta,
    isBread,
    isSweet,
    isMisc,
    handleSelect,
    food,
    handleToggleElements,
    showDescription,
    showMatrix,
  } = useBrittonsFoodRC();

  return (
    <>
      <SearchTile
        funcCategory={handleCategory}
        showSearchList={showSearchList}
        foodData={foodData}
        isMeat={isMeat}
        isPoultry={isPoultry}
        isFish={isFish}
        isPasta={isPasta}
        isBread={isBread}
        isSweet={isSweet}
        isMisc={isMisc}
        funcSelect={handleSelect}
      />
      <ResultTile
        food={food}
        funcToggleElements={handleToggleElements}
        showDescription={showDescription}
        showMatrix={showMatrix}
      />
    </>
  );
};
