import { compileHills, generateUniqueKey } from '../../../../../scripts'

export const LandmassList = ({ id, func }: any) => {
    const hills = compileHills()

    const routes = hills.landmasses.map(
        // Requires significant work
        ({ name, subtype, subsubtype }: any, index: number) => (
            <option key={generateUniqueKey(index)} value={name}>
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
