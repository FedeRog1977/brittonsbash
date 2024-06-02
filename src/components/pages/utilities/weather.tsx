import { Weather as WeatherComponent, weatherContent } from '../../compounds';
import { FootnoteTile, PageLayout } from '../../bash-blocks';

export const Weather = () => (
  <PageLayout background={weatherContent.background}>
    <WeatherComponent />
    <FootnoteTile {...weatherContent.tileOne} />
  </PageLayout>
);
