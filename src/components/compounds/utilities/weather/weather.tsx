import { ResultTitle } from './components/result-title';
import { SearchTile } from './components/search-tile';
import { useWeather } from './utils/use-weather';

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
    <>
      <SearchTile
        funcInput={handleInput}
        funcButton={executeInput}
        funcSelect={handleSelect}
      />
      <ResultTitle title={title} subTitle={subTitle} lat={lat} lon={lon} />
    </>
  );
};
