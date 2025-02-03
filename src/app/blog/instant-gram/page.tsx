import { ReactNode } from 'react';
import { FootnoteTile, PageLayout } from '../../../components';
import { useInstantGram } from './utils/use-instant-gram';
import { SearchTile } from './components/search-tile';
import { ResultTile } from './components/result-tile';
import { instantGramContent } from './content/instant-gram-content';
import { brittonsBashContentFacade } from '../../../implementations';

const mappedEventSports = await brittonsBashContentFacade.getMappedEventSports();
const mappedEvents = await brittonsBashContentFacade.getMappedEvents();

export const InstantGram = () => {
  const {
    handleCategory,
    showSearchList,
    eventData,
    is2025,
    is2024,
    is2023,
    is2022,
    is2021,
    is2020,
    handleInput,
    executeInput,
    handleSelect,
    mappedEvent,
    handleToggleElements,
    showMatrix,
  } = useInstantGram(mappedEventSports, mappedEvents);

  const content: ReactNode[] = [
    <SearchTile
      funcCategory={handleCategory}
      showSearchList={showSearchList}
      eventData={eventData}
      is2025={is2025}
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
      mappedEvent={mappedEvent}
      funcToggleElements={handleToggleElements}
      showMatrix={showMatrix}
    />,
    <FootnoteTile {...instantGramContent.tileOne} />,
  ];

  return <PageLayout background={instantGramContent.background}>{content}</PageLayout>;
};
