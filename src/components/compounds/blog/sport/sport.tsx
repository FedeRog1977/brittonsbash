import { FC } from 'react';
import { ResultTile } from './components/result-tile';
import { SearchTile } from './components/search-tile';
import { useSport } from './utils/use-sport';

export const Sport: FC = () => {
  const {
    handleCategory,
    title,
    subTitle,
    description,
    routes,
    isRoadies,
    isProjects,
    isMiles,
    sportData,
    sport2024,
    sport2023,
    sport2022,
    sport2021,
    sport2020,
  } = useSport();

  return (
    <>
      <SearchTile
        funcCategory={handleCategory}
        isRoadies={isRoadies}
        isProjects={isProjects}
        isMiles={isMiles}
      />
      <ResultTile
        title={title}
        subTitle={subTitle}
        description={description}
        routes={routes}
        isRoadies={isRoadies}
        isProjects={isProjects}
        isMiles={isMiles}
        sportData={sportData}
        sport2024={sport2024}
        sport2023={sport2023}
        sport2022={sport2022}
        sport2021={sport2021}
        sport2020={sport2020}
      />
    </>
  );
};
