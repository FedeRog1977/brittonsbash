import { ReactNode } from 'react';
import { PageLayout } from '../../bash-blocks/index.js';
import { ResultTile, SearchTile, useSport } from '../../compounds/blog/sport/index.js';

export const Sport = () => {
  const {
    handleCategory,
    handleActivities,
    title,
    subTitle,
    description,
    summary,
    routes,
    activities,
    isRoadies,
    isProjects,
    isMiles,
    is2024,
    is2023,
    is2022,
    is2021,
    is2020,
  } = useSport();

  const content: ReactNode[] = [
    <SearchTile
      funcCategory={handleCategory}
      isRoadies={isRoadies}
      isProjects={isProjects}
      isMiles={isMiles}
    />,
    <ResultTile
      funcActivities={handleActivities}
      title={title}
      subTitle={subTitle}
      description={description}
      summary={summary}
      routes={routes}
      activities={activities}
      is2024={is2024}
      is2023={is2023}
      is2022={is2022}
      is2021={is2021}
      is2020={is2020}
    />,
  ];

  return <PageLayout background={{ type: 'sport', content: 'Sport' }}>{content}</PageLayout>;
};
