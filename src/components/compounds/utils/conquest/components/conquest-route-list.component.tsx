import { generateUniqueKey } from '../../../../../scripts'

export const RouteList = ({ id, func, landmassRoutes }: any) => {
    const routes = landmassRoutes.map(({ name }: any, index: number) => (
        <option key={generateUniqueKey(index)} value={name}>
            {name}
        </option>
    ))

    return (
        <select id={id} onChange={func}>
            {routes}
        </select>
    )
}
