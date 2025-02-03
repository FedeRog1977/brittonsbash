import { ReactNode } from 'react';
import { PageLayout } from '../../../components';
import { brittonsBashContentFacade } from '../../../implementations';
import { ResultTile } from './components/result-tile';
import { SearchTile } from './components/search-tile';
import { useSport } from './utils/use-sport';

const mappedMiles = await brittonsBashContentFacade.getMappedMiles();
const mappedProjects = await brittonsBashContentFacade.getMappedProjects();
const mappedRoadies = await brittonsBashContentFacade.getMappedRoadies();

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
  } = useSport(mappedMiles, mappedProjects, mappedRoadies);

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
