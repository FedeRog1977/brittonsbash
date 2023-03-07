import Button from "../../../bashBlocks/elements/Button";
import Search from "../../../elements/utils/weather/Search";
import SearchList from "../../../elements/utils/weather/SearchList";

const WeatherSearchBar = ({ funcSelect, funcInput, funcButton }: any) => {
    return (
        <div>
            <SearchList id={"searchLocation"} func={funcSelect} />
            <Search id={"searchLocation"} func={funcInput} text={"Search Munro"} />
            <Button id={"searchLocation"} func={funcButton} text={"Search"} />
        </div>
    )
};

export default WeatherSearchBar;