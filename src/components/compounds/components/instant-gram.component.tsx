import { InstantGramSearchTile } from '.'
import { InstantGramResultTile } from '.'
import { useInstantGram } from '../../../scripts'

export const InstantGram = () => {
    const {
        handleInput,
        executeInput,
        handleSelect,
        event,
        sportEvent,
        showSportEvent,
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
                showSportEvent={showSportEvent}
            />
        </>
    )
}
