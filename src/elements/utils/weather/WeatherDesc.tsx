const WeatherDesc = ({ main, desc }: any) => {
    return (
        <div>
            <small><b>{main}</b>: {desc}</small>
        </div>
    )
};

export default WeatherDesc;