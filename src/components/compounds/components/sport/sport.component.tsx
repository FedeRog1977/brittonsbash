import { SportResultTile } from './sport-result-tile.component'
import { SportSearchTile } from './sport-search-tile.component'
import { useSport } from './use-sport.hook'

export const Sport: React.FC = () => {
    const {
        handleSelect,
        sportData,
        sportYearData,
        sport2023,
        sport2022,
        sport2021,
        sport2020,
        title,
        routes,
        isRoadies,
        isProjects,
        isMiles,
    } = useSport()

    return (
        <>
            <SportSearchTile
                funcSelect={handleSelect}
                isRoadies={isRoadies}
                isProjects={isProjects}
                isMiles={isMiles}
            />
            <SportResultTile
                sportData={sportData}
                sportYearData={sportYearData}
                sport2023={sport2023}
                sport2022={sport2022}
                sport2021={sport2021}
                sport2020={sport2020}
                title={title}
                routes={routes}
                isRoadies={isRoadies}
                isProjects={isProjects}
                isMiles={isMiles}
            />
        </>
    )
}
