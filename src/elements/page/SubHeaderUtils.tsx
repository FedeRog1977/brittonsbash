import { Link } from "react-router-dom";

const SubHeaderUtils = () => {
    return (
        <div className={"subHeader"}>
            <div className={"subHeaderNavigation"}>
                <nav>
                    <ul>
                        <li><Link to={"/utils/weather"}>Weather</Link></li>
                        <li><Link to={"/utils/conquest"}>Conquest</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SubHeaderUtils;