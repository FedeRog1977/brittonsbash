import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import {
    compileEvents,
    compileEventSports,
    ProjectProps,
} from '../../../../../scripts'

export const useInstantGram = () => {
    const location = useLocation()
    const [url, setUrl] = useState('')
    const [searchParamsHandler, setSearchParamsHandler] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    const { eventsParsed } = compileEvents()
    const allSport = compileEventSports()
    const sportOnEvent: ProjectProps[] = []

    const [searchField, setSearchField] = useState('')

    const [event, setEvent] = useState(eventsParsed[0])
    const [sport, setSport] = useState<ProjectProps[]>([])
    const [showSport, setShowSport] = useState(false)

    const [eventHandler, setEventHandler] = useState(event)
    const [sportHandler, setSportHandler] = useState(sport)
    const [showSportHandler, setShowSportHandler] = useState(showSport)

    useEffect(() => {
        if (location.search !== '') {
            setUrl(`${location.pathname}${location.search}`)

            for (var i in eventsParsed) {
                if (
                    location.search === `?${eventsParsed[i].id?.toLowerCase()}=`
                ) {
                    setEvent(eventsParsed[i])
                    setSport([] as ProjectProps[])
                    setShowSport(false)

                    for (var j in allSport) {
                        if (eventsParsed[i].names.includes(allSport[j].name)) {
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
            for (var i in allSport) {
                if (eventsParsed[0].names.includes(allSport[i].name)) {
                    sportOnEvent.push(allSport[i])
                    setSport(sportOnEvent)
                    setShowSport(true)
                }
            }
        }
    }, [])

    const handleInput = (e: any) => {
        setSearchField(e.target.value.toLowerCase())

        for (var i in eventsParsed) {
            if (searchField === '') {
                setEventHandler(event)
                setSportHandler(sport)
                setShowSportHandler(showSport)
            } else if (
                eventsParsed[i].names
                    .join(' - ')
                    .toLowerCase()
                    .includes(searchField)
            ) {
                setSearchParamsHandler(eventsParsed[i].id?.toLowerCase() ?? '')

                setEventHandler(eventsParsed[i])
                setSportHandler([] as ProjectProps[])
                setShowSportHandler(false)

                for (var j in allSport) {
                    if (eventsParsed[i].names.includes(allSport[j].name)) {
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
        for (var i in eventsParsed) {
            if (
                eventsParsed[i].names
                    .join(' - ')
                    .includes(e.currentTarget.value)
            ) {
                setEvent(eventsParsed[i])
                setSport([] as ProjectProps[])
                setShowSport(false)

                const search = `?${eventsParsed[i].id?.toLowerCase()}=`
                setUrl(`${location.pathname}${search}`)
                setSearchParams(eventsParsed[i].id?.toLowerCase())

                for (var j in allSport) {
                    if (eventsParsed[i].names.includes(allSport[j].name)) {
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
