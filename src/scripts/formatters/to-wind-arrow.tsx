import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export function toWindArrow(bearing: number) {
    const angle = -45 + 180 + bearing

    return (
        <div style={{ transform: `rotate(${angle}deg)` }}>
            <FontAwesomeIcon icon={faLocationArrow} />
        </div>
    )
}
