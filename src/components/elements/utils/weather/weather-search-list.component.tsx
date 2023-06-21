import { hillData } from '../../../../data'

export const WeatherSearchList = ({ className, func }: any) => (
    <select className={className} onChange={func}>
        {hillData.munros.map(({ lat, name }) => (
            <option key={lat} value={name}>
                {name}
            </option>
        ))}
    </select>
)
