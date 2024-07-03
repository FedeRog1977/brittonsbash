import { PageLayout, Spacing } from '../../bash-blocks';
import { ResultTile, SearchTile, useSport } from '../../compounds/blog/sport';

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

  return (
    <PageLayout background={{ type: 'sport', content: 'Sport' }}>
      <Spacing marginBottom="md">
        <SearchTile
          funcCategory={handleCategory}
          isRoadies={isRoadies}
          isProjects={isProjects}
          isMiles={isMiles}
        />
      </Spacing>

      <Spacing marginBottom="md">
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
        />
      </Spacing>
    </PageLayout>
  );
};
