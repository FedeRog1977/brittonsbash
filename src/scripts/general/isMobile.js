import { useEffect, useState } from "react";

function IsMobile() {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const dispWidth = width <= 768;

    return (dispWidth)
}

export const isMobile = IsMobile();