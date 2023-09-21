import { InstantGramSearchTile, InstantGramResultTile, useInstantGram } from '.'

export const InstantGram = () => {
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
