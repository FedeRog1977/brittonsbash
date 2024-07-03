import { FootnoteTile, PageLayout, Spacing } from '../../bash-blocks';
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

  return (
    <PageLayout background={{ type: 'calligraphy', content: 'BrittonsFoodRC' }}>
      <Spacing marginBottom="md">
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
      </Spacing>

      <Spacing marginBottom="md">
        <ResultTile
          food={food}
          funcToggleElements={handleToggleElements}
          showDescription={showDescription}
          showMatrix={showMatrix}
        />
      </Spacing>

      <Spacing marginBottom="md">
        <FootnoteTile {...brittonsFoodRCContent.tileTwo} />
      </Spacing>
    </PageLayout>
  );
};
