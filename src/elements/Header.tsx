import { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "../bashBlocks/elements/Typography";
import './styles/HeaderFooter.css';
import SubHeaderBlog from "./SubHeaderBlog";
import SubHeaderUtils from "./SubHeaderUtils";

const Header = () => {
    const [showSubHeaderBlog, setShowSubHeaderBlog] = useState(false);
    const [showSubHeaderUtils, setShowSubHeaderUtils] = useState(false);

    function handleClickBlog() {
        if (showSubHeaderBlog === false) {
            setShowSubHeaderBlog(true);
            setShowSubHeaderUtils(false);
        } else {
            setShowSubHeaderBlog(false);
        }
    }

    function handleClickUtils() {
        if (showSubHeaderUtils === false) {
            setShowSubHeaderUtils(true);
            setShowSubHeaderBlog(false);
        } else {
            setShowSubHeaderUtils(false);
        }
    }

    return (
        <>
            <header className='header'>
                <div className='header-logo'>
                    {/* <img src={placeholder} alt='logo' style={{ width: 175 }}></img> */}
                    <Typography type='h3' content='BrittonsBashRC' color='#A2A2A2' />
                </div>
                <div className='header-navigation'>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/academia'>Academia</Link></li>
                            <li><Link to='/employment'>Employment</Link></li>
                            <li><Link to='/library'>Library</Link></li>
                            <li>|</li>
                            <li><a onClick={() => handleClickBlog()} href='#'>Blog</a></li>
                            <li><a onClick={() => handleClickUtils()} href='#'>Utilities</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            {showSubHeaderBlog && <SubHeaderBlog />}
            {showSubHeaderUtils && <SubHeaderUtils />}
        </>
    )
}

export default Header;