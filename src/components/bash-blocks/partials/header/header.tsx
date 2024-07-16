import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { useShowElement, useScreenWidth } from '../../../../utils';
import { Stack } from '../../basics';

export type HeaderMobileProps = {
  funcMobile: () => void;
  funcUtilities: () => void;
};

export const Header = () => {
  const { isMobile } = useScreenWidth();

  const { showElement: showMobile, setShowElement: setShowMobile } =
    useShowElement();
  const { showElement: showBlog, setShowElement: setShowBlog } =
    useShowElement();
  const { showElement: showUtilities, setShowElement: setShowUtilities } =
    useShowElement();

  const resetHeader = () => {
    setShowBlog(false);
    setShowUtilities(false);
  };

  const toggleBlog = () => {
    setShowBlog(!showBlog);
    setShowUtilities(false);
  };

  const toggleUtilities = () => {
    setShowUtilities(!showUtilities);
    setShowBlog(false);
  };

  const toggleBlogMobile = () => {
    setShowMobile(false);
    setShowBlog(!showBlog);
    setShowUtilities(false);
  };

  const toggleUtilitiesMobile = () => {
    setShowMobile(false);
    setShowBlog(false);
    setShowUtilities(!showUtilities);
  };

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <Stack
            direction="horizontal"
            alignHorizontal="apart"
            alignVertical="center"
          >
            {isMobile ? (
              // TODO: make image component
              <img
                className={styles.headerImage}
                src="https://lewisbritton.com/images/logo/bash-logo.png"
                alt="header-logo"
              />
            ) : (
              <Stack direction="horizontal" alignVertical="center" spacing="sm">
                {/* TODO: make image component */}
                <img
                  className={styles.headerImage}
                  src="https://lewisbritton.com/images/logo/bash-logo.png"
                  alt="header-logo"
                />

                <div className={styles.headerLogo}>BrittonsBashRC</div>
              </Stack>
            )}

            {isMobile ? (
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                  setShowMobile(!showMobile);
                  resetHeader();
                }}
              />
            ) : (
              <Stack direction="horizontal" alignVertical="center" spacing="sm">
                <Link to="/">Home</Link>
                <Link to="/academia">Academia</Link>
                <Link to="/employment">Employment</Link>
                <Link to="/library">Library</Link>
                <Link to="#" onClick={toggleBlog}>
                  Blog
                </Link>
                <Link to="#" onClick={toggleUtilities}>
                  Utilities
                </Link>
              </Stack>
            )}
          </Stack>
        </div>
      </div>

      {showMobile && isMobile ? (
        <div className={styles.subheader}>
          <div className={styles.subheaderContent}>
            <Stack direction="vertical" spacing="2xs">
              <Stack
                direction="horizontal"
                alignHorizontal="right"
                spacing="sm"
              >
                <Link to="/">Home</Link>
                <Link to="/academia">Academia</Link>
                <Link to="/employment">Employment</Link>
                <Link to="/library">Library</Link>
              </Stack>

              <Stack
                direction="horizontal"
                alignHorizontal="right"
                spacing="sm"
              >
                <Link to="#" onClick={toggleBlogMobile}>
                  Blog
                </Link>
                <Link to="#" onClick={toggleUtilitiesMobile}>
                  Utilities
                </Link>
              </Stack>
            </Stack>
          </div>
        </div>
      ) : null}

      {showBlog ? (
        <div className={styles.subheader}>
          <div className={styles.subheaderContent}>
            <Stack direction="vertical" spacing="2xs">
              <Stack
                direction="horizontal"
                alignHorizontal="right"
                spacing="sm"
              >
                <Link to="/blog/instant-gram" onClick={resetHeader}>
                  Instant Gram
                </Link>
                <Link to="/blog/sport" onClick={resetHeader}>
                  Sport
                </Link>
                <Link to="/blog/brittons-foodrc" onClick={resetHeader}>
                  BrittonsFoodRC
                </Link>
              </Stack>

              <Stack
                direction="horizontal"
                alignHorizontal="right"
                spacing="sm"
              >
                <Link to="/blog/allroad" onClick={resetHeader}>
                  allroad
                </Link>
                <Link to="/blog/gentlemen-who-cafe" onClick={resetHeader}>
                  Gentlemen Who Caf&eacute;
                </Link>
              </Stack>

              <Stack
                direction="horizontal"
                alignHorizontal="right"
                spacing="sm"
              >
                <Link to="/blog/ricing" onClick={resetHeader}>
                  Ricing
                </Link>
                <Link to="/blog/think-flow" onClick={resetHeader}>
                  ThinkFlow
                </Link>
                <Link to="/blog/founding-fathers" onClick={resetHeader}>
                  Founding Fathers
                </Link>
              </Stack>

              <Stack
                direction="horizontal"
                alignHorizontal="right"
                spacing="sm"
              >
                <Link to="/blog/media" onClick={resetHeader}>
                  Media
                </Link>
                <Link to="/blog/miami-vice" onClick={resetHeader}>
                  Miami Vice
                </Link>
                <Link to="/blog/graphic-design" onClick={resetHeader}>
                  Graphic Design
                </Link>
              </Stack>
            </Stack>
          </div>
        </div>
      ) : null}

      {showUtilities ? (
        <div className={styles.subheader}>
          <div className={styles.subheaderContent}>
            <Stack direction="horizontal" alignHorizontal="right" spacing="sm">
              <Link to="/utilities/weather" onClick={resetHeader}>
                Weather
              </Link>
              <Link to="/utilities/conquest" onClick={resetHeader}>
                Conquest
              </Link>
            </Stack>
          </div>
        </div>
      ) : null}
    </header>
  );
};
