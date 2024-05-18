import {
    CompiledRoadieProps,
    CompiledProjectProps,
    CompiledMilesProps,
    RoadieProps,
    ProjectProps,
    MilesProps,
} from '../../../../../scripts'
import { Column } from '../../../../bash-blocks/partials/table/types/column.type'

export type SportSearchTileProps = {
    funcSelect: (e: any) => void
    isRoadies: boolean
    isProjects: boolean
    isMiles: boolean
}

export type SportResultTileProps = {
    title: string
    subTitle: string
    description: string
    routes: Column[]
    isRoadies: boolean
    isProjects: boolean
    isMiles: boolean
    sportData: CompiledRoadieProps | CompiledProjectProps | CompiledMilesProps
    sport2024: RoadieProps[] | ProjectProps[] | MilesProps[]
    sport2023: RoadieProps[] | ProjectProps[] | MilesProps[]
    sport2022: RoadieProps[] | ProjectProps[] | MilesProps[]
    sport2021: RoadieProps[] | ProjectProps[] | MilesProps[]
    sport2020: RoadieProps[] | ProjectProps[] | MilesProps[]
}
