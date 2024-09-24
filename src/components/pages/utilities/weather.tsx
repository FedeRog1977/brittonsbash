import {
  ResultTitle,
  SearchTile,
  useWeather,
  weatherContent,
} from '../../compounds/utilities/weather';
import { FootnoteTile, PageLayout } from '../../bash-blocks';
import { ReactNode } from 'react';

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

  const content: ReactNode[] = [
    <SearchTile funcInput={handleInput} funcButton={executeInput} funcSelect={handleSelect} />,
    <ResultTitle title={title} subTitle={subTitle} lat={lat as number} lon={lon as number} />,
    <FootnoteTile {...weatherContent.tileOne} />,
  ];

  return <PageLayout background={weatherContent.background}>{content}</PageLayout>;
};
