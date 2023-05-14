import { sum } from "../formatters/sum";
import { toFeet } from "../formatters/toFeet";
import { toMiles } from "../formatters/toMiles";

const refactorEvent = (
    { event, sportEvent, showSportEvent }: any
) => {
    const refactoredEvent: any[] = [];
    refactoredEvent.pop();

    const names: any[] = [];
    const distances: any[] = [];
    const elevs: any[] = [];
    const times: any[] = [];
    const islandsS: any[] = [];
    const munrosS: any[] = [];
    const munroTopsS: any[] = [];
    const corbettsS: any[] = [];
    const corbettTopsS: any[] = [];
    const grahamsS: any[] = [];
    const subTwosS: any[] = [];
    const donaldsS: any[] = [];

    names.pop();
    distances.pop();
    elevs.pop();
    times.pop();
    islandsS.pop();
    munrosS.pop();
    munroTopsS.pop();
    corbettsS.pop();
    corbettTopsS.pop();
    grahamsS.pop();
    subTwosS.pop();
    donaldsS.pop();

    var refKey = 0;

    for (var i in event.names) {
        refKey = refKey + 1;
        names.push(
            {
                name: event.names[i],
                refKey: refKey,
            }
        );
    }

    for (var j in sportEvent) {
        distances.push(sportEvent[j].dist);
        elevs.push(sportEvent[j].elev);
        times.push(sportEvent[j].time);
        for (var k in sportEvent[j].islands) {
            islandsS.push(sportEvent[j].islands[k]);
        }
        for (var l in sportEvent[j].munros) {
            munrosS.push(sportEvent[j].munros[l]);
        }
        for (var m in sportEvent[j].munroTops) {
            munroTopsS.push(sportEvent[j].munroTops[m]);
        }
        for (var n in sportEvent[j].corbetts) {
            corbettsS.push(sportEvent[j].corbetts[n]);
        }
        for (var o in sportEvent[j].corbettTops) {
            corbettTopsS.push(sportEvent[j].corbettTops[o]);
        }
        for (var p in sportEvent[j].grahams) {
            grahamsS.push(sportEvent[j].grahams[p]);
        }
        for (var q in sportEvent[j].subTwos) {
            subTwosS.push(sportEvent[j].subTwos[q]);
        }
        for (var r in sportEvent[j].donalds) {
            donaldsS.push(sportEvent[j].donalds[r]);
        }
    }

    var eventPrefix = event.prefix;
    var eventNames = names;
    var eventStartDate = event.startDate;
    var eventEndDate = event.endDate;
    var eventDescription = event.description;
    var eventImages = event.images;
    var eventYouthHostels = event.youthHostels.join(', ');
    var sportDist = toMiles(distances.reduce(sum));
    var sportElev = toFeet(elevs.reduce(sum));
    var sportTime = times.join(', ');
    var sportIslands = islandsS.join(', ');
    var sportMunros = munrosS.join(', ')
    var sportMunroTops = munroTopsS.join(', ');
    var sportCorbetts = corbettsS.join(', ');
    var sportCorbettTops = corbettTopsS.join(', ');
    var sportGrahams = grahamsS.join(', ');
    var sportSubTwos = subTwosS.join(', ');
    var sportDonalds = donaldsS.join(', ');

    refactoredEvent.push({
        eventPrefix,
        eventNames,
        eventStartDate,
        eventEndDate,
        eventDescription,
        eventImages,
        eventYouthHostels,
        sportDist,
        sportElev,
        sportTime,
        sportIslands,
        sportMunros,
        sportMunroTops,
        sportCorbetts,
        sportCorbettTops,
        sportGrahams,
        sportSubTwos,
        sportDonalds,
        showSportEvent,
    });

    return refactoredEvent;
};

export default refactorEvent;