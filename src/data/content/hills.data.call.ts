import { useEffect, useState } from 'react'
import { getResponse, getSessionItem } from '../../scripts'

export const useHills = () => {
    const [hills, setHills] = useState<[]>([])

    useEffect(() => {
        const setResults = () => {
            setHills(getSessionItem('response-hills'))
        }

        getResponse(
            'https://raw.githubusercontent.com/FedeRog1977/brittonsbash-content/master/data/content/hills.data.json',
            'GET',
            setResults,
            'hills',
            true
        )
    }, [])

    return { hills }
}
