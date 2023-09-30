import {
    CompiledRoadieProps,
    CompiledProjectProps,
    CompiledMilesProps,
    RoadieProps,
    ProjectProps,
    MilesProps,
} from '../../../../../scripts'
import { ColumnProps } from '../../../../bash-blocks'

export type SportSearchTileProps = {
    funcSelect: (e: any) => void
    isRoadies: boolean
    isProjects: boolean
    isMiles: boolean
}

export type SportResultTileProps = {
    title: React.ReactElement
    routes: ColumnProps[]
    isRoadies: boolean
    isProjects: boolean
    isMiles: boolean
    sportData: CompiledRoadieProps | CompiledProjectProps | CompiledMilesProps
    sport2023: RoadieProps[] | ProjectProps[] | MilesProps[]
    sport2022: RoadieProps[] | ProjectProps[] | MilesProps[]
    sport2021: RoadieProps[] | ProjectProps[] | MilesProps[]
    sport2020: RoadieProps[] | ProjectProps[] | MilesProps[]
}
