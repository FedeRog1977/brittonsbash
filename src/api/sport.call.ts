import { useEffect, useState } from 'react'
import { getResponse, getSessionItem } from '../scripts'

export const useSport = () => {
    getResponse(
        'https://raw.githubusercontent.com/FedeRog1977/brittonsbash-content/master/data/sport.data.json',
        'GET',
        undefined,
        'sport',
        true
    )
}
