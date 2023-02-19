const WeatherTemp = ({ temp }: any) => {
    return (
        <h2>
            {(temp).toFixed(0)}&deg;
        </h2>
    )
};

export default WeatherTemp;