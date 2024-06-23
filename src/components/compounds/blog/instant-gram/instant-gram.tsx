import { FC } from 'react';
import { ResultTile } from './components/result-tile';
import { SearchTile } from './components/search-tile';
import { useInstantGram } from './utils/use-instant-gram';
import { Spacing } from '../../../bash-blocks';

export const InstantGram: FC = () => {
  const {
    handleCategory,
    showSearchList,
    eventData,
    is2024,
    is2023,
    is2022,
    is2021,
    is2020,
    handleInput,
    executeInput,
    handleSelect,
    refactoredEvent,
    handleToggleElements,
    showDescription,
    showMatrix,
  } = useInstantGram();

  return (
    <>
      {/* TODO: sort page spacing */}
      <Spacing marginY="md">
        <SearchTile
          funcCategory={handleCategory}
          showSearchList={showSearchList}
          eventData={eventData}
          is2024={is2024}
          is2023={is2023}
          is2022={is2022}
          is2021={is2021}
          is2020={is2020}
          funcInput={handleInput}
          funcButton={executeInput}
          funcSelect={handleSelect}
        />
      </Spacing>
      <ResultTile
        refactoredEvent={refactoredEvent}
        funcToggleElements={handleToggleElements}
        showDescription={showDescription}
        showMatrix={showMatrix}
      />
    </>
  );
};
