const WeatherSrSs = ({ sr, ss }: any) => {
    return (
        <table className={"weatherSrSS"} style={{ margin: "auto" }}>
            <tr>
                <td style={{ columnWidth: "3.5em" }}>
                    <small><b>Sunrise:</b></small>
                </td>
                <td style={{ columnWidth: "3.5em" }}>
                    <small><b>Sunset:</b></small>
                </td>
            </tr>
            <tr>
                <td style={{ columnWidth: "3.5em" }}>
                    <small>{new Date(sr * 1000).toLocaleTimeString('en-uk', { hour: "numeric", minute: "numeric" })}</small>
                </td>
                <td style={{ columnWidth: "3.5em" }}>
                    <small>{new Date(ss * 1000).toLocaleTimeString('en-uk', { hour: "numeric", minute: "numeric" })}</small>
                </td>
            </tr>
        </table>
    )
};

export default WeatherSrSs;