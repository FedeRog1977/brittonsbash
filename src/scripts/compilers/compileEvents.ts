import { eventData } from "../../data/general/Events";

export default function compileEvents() {
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

    console.log('All Events:\n', allEvents);

    return allEvents;
};