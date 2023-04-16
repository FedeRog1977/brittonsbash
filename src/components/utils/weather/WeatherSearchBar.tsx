import Button from "../../../bashBlocks/elements/Button";
import Search from "../../../bashBlocks/elements/Search";
import WeatherSearchList from "../../../elements/utils/weather/WeatherSearchList";

const WeatherSearchBar = ({ funcSelect, funcInput, funcButton }: any) => {
    return (
        <div>
            <WeatherSearchList className={"searchLocation"} func={funcSelect} />
            <Search className={"searchLocation"} func={funcInput} content={"Search Munro"} />
            <Button className={"searchLocation"} func={funcButton} content={"Search"} />
        </div>
    )
};

export default WeatherSearchBar;