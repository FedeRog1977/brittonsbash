import { ReactNode } from 'react';
import { FootnoteTile, PageLayout } from '../../../components';
import { ResultTile } from './components/result-tile';
import { Food } from './types/food';
import { useBrittonsFoodRC } from './utils/use-brittons-foodrc';
import { SearchTile } from './components/search-tile';
import { brittonsFoodRCContent } from './content/brittonsfoodrc-content';

export const BrittonsFoodRC = () => {
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

  const content: ReactNode[] = [
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
    />,
    <ResultTile
      food={food as Food}
      funcToggleElements={handleToggleElements}
      showDescription={showDescription}
      showMatrix={showMatrix}
    />,
    <FootnoteTile {...brittonsFoodRCContent.tileTwo} />,
  ];

  return (
    <PageLayout background={{ type: 'calligraphy', content: 'BrittonsFoodRC' }}>
      {content}
    </PageLayout>
  );
};
