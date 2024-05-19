import React, { FC } from 'react'
import { InstantGramResultTile } from './components/instant-gram-result-tile.component'
import { InstantGramSearchTile } from './components/instant-gram-search-tile.component'
import { useInstantGram } from './hooks/use-instant-gram.hook'

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
    } = useInstantGram()

    return (
        <>
            <InstantGramSearchTile
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
            <InstantGramResultTile
                url={url}
                event={event}
                sport={sport}
                showSport={showSport}
            />
        </>
    )
}
