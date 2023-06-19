import { hillData } from '../../../data'

export const RouteList = ({ id, func, landmassRoutes }: any) => {
    const routes = landmassRoutes.map(({ index, name }: any) => (
        <option key={index} value={name}>
            {name}
        </option>
    ))

    return (
        <select id={id} onChange={func}>
            {routes}
        </select>
    )
}
