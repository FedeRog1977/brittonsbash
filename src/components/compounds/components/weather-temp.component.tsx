import {
    faTemperatureHigh,
    faTemperatureLow,
    faSun,
    faMoon,
} from '@fortawesome/free-solid-svg-icons'
import { Flex, Spacing } from '../../bash-blocks'
import { WeatherTempTile } from '../../elements'

export const WeatherTemp = ({
    tempMax,
    tempMin,
    tempFlDay,
    tempFlNight,
}: any) => (
    <Spacing textAlign="center">
        <Flex>
            <WeatherTempTile tempIcon={faTemperatureHigh} tempType={tempMax} />
            <WeatherTempTile tempIcon={faTemperatureLow} tempType={tempMin} />
            <WeatherTempTile tempIcon={faSun} tempType={tempFlDay} />
            <WeatherTempTile tempIcon={faMoon} tempType={tempFlNight} />
        </Flex>
    </Spacing>
)
