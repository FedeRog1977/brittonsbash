import {
  ResultTitle,
  SearchTile,
  useWeather,
  weatherContent,
} from '../../compounds/utilities/weather';
import { FootnoteTile, PageLayout, Spacing } from '../../bash-blocks';

export const Weather = () => {
  const {
    title,
    subTitle,
    subSubTitle,
    latLon: [lat, lon],
    handleInput,
    executeInput,
    handleSelect,
  } = useWeather();

  return (
    <PageLayout background={weatherContent.background}>
      <Spacing marginBottom="md">
        <SearchTile
          funcInput={handleInput}
          funcButton={executeInput}
          funcSelect={handleSelect}
        />
      </Spacing>

      <Spacing marginBottom="md">
        <ResultTitle title={title} subTitle={subTitle} lat={lat} lon={lon} />
      </Spacing>

      <Spacing marginBottom="md">
        <FootnoteTile {...weatherContent.tileOne} />
      </Spacing>
    </PageLayout>
  );
};
