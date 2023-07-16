import { FC } from 'react'
import { Link } from 'react-router-dom'
import { HeaderMobileProps } from '..'
import { useScreenWidth } from '../../../../scripts'

export const HeaderMobile: FC<HeaderMobileProps> = ({
    ...props
}: HeaderMobileProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            {isMobile && (
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
                                    <span onClick={props.funcMobile}>Blog</span>
                                </li>
                                <li>
                                    <span onClick={props.funcUtilities}>
                                        Utilities
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}
