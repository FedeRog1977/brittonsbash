import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import '../styles/header-footer.styles.scss'
import { useDropDown, useScreenWidth } from '../../../scripts'
import { HeaderMobile, SubHeaderBlog, SubHeaderUtilities } from '.'

export const Header = () => {
    const { isMobile } = useScreenWidth()
    const { showDropDown: showMobile, setShowDropDown: setShowMobile } =
        useDropDown()
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
                        <ul>
                            <FontAwesomeIcon
                                icon={faBars}
                                onClick={() => setShowMobile(!showMobile)}
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
            {showMobile && (
                <HeaderMobile
                    funcMobile={() => setShowBlog(!showBlog)}
                    funcUtilities={() => setShowUtilities(!showUtilities)}
                />
            )}
            {showBlog && <SubHeaderBlog />}
            {showUtilities && <SubHeaderUtilities />}
        </>
    )
}
