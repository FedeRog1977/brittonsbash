import { ReactNode } from 'react';
import { FootnoteTile, PageLayout } from '../../bash-blocks';
import {
  instantGramContent,
  SearchTile,
  ResultTile,
  useInstantGram,
} from '../../compounds/blog/instant-gram';
import { useEvents } from '../../../api';

export const InstantGram = () => {
  useEvents();

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
