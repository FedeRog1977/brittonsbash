import React, { FC } from 'react'
import { InstantGramSearchTile, InstantGramResultTile } from './components'
import { useInstantGram } from './hooks'

export const InstantGram: FC = () => {
    const {
        url,
        handleInput,
        executeInput,
        handleSelect,
        event,
        sport,
        showSport,
    } = useInstantGram()

    return (
        <>
            <InstantGramSearchTile
                url={url}
                funcInput={handleInput}
                funcButton={executeInput}
                funcSelect={handleSelect}
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
