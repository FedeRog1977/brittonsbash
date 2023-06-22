import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './styles/header-footer.styles.css'
import { SubHeaderBlog, SubHeaderUtilities } from '.'
import { useDropDown, useMobile } from '../../scripts'

export const Header = () => {
    const isMobile = useMobile()
    const { showDropDown: showBlog, setShowDropDown: setShowBlog } =
        useDropDown()
    const { showDropDown: showUtilities, setShowDropDown: setShowUtilities } =
        useDropDown()

    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <ul>BrittonsBashRC</ul>
                </div>
                <div className="header-navigation">
                    {isMobile ? (
                        <>
                            <ul>
                                <FontAwesomeIcon
                                    icon={faBars}
                                    onClick={() => null}
                                />
                            </ul>
                            {/* <nav>
                                <ul>
                                    <li>...</li>
                                </ul>
                            </nav> */}
                        </>
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
                                        onClick={() => setShowBlog(!showBlog)}
                                    >
                                        Blog
                                    </span>
                                </li>
                                <li>
                                    <span
                                        onClick={() =>
                                            setShowUtilities(!showUtilities)
                                        }
                                    >
                                        Utilities
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            </header>
            {showBlog && <SubHeaderBlog />}
            {showUtilities && <SubHeaderUtilities />}
        </>
    )
}
