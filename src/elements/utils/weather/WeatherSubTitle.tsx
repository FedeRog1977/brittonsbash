const WeatherSubTitle = ({ type, elev, lat, lon, mark }: any) => {
    var latSuffix = "";
    var lonSuffix = "";

    function getLat() {
        var latOut = lat;

        if (lat >= 0) {
            latSuffix = "N";
            latOut = (lat * 1).toFixed(1);
        } else if (lat < 0) {
            latSuffix = "S";
            latOut = (lat * -1).toFixed(1);
        }
        return latOut;
    }

    function getLon() {
        var lonOut = lon;

        if (lon >= 0) {
            lonSuffix = "E";
            lonOut = (lon * 1).toFixed(1);
        } else if (lon < 0) {
            lonSuffix = "W";
            lonOut = (lon * -1).toFixed(1);
        }
        return lonOut;
    }

    if (type !== "munro") {
        return (
            <div data-testid={"weatherSubTitle"}>
                {getLat()}&deg;{latSuffix}, {getLon()}&deg;{lonSuffix}
            </div>
        )
    } else {
        return (
            <div data-testid={"weatherSubTitle"}>
                Munro at {elev}m - {getLat()}&deg;{latSuffix}, {getLon()}&deg;{lonSuffix} - Marked by {mark}
            </div>
        )
    };
};

export default WeatherSubTitle;
