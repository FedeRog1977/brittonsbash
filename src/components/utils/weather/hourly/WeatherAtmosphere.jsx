const WeatherAtmosphereHourly = ({ pressure, humidity, dp, vb, uvi }) => {
    return (
        <div className={"weatherAtmosphere"}>
            <small>
                <table style={{ margin: "auto" }}>
                    <tr>
                        <td style={{ textAlign: "right" }}><b>Pressure</b>:</td>
                        <td style={{ textAlign: "left" }}>{pressure}mb</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "right" }}><b>Humidity</b>:</td>
                        <td style={{ textAlign: "left" }}>{humidity}&#37;</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "right" }}><b>Dew Point</b>:</td>
                        <td style={{ textAlign: "left" }}>{dp}</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "right" }}><b>Visibility</b>:</td>
                        <td style={{ textAlign: "left" }}>{(vb) / 100}&#37;</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "right" }}><b>UV Index</b>:</td>
                        <td style={{ textAlign: "left" }}>{uvi}</td>
                    </tr>
                </table>
            </small>
        </div>
    )
};

export default WeatherAtmosphereHourly;