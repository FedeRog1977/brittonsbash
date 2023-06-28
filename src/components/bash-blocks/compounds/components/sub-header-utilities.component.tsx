import { Link } from 'react-router-dom'
import { useScreenWidth } from '../../../../scripts'

export const SubHeaderUtilities = () => {
    const { isMobile } = useScreenWidth()

    return (
        <div
            className={`sub-header${isMobile ? '-mobile' : ''}`}
            style={{
                borderTop: isMobile ? '0.75px solid var(--light-grey)' : 'none',
            }}
        >
            <div
                className={`sub-header-navigation${isMobile ? '-mobile' : ''}`}
            >
                <nav>
                    {isMobile ? (
                        <>
                            <ul>
                                <li>
                                    <Link to="/utils/weather">Weather</Link>
                                </li>
                                <li>
                                    <Link to="/utils/conquest">Conquest</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to="/utils/bash-blocks">
                                        BashBlocks
                                    </Link>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <ul>
                            <li>
                                <Link to="/utils/weather">Weather</Link>
                            </li>
                            <li>
                                <Link to="/utils/conquest">Conquest</Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link to="/utils/bash-blocks">BashBlocks</Link>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </div>
    )
}
