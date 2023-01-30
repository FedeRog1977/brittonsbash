import { hillData } from "../../../data/Hills";

function LandmassList({ id, func }) {
    const routes = hillData.landmasses.map(
        ({ name, subtype, subsubtype }) =>
            <option key={name} value={name}>{name}</option>
    );

    return (
        <select id={id} onChange={func}>
            {routes}
        </select>
    )
}

export default LandmassList;