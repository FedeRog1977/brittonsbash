const refactorEvent = (
    { event, sportEvent, showSportEvent }: any
) => {
    const refactoredEvent: any[] = [];
    refactoredEvent.pop();

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

    for (var i in sportEvent) {
        distances.push(`${sportEvent[i].dist.toLocaleString("en-UK")}mi`);
        elevs.push(`${sportEvent[i].elev.toLocaleString("en-UK")}ft`);
        times.push(`${sportEvent[i].time}`);
        for (var k in sportEvent[i].islands) {
            islandsS.push(sportEvent[i].islands[k]);
        }
        for (var l in sportEvent[i].munros) {
            munrosS.push(sportEvent[i].munros[l]);
        }
        for (var m in sportEvent[i].munroTops) {
            munroTopsS.push(sportEvent[i].munroTops[m]);
        }
        for (var n in sportEvent[i].corbetts) {
            corbettsS.push(sportEvent[i].corbetts[n]);
        }
        for (var o in sportEvent[i].corbettTops) {
            corbettTopsS.push(sportEvent[i].corbettTops[o]);
        }
        for (var p in sportEvent[i].grahams) {
            grahamsS.push(sportEvent[i].grahams[p]);
        }
        for (var q in sportEvent[i].subTwos) {
            subTwosS.push(sportEvent[i].subTwos[q]);
        }
        for (var r in sportEvent[i].donalds) {
            donaldsS.push(sportEvent[i].donalds[r]);
        }
    }

    var eventPrefix = event.prefix;
    var eventNames = event.names.join(' / ');
    var eventStartDate = event.startDate;
    var eventEndDate = event.endDate;
    var eventDescription = event.description;
    var eventImages = event.images;
    var eventYouthHostels = event.youthHostels.join(', ');
    var sportDist = distances.join(', ');
    var sportElev = elevs.join(', ');
    var sportTime = times.join(', ');
    var sportIslands = islandsS.join(', ');
    var sportMunros = munrosS.join(', ')
    var sportMunroTops = munroTopsS.join(', ');
    var sportCorbetts = corbettsS.join(', ');
    var sportCorbettTops = corbettTopsS.join(', ');
    var sportGrahams = grahamsS.join(', ');
    var sportSubTwos = subTwosS.join(', ');
    var sportDonalds = donaldsS.join(', ');

    refactoredEvent.push(
        {
            eventPrefix,
            eventNames,
            eventStartDate,
            eventEndDate,
            eventDescription,
            eventImages,
            eventYouthHostels,
            showSportEvent,
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
        }
    );

    console.log('Refactored Event:\n', refactoredEvent);

    return refactoredEvent;
};

export default refactorEvent;