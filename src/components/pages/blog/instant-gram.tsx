import { FootnoteTile, PageLayout, Spacing } from '../../bash-blocks';
import {
  instantGramContent,
  SearchTile,
  ResultTile,
  useInstantGram,
} from '../../compounds/blog/instant-gram';

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
    refactoredEvent,
    handleToggleElements,
    showDescription,
    showMatrix,
  } = useInstantGram();

  return (
    <PageLayout background={instantGramContent.background}>
      <Spacing marginBottom="md">
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

      <Spacing marginBottom="md">
        <ResultTile
          refactoredEvent={refactoredEvent}
          funcToggleElements={handleToggleElements}
          showDescription={showDescription}
          showMatrix={showMatrix}
        />
      </Spacing>

      <Spacing marginBottom="md">
        <FootnoteTile {...instantGramContent.tileOne} />
      </Spacing>
    </PageLayout>
  );
};
