import { useEffect, useState } from 'react'
import { getResponse, getSessionItem } from '../../scripts'

export const useRegions = () => {
    const [regions, useRegions] = useState<[]>([])

    useEffect(() => {
        const setResults = () => {
            useRegions(getSessionItem('response-regions'))
        }

        getResponse(
            'https://raw.githubusercontent.com/FedeRog1977/brittonsbash-content/master/data/content/regions.data.json',
            'GET',
            setResults,
            'regions',
            true
        )
    }, [])

    return { regions }
}
