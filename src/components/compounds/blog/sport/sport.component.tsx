import { SportSearchTile, SportResultTile } from '.'
import { useSport } from './hooks/use-sport.hook'

export const Sport: React.FC = () => {
    const {
        handleSelect,
        title,
        description,
        routes,
        isRoadies,
        isProjects,
        isMiles,
        sportData,
        sport2023,
        sport2022,
        sport2021,
        sport2020,
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
                title={title}
                description={description}
                routes={routes}
                isRoadies={isRoadies}
                isProjects={isProjects}
                isMiles={isMiles}
                sportData={sportData}
                sport2023={sport2023}
                sport2022={sport2022}
                sport2021={sport2021}
                sport2020={sport2020}
            />
        </>
    )
}
