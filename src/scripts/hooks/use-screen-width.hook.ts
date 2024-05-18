import { useEffect, useState } from 'react'

export const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    function handleWindowSizeChange() {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    const isMobile = screenWidth <= 768

    return { screenWidth, isMobile }
}
