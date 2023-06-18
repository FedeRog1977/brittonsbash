import { Button, Search } from '../../../bash-blocks'
import { WeatherSearchList } from '../../../elements'

export const WeatherSearchBar = ({
    funcSelect,
    funcInput,
    funcButton,
}: any) => (
    <div>
        <WeatherSearchList className={'searchLocation'} func={funcSelect} />
        <Search
            className={'searchLocation'}
            func={funcInput}
            content={'Search Munro'}
        />
        <Button
            className={'searchLocation'}
            func={funcButton}
            content={'Search'}
        />
    </div>
)
