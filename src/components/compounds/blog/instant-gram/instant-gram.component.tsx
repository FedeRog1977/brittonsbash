import React from 'react'
import { InstantGramSearchTile, InstantGramResultTile } from './components'
import { useInstantGram } from './hooks'

export const InstantGram: React.FC = () => {
    const {
        handleInput,
        executeInput,
        handleSelect,
        event,
        sportEvent,
        showSportOnEvent,
    } = useInstantGram()

    return (
        <>
            <InstantGramSearchTile
                funcInput={handleInput}
                funcButton={executeInput}
                funcSelect={handleSelect}
            />
            <InstantGramResultTile
                event={event}
                sportEvent={sportEvent}
                showSportEvent={showSportOnEvent}
            />
        </>
    )
}
