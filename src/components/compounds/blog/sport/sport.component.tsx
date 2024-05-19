import { FC } from 'react'
import { SportResultTile } from './components/sport-result-tile.component'
import { SportSearchTile } from './components/sport-search-tile.component'
import { useSport } from './hooks/use-sport.hook'

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
    } = useSport()

    return (
        <>
            <SportSearchTile
                funcCategory={handleCategory}
                isRoadies={isRoadies}
                isProjects={isProjects}
                isMiles={isMiles}
            />
            <SportResultTile
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
    )
}
