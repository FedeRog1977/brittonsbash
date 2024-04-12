import { getSessionItem } from '../api'

export const compileHills = () => {
    const hills = getSessionItem('response-hills')

    return hills
}
