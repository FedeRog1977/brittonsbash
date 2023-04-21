import { useState } from "react";
import InstantGramSearchBar from "../../../bashBlocks/components/InstantGramSearchBar";
import InstantGramTile from "../../../bashBlocks/components/InstantGramTile";
import { eventData } from "../../../data/Events";
import { sportData } from "../../../data/Sport";

const InstantGramSearch = () => {
    const allEvents: any[] = [];

    for (var a in eventData[2023]) {
        allEvents.push(eventData[2023][a]);
    }

    for (var b in eventData[2022]) {
        allEvents.push(eventData[2022][b]);
    }

    for (var c in eventData[2021]) {
        allEvents.push(eventData[2021][c]);
    }

    for (var d in eventData[2020]) {
        allEvents.push(eventData[2020][d]);
    }

    const allSport: any[] = [];

    for (var z in sportData[2023].projects) {
        allSport.push(sportData[2023].projects[z]);
    }

    for (var y in sportData[2022].projects) {
        allSport.push(sportData[2022].projects[y]);
    }

    for (var x in sportData[2021].projects) {
        allSport.push(sportData[2021].projects[x]);
    }

    for (var w in sportData[2020].projects) {
        allSport.push(sportData[2020].projects[w]);
    }

    const eventSport: any[] = [];

    const initialEventHaveSport = allEvents[0].routeNames.includes(allSport[0].routeName);
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
                allEvents[i].nameSuffix.toLowerCase()
                    .includes((e.target.value).toLowerCase())
            ) {
                console.log(
                    "Match Selected Event To JSON:\n",
                    `${allEvents[i].nameSuffix}\n---`
                );
                setEvent(allEvents[i]);
                setShowSportEvent(false);
                for (var j in allSport) {
                    if (
                        allEvents[i].routeNames
                            .includes(allSport[j].routeName)
                    ) {
                        eventSport.push(allSport[j])
                        setSportEvent(eventSport);
                        setShowSportEvent(true);
                        console.log(
                            allEvents[i],
                            allSport[j],
                            eventSport
                        );
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
        eventSport.pop();

        for (var i in allEvents) {
            if (searchField === "") {
                setEventPlaceholder(event);
                setSportEventPlaceholder(sportEvent);
                setShowSportEventPlaceholder(showSportEvent);
            } else if (
                allEvents[i].nameSuffix.toLowerCase()
                    .includes(searchField.toLowerCase())
            ) {
                console.log(
                    "Match Inputted Event To JSON:\n",
                    `${allEvents[i].nameSuffix}\n---`
                );
                setEventPlaceholder(allEvents[i]);
                setShowSportEventPlaceholder(false);
                for (var j in allSport) {
                    if (
                        allEvents[i].routeNames
                            .includes(allSport[j].routeName)
                    ) {
                        eventSport.push(allSport[j]);
                        setSportEventPlaceholder(eventSport);
                        setShowSportEventPlaceholder(true);
                        console.log(
                            event,
                            sportEvent,
                            showSportEvent
                        );
                    }
                }
            }
        }
    };

    const executeInput = () => {
        setEvent(eventPlaceholder);
        setSportEvent(sportEventPlaceholder);
        setShowSportEvent(showSportEventPlaceholder);
    };

    return (
        <div>
            <InstantGramSearchBar
                funcSelect={handleSelect}
                funcInput={handleInput}
                funcButton={executeInput}
            />
            <InstantGramTile
                event={event}
                sportEvent={sportEvent}
                showSportEvent={showSportEvent}
            />
        </div>
    );
};

export default InstantGramSearch;