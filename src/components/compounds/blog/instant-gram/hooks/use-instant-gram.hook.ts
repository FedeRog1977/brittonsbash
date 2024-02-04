import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import {
    compileEventEvents,
    compileEventSports,
    ProjectProps,
} from '../../../../../scripts'

export const useInstantGram = () => {
    const location = useLocation()
    const [url, setUrl] = useState('')
    const [searchParamsHandler, setSearchParamsHandler] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    const allEvents = compileEventEvents()
    const allSport = compileEventSports()
    const sportOnEvent: ProjectProps[] = []

    const [searchField, setSearchField] = useState('')

    const [event, setEvent] = useState(allEvents[0])
    const [sport, setSport] = useState([] as ProjectProps[])
    const [showSport, setShowSport] = useState(false)

    const [eventHandler, setEventHandler] = useState(event)
    const [sportHandler, setSportHandler] = useState(sport)
    const [showSportHandler, setShowSportHandler] = useState(showSport)

    useEffect(() => {
        if (location.search !== '') {
            setUrl(`${location.pathname}${location.search}`)

            for (var i in allEvents) {
                if (location.search === `?${allEvents[i].id?.toLowerCase()}=`) {
                    setEvent(allEvents[i])
                    setSport([] as ProjectProps[])
                    setShowSport(false)

                    for (var j in allSport) {
                        if (allEvents[i].names.includes(allSport[j].name)) {
                            sportOnEvent.push(allSport[j])
                            setSport(sportOnEvent)
                            setShowSport(true)
                        }
                    }
                }
            }
        }
    }, [searchParams])

    useEffect(() => {
        if (location.search === '') {
            for (var j in allSport) {
                if (allEvents[0].names.includes(allSport[j].name)) {
                    sportOnEvent.push(allSport[j])
                    setSport(sportOnEvent)
                    setShowSport(true)
                }
            }
        }
    }, [])

    const handleInput = (e: any) => {
        setSearchField(e.target.value.toLowerCase())

        for (var i in allEvents) {
            if (searchField === '') {
                setEventHandler(event)
                setSportHandler(sport)
                setShowSportHandler(showSport)
            } else if (
                allEvents[i].names
                    .join(' - ')
                    .toLowerCase()
                    .includes(searchField)
            ) {
                setSearchParamsHandler(allEvents[i].id?.toLowerCase() ?? '')

                setEventHandler(allEvents[i])
                setSportHandler([] as ProjectProps[])
                setShowSportHandler(false)

                for (var j in allSport) {
                    if (allEvents[i].names.includes(allSport[j].name)) {
                        sportOnEvent.push(allSport[j])
                        setSportHandler(sportOnEvent)
                        setShowSportHandler(true)
                    }
                }
            }
        }
    }

    const executeInput = () => {
        if (searchField === '') {
            setEvent(event)
            setSport(sport)
            setShowSport(showSport)
        } else {
            setSearchParams(searchParamsHandler)
            setEvent(eventHandler)
            setSport(sportHandler)
            setShowSport(showSportHandler)
        }
    }

    const handleSelect = (e: any) => {
        for (var i in allEvents) {
            if (
                allEvents[i].names.join(' - ').includes(e.currentTarget.value)
            ) {
                setEvent(allEvents[i])
                setSport([] as ProjectProps[])
                setShowSport(false)

                const search = `?${allEvents[i].id?.toLowerCase()}=`
                setUrl(`${location.pathname}${search}`)
                setSearchParams(allEvents[i].id?.toLowerCase())

                for (var j in allSport) {
                    if (allEvents[i].names.includes(allSport[j].name)) {
                        sportOnEvent.push(allSport[j])
                        setSport(sportOnEvent)
                        setShowSport(true)
                    }
                }
            }
        }
    }

    return {
        url,
        handleInput,
        executeInput,
        handleSelect,
        event,
        sport,
        showSport,
    }
}
