import { getResponse } from '../scripts'

export const useHills = () => {
    getResponse(
        'https://raw.githubusercontent.com/FedeRog1977/brittonsbash-content/master/data/hills.data.json',
        'GET',
        undefined,
        'hills',
        true
    )
}