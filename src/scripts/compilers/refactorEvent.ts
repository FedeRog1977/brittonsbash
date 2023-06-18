import { sum } from '../formatters/sum'
import { toFeet } from '../formatters/toFeet'
import { toMiles } from '../formatters/toMiles'

const refactorEvent = ({ event, sportEvent, showSportEvent }: any) => {
    const names: any[] = []
    const distances: any[] = []
    const elevations: any[] = []
    const times: any[] = []
    const islandSetAggregate: any[] = []
    const munroSetAggregate: any[] = []
    const munroTopSetAggregate: any[] = []
    const corbettSetAggregate: any[] = []
    const corbettTopSetAggregate: any[] = []
    const grahamSetAggregate: any[] = []
    const subTwoSetAggregate: any[] = []
    const donaldSetAggregate: any[] = []

    names.pop()
    distances.pop()
    elevations.pop()
    times.pop()
    islandSetAggregate.pop()
    munroSetAggregate.pop()
    munroTopSetAggregate.pop()
    corbettSetAggregate.pop()
    corbettTopSetAggregate.pop()
    grahamSetAggregate.pop()
    subTwoSetAggregate.pop()
    donaldSetAggregate.pop()

    var refKey = 0

    event.names.forEach((name: string) => {
        refKey = refKey + 1
        names.push({
            name: name,
            refKey: refKey,
        })
    })

    sportEvent.forEach((event: any) => {
        distances.push(event.dist)
        elevations.push(event.elev)
        times.push(event.time)
        event.islands.forEach((islandSet: string) => {
            islandSetAggregate.push(islandSet)
        })
        event.munros.forEach((munroSet: string) => {
            munroSetAggregate.push(munroSet)
        })
        event.munroTops.forEach((munroTopSet: string) => {
            munroTopSetAggregate.push(munroTopSet)
        })
        event.corbetts.forEach((corbettSet: string) => {
            corbettSetAggregate.push(corbettSet)
        })
        event.corbettTops.forEach((corbettTopSet: string) => {
            corbettTopSetAggregate.push(corbettTopSet)
        })
        event.grahams.forEach((grahamSet: string) => {
            grahamSetAggregate.push(grahamSet)
        })
        event.subTwos.forEach((subTwoSet: string) => {
            subTwoSetAggregate.push(subTwoSet)
        })
        event.donalds.forEach((donaldSet: string) => {
            donaldSetAggregate.push(donaldSet)
        })
    })

    const refactoredEvent = {
        prefix: event.prefix,
        names,
        startDate: event.startDate,
        endDate: event.endDate,
        description: event.description,
        images: event.images,
        youthHostels: event.youthHostels.join(', '),
        showSportEvent,
        distance: sportEvent && toMiles(distances.reduce(sum)),
        elevation: toFeet(elevations.reduce(sum)),
        time: times.join(', '),
        islands: islandSetAggregate.join(', '),
        munros: munroSetAggregate.join(', '),
        munroTops: munroTopSetAggregate.join(', '),
        corbetts: corbettSetAggregate.join(', '),
        corbettTops: corbettTopSetAggregate.join(', '),
        grahams: grahamSetAggregate.join(', '),
        subTwos: subTwoSetAggregate.join(', '),
        donalds: donaldSetAggregate.join(', '),
    }

    console.log('Refactored Event:\n\n', refactoredEvent)
    return refactoredEvent
}

export default refactorEvent
