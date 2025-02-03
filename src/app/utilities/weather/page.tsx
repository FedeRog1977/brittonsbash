import { FootnoteTile, PageLayout } from '../../../components';
import { ReactNode } from 'react';
import { useWeather } from './utils/use-weather';
import { ResultTitle } from './components/result-title';
import { SearchTile } from './components/search-tile';
import { weatherContent } from './content/weather-content';

export const Weather = () => {
  const {
    title,
    subTitle,
    // subSubTitle,
    latLon: [lat, lon],
    handleInput,
    executeInput,
    handleSelect,
  } = useWeather();

  const content: ReactNode[] = [
    <SearchTile funcInput={handleInput} funcButton={executeInput} funcSelect={handleSelect} />,
    <ResultTitle title={title} subTitle={subTitle} lat={lat as number} lon={lon as number} />,
    <FootnoteTile {...weatherContent.tileOne} />,
  ];

  return <PageLayout background={weatherContent.background}>{content}</PageLayout>;
};
