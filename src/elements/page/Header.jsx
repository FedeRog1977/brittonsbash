import { useState } from "react";
import { Link } from "react-router-dom";
import SubHeaderBlog from "./SubHeaderBlog";
import SubHeaderUtils from "./SubHeaderUtils";
import placeholder from '../../media/images/placeholder.webp'

const Header = () => {
    const [showSubHeaderBlog, setShowSubHeaderBlog] = useState(false);
    const [showSubHeaderUtils, setShowSubHeaderUtils] = useState(false);

    function subHeaderClickBlog() {
        if (showSubHeaderBlog === false) {
            setShowSubHeaderBlog(true);
            setShowSubHeaderUtils(false);
        } else {
            setShowSubHeaderBlog(false);
        }
    }

    function subHeaderClickUtils() {
        if (showSubHeaderUtils === false) {
            setShowSubHeaderUtils(true);
            setShowSubHeaderBlog(false);
        } else {
            setShowSubHeaderUtils(false);
        }
    }

    return (
        <>
            <header className={"header"}>
                <div className={"headerLogo"}>
                    <img src={placeholder} alt={"logo"} style={{ width: 175 }}></img>
                </div>
                <div className={"headerNavigation"}>
                    <nav>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/academia"}>Academia</Link></li>
                            <li><Link to={"/employment"}>Employment</Link></li>
                            <li><Link to={"/library"}>Library</Link></li>
                            <li>|</li>
                            <li><a onClick={() => subHeaderClickBlog("blog")} href={"."}>Blog</a></li>
                            <li><a onClick={() => subHeaderClickUtils("utils")} href={"."}>Utilities</a></li>
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