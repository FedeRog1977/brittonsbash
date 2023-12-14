import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import { useShowElement, useScreenWidth } from '../../../../scripts'
import logo from '../../../../media/images/logo/bash-logo.png'
import { Grid, Spacing } from '../../basics'

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
            <header className={styles.header}>
                <Spacing pX={isMobile ? 40 : 150} pY={50}>
                    <Grid alignColumns="auto auto" alignItems="center">
                        <Grid columnItem={[1, 2]}>
                            {isMobile ? (
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{ height: '35px' }}
                                />
                            ) : (
                                <Grid
                                    alignColumns="auto auto"
                                    columnGap={20}
                                    justifyContent="start"
                                    alignItems="center"
                                >
                                    <Grid columnItem={[1, 2]}>
                                        <img
                                            src={logo}
                                            alt="logo"
                                            style={{ height: '35px' }}
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
                            <div className={styles.headerNavigation}>
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
                                        columnGap={10}
                                    >
                                        <Grid columnItem={[1, 6]}>
                                            <Link to="/">Home</Link>
                                        </Grid>
                                        <Grid columnItem={[2, 6]}>
                                            <Link to="/academia">Academia</Link>
                                        </Grid>
                                        <Grid columnItem={[3, 6]}>
                                            <Link to="/employment">
                                                Employment
                                            </Link>
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
                                                    setShowUtilities(
                                                        !showUtilities
                                                    )
                                                    setShowBlog(false)
                                                }}
                                            >
                                                Utilities
                                            </Link>
                                        </Grid>
                                    </Grid>
                                )}
                            </div>
                        </Grid>
                    </Grid>
                </Spacing>
            </header>
            {Boolean(showMobile && isMobile) && (
                <div className={styles.headerSub}>
                    <Spacing pX={isMobile ? 40 : 150} pY={40}>
                        <div className={styles.headerNavigation}>
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
                        </div>
                    </Spacing>
                </div>
            )}
            {showBlog && (
                <div className={styles.headerSub}>
                    <Spacing pX={isMobile ? 40 : 150} pY={40}>
                        <div className={styles.headerNavigation}>
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
                        </div>
                    </Spacing>
                </div>
            )}
            {showUtilities && (
                <div className={styles.headerSub}>
                    <Spacing pX={isMobile ? 40 : 150} pY={40}>
                        <div className={styles.headerNavigation}>
                            <Grid alignRows="auto" rowGap={10}>
                                <Grid rowItem={[1, 2]}>
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
                                </Grid>
                                <Grid rowItem={[2, 2]}>
                                    <Grid
                                        alignColumns="auto"
                                        justifyContent="end"
                                        columnGap={10}
                                    >
                                        <Grid columnItem={[1, 1]}>
                                            <Link
                                                to="/utils/bash-blocks"
                                                onClick={resetHeader}
                                            >
                                                BashBlocks
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Spacing>
                </div>
            )}
        </>
    )
}
