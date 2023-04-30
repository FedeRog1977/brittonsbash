import { useState } from "react";
import InstantGramSearchTile from "./InstantGramSearchTile";
import InstantGramResultTile from "./InstantGramResultTile";
import compileEvents from "../../../scripts/blog/instant-gram/compileEvents";
import compileSports from "../../../scripts/blog/instant-gram/compileSports";

const InstantGramSearch = () => {
    const allEvents = compileEvents();
    const allSport = compileSports();

    const eventSport: any[] = [];

    const initialEventHaveSport = allEvents[0].names.includes(allSport[0].name);
    eventSport.push(allSport[0])

    const [event, setEvent] = useState(allEvents[0]);
    const [sportEvent, setSportEvent] = useState(eventSport);
    const [showSportEvent, setShowSportEvent] = useState(initialEventHaveSport);

    const [eventPlaceholder, setEventPlaceholder] = useState(event);
    const [sportEventPlaceholder, setSportEventPlaceholder] = useState(sportEvent);
    const [showSportEventPlaceholder, setShowSportEventPlaceholder] = useState(showSportEvent);

    const [searchField, setSearchField] = useState('');

    const handleSelect = (e: any) => {
        console.log(
            "---\nSelect New Event:\n",
            e.target.value,
        );

        eventSport.pop();

        for (var i in allEvents) {
            if (
                allEvents[i].names.join(' / ')
                    .includes((e.target.value))
            ) {
                console.log(
                    "Match Selected Event To JSON:\n",
                    `${allEvents[i].names.join(' / ')}\n---`
                );
                setEvent(allEvents[i]); // Set event data
                setShowSportEvent(false); // Set show sport data (sport !exist)
                for (var j in allSport) {
                    if (
                        allEvents[i].names
                            .includes(allSport[j].name)
                    ) {
                        eventSport.push(allSport[j])
                        setSportEvent(eventSport); // Set sport data
                        setShowSportEvent(true); // Set show sport data (sport exists)
                    }
                }
            }
        }
    };

    const handleInput = (e: any) => {
        console.log(
            "---\nInput New Event:\n",
            e.target.value
        );

        setSearchField(e.target.value);

        for (var i in allEvents) {
            if (searchField === "") {
                setEventPlaceholder(event);
                setSportEventPlaceholder(sportEvent);
                setShowSportEventPlaceholder(showSportEvent);
            } else if (
                allEvents[i].names.join(' / ').toLowerCase()
                    .includes(searchField.toLowerCase())
            ) {
                console.log(
                    "Match Inputted Event To JSON:\n",
                    `${allEvents[i].names.join(' / ')}\n---`
                );
                setEventPlaceholder(allEvents[i]); // Set event data (placeholder)
                setShowSportEventPlaceholder(false); // Set show sport data (sport !exist) (placeholder)
                for (var j in allSport) {
                    if (
                        allEvents[i].names
                            .includes(allSport[j].name)
                    ) {
                        eventSport.pop();
                        eventSport.push(allSport[j]);
                        setSportEventPlaceholder(eventSport); // Set sport data (placeholder)
                        setShowSportEventPlaceholder(true); // Set show sport data (sport exists)
                    }
                }
            }
        }
    };

    const executeInput = () => {
        if (searchField === "") {
            setEvent(event);
            setSportEvent(sportEvent);
            setShowSportEvent(showSportEvent);
        } else {
            setEvent(eventPlaceholder); // Set event data
            setSportEvent(sportEventPlaceholder);  // Set sport data
            setShowSportEvent(showSportEventPlaceholder); // Set show sport data (sport !exist/exists)
        }
    };

    return (
        <>
            <InstantGramSearchTile
                funcSelect={handleSelect}
                funcInput={handleInput}
                funcButton={executeInput}
            />
            <InstantGramResultTile
                event={event}
                sportEvent={sportEvent}
                showSportEvent={showSportEvent}
            />
        </>
    );
};

export default InstantGramSearch;