import { useState } from 'react'

export const useDropDown = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    return { showDropDown, setShowDropDown }
}
