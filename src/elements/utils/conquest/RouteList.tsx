// import { hillData } from "../../../data/Hills";

function RouteList({ id, func, landmassRoutes }: any) {
    const routes = landmassRoutes.map(
        ({ name }: any) =>
            <option key={name} value={name}>{name}</option>
    );

    return (
        <select id={id} onChange={func}>
            {routes}
        </select>
    )
}

export default RouteList;