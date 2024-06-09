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
    summary,
    routes,
    activities2024,
    activities2023,
    activities2022,
    activities2021,
    activities2020,
    isRoadies,
    isProjects,
    isMiles,
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
        summary={summary}
        routes={routes}
        activities2024={activities2024}
        activities2023={activities2023}
        activities2022={activities2022}
        activities2021={activities2021}
        activities2020={activities2020}
      />
    </>
  );
};
