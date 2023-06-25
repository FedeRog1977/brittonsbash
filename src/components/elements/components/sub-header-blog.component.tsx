import { Link } from 'react-router-dom'
import { useScreenWidth } from '../../../scripts'

export const SubHeaderBlog = () => {
    const { isMobile } = useScreenWidth()

    return (
        <div
            className={`sub-header${isMobile ? '-mobile' : null}`}
            style={{
                borderTop: isMobile ? '0.75px solid var(--light-grey)' : 'none',
            }}
        >
            <div
                className={`sub-header-navigation${
                    isMobile ? '-mobile' : null
                }`}
            >
                <nav>
                    <ul>
                        <li>
                            <Link to="/blog/instant-gram">Instant Gram</Link>
                        </li>
                        <li>
                            <Link to="/blog/sport">Sport</Link>
                        </li>
                        <li>
                            <Link to="/blog/brittons-foodrc">
                                BrittonsFoodRC
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog/allroad">allroad</Link>
                        </li>
                        <li>
                            <Link to="/blog/gentlemen-who-cafe">
                                Gentlemen Who Caf&eacute;
                            </Link>
                        </li>
                        <li>{isMobile ? <>&#8212;</> : <>|</>}</li>
                        <li>
                            <Link to="/blog/ricing">Ricing</Link>
                        </li>
                        <li>
                            <Link to="/blog/think-flow">ThinkFlow</Link>
                        </li>
                        <li>
                            <Link to="/blog/founding-fathers">
                                Founding Fathers
                            </Link>
                        </li>
                        <li>{isMobile ? <>&#8212;</> : <>|</>}</li>
                        <li>
                            <Link to="/blog/media">Media</Link>
                        </li>
                        <li>
                            <Link to="/blog/miami-vice">Miami Vice</Link>
                        </li>
                        <li>
                            <Link to="/blog/graphic-design">
                                Graphic Design
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
