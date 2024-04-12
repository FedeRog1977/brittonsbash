import { useEffect, useState } from 'react'
import { getResponse, getSessionItem } from '../scripts'

export const useRegions = () => {
    getResponse(
        'https://raw.githubusercontent.com/FedeRog1977/brittonsbash-content/master/data/regions.data.json',
        'GET',
        undefined,
        'regions',
        true
    )
}
