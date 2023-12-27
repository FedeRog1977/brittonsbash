import { Background, Button, Grid, Tile, Typography } from '../bash-blocks'
import { ContentTile } from '../bash-blocks'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import introTileImg from '../../media/images/pages/intro-tile.jpg'

export const Home = () => (
    <>
        <Background type="logo" content="BrittonsBashRC" />
        <ContentTile
            img={introTileImg}
            heading="Welcome to BrittonsBashRC"
            subHeading="Where autism aligns at its finest"
            body="Where autism aligns at its finest, in more ways than you knew it could. Now, choose where you start. Where autism aligns at its finest, in more ways than you knew it could. Now, choose where you start. Where autism aligns at its finest, in more ways than you knew it could. Now, choose where you start. Where autism aligns at its finest, in more ways than you knew it could. Now, choose where you start. Where autism aligns at its finest, in more ways than you knew it could. Now, choose where you start. Where autism aligns at its finest, in more ways than you knew it could. Now, choose where you start."
            textAlign="left"
            ctas={[
                { content: 'Instant Gram', href: '#/blog/instant-gram' },
                { content: 'Sport', href: '#/blog/sport' },
                { content: 'BritonsFoodRC', href: '#/blog/brittons-foodrc' },
                { content: 'Conquest', href: '#/utils/conquest' },
            ]}
        ></ContentTile>
        <Tile type="clear">
            <Typography
                type="body"
                textAlign="center"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </Tile>
    </>
)
