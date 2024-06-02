import React, { FC } from 'react';
import { ResultTile } from './components/result-tile';
import { SearchTile } from './components/search-tile';
import { useInstantGram } from './utils/use-instant-gram';

export const InstantGram: FC = () => {
  const {
    url,
    handleCategory,
    handleInput,
    executeInput,
    handleSelect,
    event,
    sport,
    showSport,
    is2024,
    is2023,
    is2022,
    is2021,
    is2020,
  } = useInstantGram();

  return (
    <>
      <SearchTile
        url={url}
        funcCategory={handleCategory}
        funcInput={handleInput}
        funcButton={executeInput}
        funcSelect={handleSelect}
        is2024={is2024}
        is2023={is2023}
        is2022={is2022}
        is2021={is2021}
        is2020={is2020}
      />
      <ResultTile url={url} event={event} sport={sport} showSport={showSport} />
    </>
  );
};
