import React from 'react'
import { InstantGramSearchTile, InstantGramResultTile } from './components'
import { useInstantGram } from './hooks'

export const InstantGram: React.FC = () => {
    const {
        url,
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
                url={url}
                funcInput={handleInput}
                funcButton={executeInput}
                funcSelect={handleSelect}
            />
            <InstantGramResultTile
                url={url}
                event={event}
                sportEvent={sportEvent}
                showSportEvent={showSportOnEvent}
            />
        </>
    )
}
