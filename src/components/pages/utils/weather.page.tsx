import { Weather as WeatherComponent, weatherContent } from '../../compounds'
import { FootnoteTile } from '../../bash-blocks'
import { PageLayout } from '../../bash-blocks/templates'

export const Weather = () => (
    <PageLayout background={weatherContent.background}>
        <WeatherComponent />
        <FootnoteTile {...weatherContent.tileOne} />
    </PageLayout>
)
