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

    const [is2024, setIs2024] = useState(false)
    const [is2023, setIs2023] = useState(false)
    const [is2022, setIs2022] = useState(false)
    const [is2021, setIs2021] = useState(false)
    const [is2020, setIs2020] = useState(false)

    useEffect(() => {
        if (location.search === '') {
            for (var i in allSport) {
                if (eventsParsed[0].names.includes(allSport[i].name)) {
                    sportOnEvent.push(allSport[i])
                    setSport(sportOnEvent)
                    setShowSport(true)
                }
            }
        } else {
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

    const handleCategory = (value: string) => {
        if (value === '2024') {
            setIs2024(true)
            setIs2023(false)
            setIs2022(false)
            setIs2021(false)
            setIs2020(false)
        }
        if (value === '2023') {
            setIs2024(false)
            setIs2023(true)
            setIs2022(false)
            setIs2021(false)
            setIs2020(false)
        }
        if (value === '2022') {
            setIs2024(false)
            setIs2023(false)
            setIs2022(true)
            setIs2021(false)
            setIs2020(false)
        }
        if (value === '2021') {
            setIs2024(false)
            setIs2023(false)
            setIs2022(false)
            setIs2021(true)
            setIs2020(false)
        }
        if (value === '2020') {
            setIs2024(false)
            setIs2023(false)
            setIs2022(false)
            setIs2021(false)
            setIs2020(true)
        }
    }

    return {
        url,
        handleCategory,
        handleInput,
        executeInput,
        handleSelect,
        event,
        sport,
        showSport,
        is2024,
        is2023,
        is2022,
        is2021,
        is2020,
    }
}
