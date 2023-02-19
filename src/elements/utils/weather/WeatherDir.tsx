const WeatherDir = ({ wind }: any) => {
    var windDir = "";

    if ((wind) >= 348.76) {
        windDir = "N";
    } else if ((wind) >= 0 && (wind) <= 11.25) {
        windDir = "N";
    } else if ((wind) >= 11.26 && (wind) <= 33.75) {
        windDir = "N/NE";
    } else if ((wind) >= 33.76 && (wind) <= 56.25) {
        windDir = "NE";
    } else if ((wind) >= 56.26 && (wind) <= 78.75) {
        windDir = "E/NE";
    } else if ((wind) >= 78.76 && (wind) <= 101.25) {
        windDir = "E";
    } else if ((wind) >= 101.26 && (wind) <= 123.75) {
        windDir = "E/SE";
    } else if ((wind) >= 123.76 && (wind) <= 146.25) {
        windDir = "SE";
    } else if ((wind) >= 146.26 && (wind) <= 168.75) {
        windDir = "S/SE";
    } else if ((wind) >= 168.76 && (wind) <= 191.25) {
        windDir = "S";
    } else if ((wind) >= 191.26 && (wind) <= 213.75) {
        windDir = "S/SW";
    } else if ((wind) >= 213.76 && (wind) <= 236.25) {
        windDir = "SW";
    } else if ((wind) >= 236.26 && (wind) <= 258.75) {
        windDir = "W/SW";
    } else if ((wind) >= 258.76 && (wind) <= 281.25) {
        windDir = "W";
    } else if ((wind) >= 281.26 && (wind) <= 303.75) {
        windDir = "W/NW";
    } else if ((wind) >= 303.76 && (wind) <= 326.25) {
        windDir = "NW";
    } else if ((wind) >= 326.26 && (wind) <= 348.75) {
        windDir = "N/NW";
    }

    return (
        <h4 data-testid={"weatherDir"}>
            {windDir}
        </h4>
    )
};

export default WeatherDir;