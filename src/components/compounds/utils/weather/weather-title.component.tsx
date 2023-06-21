export const WeatherTitle = ({ contTitle, contSubTitle }: any) => (
    <button className={'weatherTitleCont'}>
        <h1 className={'weatherTitle'}>{contTitle}</h1>
        <h4 className={'weatherTitleCoords'}>{contSubTitle}</h4>
    </button>
)
