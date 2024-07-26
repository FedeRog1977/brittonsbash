import { ReactNode } from 'react';
import { FootnoteTile, PageLayout } from '../../bash-blocks';
import {
  ResultTile,
  SearchTile,
  brittonsFoodRCContent,
  useBrittonsFoodRC,
} from '../../compounds/blog/brittons-foodrc';

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
      food={food}
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
