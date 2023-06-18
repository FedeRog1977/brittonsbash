import { hillData } from '../../../data/general/hills.data'

export const WeatherSearchList = ({ className, func }: any) => (
    <select className={className} onChange={func}>
        {hillData.munros.map(({ lat, name }) => (
            <option key={lat} value={name}>
                {name}
            </option>
        ))}
    </select>
)
