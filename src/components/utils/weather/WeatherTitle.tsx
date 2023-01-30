const WeatherTitle = ({ contTitle, contSubTitle }) => {
    return (
        <button className={"weatherTitleCont"}>
            <h1 className={"weatherTitle"}>{contTitle}</h1>
            <h4 className={"weatherTitleCoords"}>{contSubTitle}</h4>
        </button>
    )
};

export default WeatherTitle;