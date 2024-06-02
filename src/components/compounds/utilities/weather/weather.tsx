import { ResultTitle } from './components/result-title';
import { SearchTile } from './components/search-tile';
import { useWeather } from './utils/use-weather';

export const Weather = () => {
  const {
    weatherTitle,
    weatherSubTitle,
    showWeatherContent,
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
      <ResultTitle
        title={weatherTitle}
        subTitle={weatherSubTitle}
        result={showWeatherContent}
      />
    </>
  );
};
