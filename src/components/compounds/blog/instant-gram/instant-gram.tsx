import React, { FC } from 'react';
import { ResultTile } from './components/result-tile';
import { SearchTile } from './components/search-tile';
import { useInstantGram } from './utils/use-instant-gram';

export const InstantGram: FC = () => {
  const {
    url,
    handleCategory,
    showSearchList,
    eventData,
    handleInput,
    executeInput,
    handleSelect,
    refactoredEvent,
    is2024,
    is2023,
    is2022,
    is2021,
    is2020,
    handleToggleElements,
    showDescription,
    showMatrix,
  } = useInstantGram();

  return (
    <>
      <SearchTile
        url={url}
        funcCategory={handleCategory}
        showSearchList={showSearchList}
        eventData={eventData}
        funcInput={handleInput}
        funcButton={executeInput}
        funcSelect={handleSelect}
        is2024={is2024}
        is2023={is2023}
        is2022={is2022}
        is2021={is2021}
        is2020={is2020}
      />
      <ResultTile
        url={url}
        refactoredEvent={refactoredEvent}
        funcToggleElements={handleToggleElements}
        showDescription={showDescription}
        showMatrix={showMatrix}
      />
    </>
  );
};
