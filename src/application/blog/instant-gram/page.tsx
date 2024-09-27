import { ReactNode } from 'react';
import { FootnoteTile, PageLayout } from '../../../components';
import { useInstantGram } from './utils/use-instant-gram';
import { SearchTile } from './components/search-tile';
import { ResultTile } from './components/result-tile';
import { instantGramContent } from './content/instant-gram-content';

export const InstantGram = () => {
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
    compiledEvent,
    eventSport,
    handleToggleElements,
    showDescription,
    showMatrix,
  } = useInstantGram();

  const content: ReactNode[] = [
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
    />,
    <ResultTile
      compiledEvent={compiledEvent}
      eventSport={eventSport}
      funcToggleElements={handleToggleElements}
      showDescription={showDescription}
      showMatrix={showMatrix}
    />,
    <FootnoteTile {...instantGramContent.tileOne} />,
  ];

  return <PageLayout background={instantGramContent.background}>{content}</PageLayout>;
};
