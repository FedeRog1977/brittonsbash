import { ReactNode } from 'react';
import { PageLayout } from '../../../components';
import { brittonsBashContentFacade } from '../../../implementations';
import { ResultTile } from './components/result-tile';
import { useSport } from './utils/use-sport';

const mappedProjects = await brittonsBashContentFacade.getMappedProjects();

export const Sport = () => {
  const {
    handleActivities,
    title,
    subTitle,
    summary,
    routes,
    activities,
    is2024,
    is2023,
    is2022,
    is2021,
    is2020,
  } = useSport(mappedProjects);

  const content: ReactNode[] = [
    <ResultTile
      funcActivities={handleActivities}
      title={title}
      subTitle={subTitle}
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
