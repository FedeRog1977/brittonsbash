import { Button, Search } from '../../../bash-blocks'
import { WeatherSearchList } from '../../../elements'

const WeatherSearchBar = ({ funcSelect, funcInput, funcButton }: any) => {
    return (
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
}

export default WeatherSearchBar
