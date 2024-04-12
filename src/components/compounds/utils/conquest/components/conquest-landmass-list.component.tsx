import { compileHills } from '../../../../../scripts'

export const LandmassList = ({ id, func }: any) => {
    const hills = compileHills()

    const routes = hills.landmasses.map(
        ({ name, subtype, subsubtype }: any) => (
            <option key={name} value={name}>
                {name}
            </option>
        )
    )

    return (
        <select id={id} onChange={func}>
            {routes}
        </select>
    )
}
