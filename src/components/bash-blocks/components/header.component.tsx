import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import '../styles/header-footer.styles.scss'
import { useShowElement, useScreenWidth } from '../../../scripts'

export const Header = () => {
    const { isMobile } = useScreenWidth()
    const { showElement: showMobile, setShowElement: setShowMobile } =
        useShowElement()
    const { showElement: showBlog, setShowElement: setShowBlog } =
        useShowElement()
    const { showElement: showUtilities, setShowElement: setShowUtilities } =
        useShowElement()

    const resetHeader = () => {
        setShowBlog(false)
        setShowUtilities(false)
    }

    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <ul>BrittonsBashRC</ul>
                </div>
                <div className="header-navigation">
                    {isMobile ? (
                        <ul>
                            <FontAwesomeIcon
                                icon={faBars}
                                onClick={() => {
                                    setShowMobile(!showMobile)
                                    resetHeader()
                                }}
                            />
                        </ul>
                    ) : (
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/academia">Academia</Link>
                                </li>
                                <li>
                                    <Link to="/employment">Employment</Link>
                                </li>
                                <li>
                                    <Link to="/library">Library</Link>
                                </li>
                                <li>|</li>
                                <li>
                                    <span
                                        onClick={() => {
                                            setShowBlog(!showBlog)
                                            setShowUtilities(false)
                                        }}
                                    >
                                        Blog
                                    </span>
                                </li>
                                <li>
                                    <span
                                        onClick={() => {
                                            setShowBlog(false)
                                            setShowUtilities(!showUtilities)
                                        }}
                                    >
                                        Utilities
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            </header>
            {Boolean(showMobile && isMobile) && (
                <div className="sub-header-mobile">
                    <div className="sub-header-navigation-mobile">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/academia">Academia</Link>
                                </li>
                                <li>
                                    <Link to="/employment">Employment</Link>
                                </li>
                                <li>
                                    <Link to="/library">Library</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span
                                        onClick={() => {
                                            setShowBlog(!showBlog)
                                            setShowUtilities(false)
                                        }}
                                    >
                                        Blog
                                    </span>
                                </li>
                                <li>
                                    <span
                                        onClick={() => {
                                            setShowBlog(false)
                                            setShowUtilities(!showUtilities)
                                        }}
                                    >
                                        Utilities
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
            {showBlog && (
                <div
                    className={`sub-header${isMobile ? '-mobile' : ''}`}
                    style={{
                        borderTop: isMobile
                            ? '0.75px solid var(--light-grey)'
                            : 'none',
                    }}
                >
                    <div
                        className={`sub-header-navigation${
                            isMobile ? '-mobile' : ''
                        }`}
                    >
                        <nav>
                            {isMobile ? (
                                <>
                                    <ul>
                                        <li>
                                            <Link
                                                to="/blog/instant-gram"
                                                onClick={resetHeader}
                                            >
                                                Instant Gram
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/sport"
                                                onClick={resetHeader}
                                            >
                                                Sport
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/brittons-foodrc"
                                                onClick={resetHeader}
                                            >
                                                BrittonsFoodRC
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/allroad"
                                                onClick={resetHeader}
                                            >
                                                allroad
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/gentlemen-who-cafe"
                                                onClick={resetHeader}
                                            >
                                                Gentlemen Who Caf&eacute;
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link
                                                to="/blog/ricing"
                                                onClick={resetHeader}
                                            >
                                                Ricing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/think-flow"
                                                onClick={resetHeader}
                                            >
                                                ThinkFlow
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/founding-fathers"
                                                onClick={resetHeader}
                                            >
                                                Founding Fathers
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link
                                                to="/blog/media"
                                                onClick={resetHeader}
                                            >
                                                Media
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/miami-vice"
                                                onClick={resetHeader}
                                            >
                                                Miami Vice
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/graphic-design"
                                                onClick={resetHeader}
                                            >
                                                Graphic Design
                                            </Link>
                                        </li>
                                    </ul>
                                </>
                            ) : (
                                <ul>
                                    <li>
                                        <Link
                                            to="/blog/instant-gram"
                                            onClick={resetHeader}
                                        >
                                            Instant Gram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/sport"
                                            onClick={resetHeader}
                                        >
                                            Sport
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/brittons-foodrc"
                                            onClick={resetHeader}
                                        >
                                            BrittonsFoodRC
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/allroad"
                                            onClick={resetHeader}
                                        >
                                            allroad
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/gentlemen-who-cafe"
                                            onClick={resetHeader}
                                        >
                                            Gentlemen Who Caf&eacute;
                                        </Link>
                                    </li>
                                    <li>|</li>
                                    <li>
                                        <Link
                                            to="/blog/ricing"
                                            onClick={resetHeader}
                                        >
                                            Ricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/think-flow"
                                            onClick={resetHeader}
                                        >
                                            ThinkFlow
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/founding-fathers"
                                            onClick={resetHeader}
                                        >
                                            Founding Fathers
                                        </Link>
                                    </li>
                                    <li>|</li>
                                    <li>
                                        <Link
                                            to="/blog/media"
                                            onClick={resetHeader}
                                        >
                                            Media
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/miami-vice"
                                            onClick={resetHeader}
                                        >
                                            Miami Vice
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/graphic-design"
                                            onClick={resetHeader}
                                        >
                                            Graphic Design
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </nav>
                    </div>
                </div>
            )}
            {showUtilities && (
                <div
                    className={`sub-header${isMobile ? '-mobile' : ''}`}
                    style={{
                        borderTop: isMobile
                            ? '0.75px solid var(--light-grey)'
                            : 'none',
                    }}
                >
                    <div
                        className={`sub-header-navigation${
                            isMobile ? '-mobile' : ''
                        }`}
                    >
                        <nav>
                            {isMobile ? (
                                <>
                                    <ul>
                                        <li>
                                            <Link
                                                to="/utils/weather"
                                                onClick={resetHeader}
                                            >
                                                Weather
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/utils/conquest"
                                                onClick={resetHeader}
                                            >
                                                Conquest
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link
                                                to="/utils/bash-blocks"
                                                onClick={resetHeader}
                                            >
                                                BashBlocks
                                            </Link>
                                        </li>
                                    </ul>
                                </>
                            ) : (
                                <ul>
                                    <li>
                                        <Link
                                            to="/utils/weather"
                                            onClick={resetHeader}
                                        >
                                            Weather
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/utils/conquest"
                                            onClick={resetHeader}
                                        >
                                            Conquest
                                        </Link>
                                    </li>
                                    <li>|</li>
                                    <li>
                                        <Link
                                            to="/utils/bash-blocks"
                                            onClick={resetHeader}
                                        >
                                            BashBlocks
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}
