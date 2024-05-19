import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import { useShowElement, useScreenWidth } from '../../../../scripts'
import { Grid, Spacing } from '../../basics'

export type HeaderMobileProps = {
    funcMobile: () => void
    funcUtilities: () => void
}

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
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <Grid alignColumns="auto auto" alignItems="center">
                        <Grid columnItem={[1, 2]}>
                            {isMobile ? (
                                <img
                                    className={styles.headerImage}
                                    src="https://lewisbritton.com/images/logo/bash-logo.png"
                                    alt="header-logo"
                                />
                            ) : (
                                <Grid
                                    alignColumns="auto auto"
                                    columnGap={15}
                                    justifyContent="start"
                                    alignItems="center"
                                >
                                    <Grid columnItem={[1, 2]}>
                                        <img
                                            className={styles.headerImage}
                                            src="https://lewisbritton.com/images/logo/bash-logo.png"
                                            alt="header-logo"
                                        />
                                    </Grid>
                                    <Grid columnItem={[2, 2]}>
                                        <div className={styles.headerLogo}>
                                            BrittonsBashRC
                                        </div>
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                        <Grid columnItem={[2, 2]} textAlign="right">
                            {isMobile ? (
                                <FontAwesomeIcon
                                    icon={faBars}
                                    onClick={() => {
                                        setShowMobile(!showMobile)
                                        resetHeader()
                                    }}
                                />
                            ) : (
                                <Grid
                                    alignColumns="auto  auto  auto  auto  auto  auto"
                                    justifyContent="end"
                                    columnGap={15}
                                >
                                    <Grid columnItem={[1, 6]}>
                                        <Link to="/">Home</Link>
                                    </Grid>
                                    <Grid columnItem={[2, 6]}>
                                        <Link to="/academia">Academia</Link>
                                    </Grid>
                                    <Grid columnItem={[3, 6]}>
                                        <Link to="/employment">Employment</Link>
                                    </Grid>
                                    <Grid columnItem={[4, 6]}>
                                        <Link to="/library">Library</Link>
                                    </Grid>
                                    <Grid columnItem={[5, 6]}>
                                        <Link
                                            to="#"
                                            onClick={() => {
                                                setShowBlog(!showBlog)
                                                setShowUtilities(false)
                                            }}
                                        >
                                            Blog
                                        </Link>
                                    </Grid>
                                    <Grid columnItem={[6, 6]}>
                                        <Link
                                            to="#"
                                            onClick={() => {
                                                setShowUtilities(!showUtilities)
                                                setShowBlog(false)
                                            }}
                                        >
                                            Utilities
                                        </Link>
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </div>
            </div>
            {Boolean(showMobile && isMobile) && (
                <div className={styles.subheader}>
                    <div className={styles.subheaderContent}>
                        <Spacing mY={20}>
                            <Grid alignRows="auto" rowGap={10}>
                                <Grid rowItem={[1, 2]}>
                                    <Grid
                                        alignColumns="auto auto auto auto"
                                        justifyContent="end"
                                        columnGap={10}
                                    >
                                        <Grid columnItem={[1, 4]}>
                                            <Link to="/">Home</Link>
                                        </Grid>
                                        <Grid columnItem={[2, 4]}>
                                            <Link to="/academia">Academia</Link>
                                        </Grid>
                                        <Grid columnItem={[3, 4]}>
                                            <Link to="/employment">
                                                Employment
                                            </Link>
                                        </Grid>
                                        <Grid columnItem={[4, 4]}>
                                            <Link to="/library">Library</Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid rowItem={[2, 2]}>
                                    <Grid
                                        alignColumns="auto auto"
                                        justifyContent="end"
                                        columnGap={10}
                                    >
                                        <Grid columnItem={[1, 4]}>
                                            <Link
                                                to="#"
                                                onClick={() => {
                                                    setShowMobile(false)
                                                    setShowBlog(!showBlog)
                                                    setShowUtilities(false)
                                                }}
                                            >
                                                Blog
                                            </Link>
                                        </Grid>
                                        <Grid columnItem={[2, 4]}>
                                            <Link
                                                to="#"
                                                onClick={() => {
                                                    setShowMobile(false)
                                                    setShowBlog(false)
                                                    setShowUtilities(
                                                        !showUtilities
                                                    )
                                                }}
                                            >
                                                Utilities
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Spacing>
                    </div>
                </div>
            )}
            {showBlog && (
                <div className={styles.subheader}>
                    <div className={styles.subheaderContent}>
                        <Spacing mY={20}>
                            <Grid alignRows="auto" rowGap={10}>
                                <Grid rowItem={[1, 4]}>
                                    <Grid
                                        alignColumns="auto auto auto"
                                        justifyContent="end"
                                        columnGap={10}
                                    >
                                        <Grid columnItem={[1, 3]}>
                                            <Link
                                                to="/blog/instant-gram"
                                                onClick={resetHeader}
                                            >
                                                Instant Gram
                                            </Link>
                                        </Grid>
                                        <Grid columnItem={[2, 3]}>
                                            <Link
                                                to="/blog/sport"
                                                onClick={resetHeader}
                                            >
                                                Sport
                                            </Link>
                                        </Grid>
                                        <Grid columnItem={[3, 3]}>
                                            <Link
                                                to="/blog/brittons-foodrc"
                                                onClick={resetHeader}
                                            >
                                                BrittonsFoodRC
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid rowItem={[2, 4]}>
                                    <Grid
                                        alignColumns="auto auto"
                                        justifyContent="end"
                                        columnGap={10}
                                    >
                                        <Grid columnItem={[1, 2]}>
                                            <Link
                                                to="/blog/allroad"
                                                onClick={resetHeader}
                                            >
                                                allroad
                                            </Link>
                                        </Grid>
                                        <Grid columnItem={[2, 2]}>
                                            <Link
                                                to="/blog/gentlemen-who-cafe"
                                                onClick={resetHeader}
                                            >
                                                Gentlemen Who Caf&eacute;
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid rowItem={[3, 4]}>
                                    <Grid
                                        alignColumns="auto auto auto"
                                        justifyContent="end"
                                        columnGap={10}
                                    >
                                        <Grid columnItem={[1, 3]}>
                                            <Link
                                                to="/blog/ricing"
                                                onClick={resetHeader}
                                            >
                                                Ricing
                                            </Link>
                                        </Grid>
                                        <Grid columnItem={[2, 3]}>
                                            <Link
                                                to="/blog/think-flow"
                                                onClick={resetHeader}
                                            >
                                                ThinkFlow
                                            </Link>
                                        </Grid>
                                        <Grid columnItem={[3, 3]}>
                                            <Link
                                                to="/blog/founding-fathers"
                                                onClick={resetHeader}
                                            >
                                                Founding Fathers
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid rowItem={[4, 4]}>
                                    <Grid
                                        alignColumns="auto auto auto"
                                        justifyContent="end"
                                        columnGap={10}
                                    >
                                        <Grid columnItem={[1, 3]}>
                                            <Link
                                                to="/blog/media"
                                                onClick={resetHeader}
                                            >
                                                Media
                                            </Link>
                                        </Grid>
                                        <Grid columnItem={[2, 3]}>
                                            <Link
                                                to="/blog/miami-vice"
                                                onClick={resetHeader}
                                            >
                                                Miami Vice
                                            </Link>
                                        </Grid>
                                        <Grid columnItem={[3, 3]}>
                                            <Link
                                                to="/blog/graphic-design"
                                                onClick={resetHeader}
                                            >
                                                Graphic Design
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Spacing>
                    </div>
                </div>
            )}
            {showUtilities && (
                <div className={styles.subheader}>
                    <div className={styles.subheaderContent}>
                        <Spacing mY={20}>
                            <Grid
                                alignColumns="auto auto"
                                justifyContent="end"
                                columnGap={10}
                            >
                                <Grid columnItem={[1, 2]}>
                                    <Link
                                        to="/utils/weather"
                                        onClick={resetHeader}
                                    >
                                        Weather
                                    </Link>
                                </Grid>
                                <Grid columnItem={[2, 2]}>
                                    <Link
                                        to="/utils/conquest"
                                        onClick={resetHeader}
                                    >
                                        Conquest
                                    </Link>
                                </Grid>
                            </Grid>
                        </Spacing>
                    </div>
                </div>
            )}
        </>
    )
}
