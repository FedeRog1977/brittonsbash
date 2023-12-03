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
        >
            <Grid alignColumns="auto auto auto auto" justifyItems="center">
                <Grid columnItem={[1, 4]}>
                    <Button
                        typeType="h3"
                        type="inverse"
                        func={() =>
                            (window.location.href = '#/blog/instant-gram')
                        }
                        funcResp={false}
                        content="Instant Gram"
                        color="white"
                        light
                    />
                </Grid>
                <Grid columnItem={[2, 4]}>
                    <Button
                        typeType="h3"
                        type="inverse"
                        func={() => (window.location.href = '#/blog/sport')}
                        funcResp={false}
                        content="Sport"
                        color="white"
                        light
                    />
                </Grid>
                <Grid columnItem={[3, 4]}>
                    <Button
                        typeType="h3"
                        type="inverse"
                        func={() =>
                            (window.location.href = '#/blog/brittons-foodrc')
                        }
                        funcResp={false}
                        content="BritonsFoodRC"
                        color="white"
                        light
                    />
                </Grid>
                <Grid columnItem={[4, 4]}>
                    <Button
                        typeType="h3"
                        type="inverse"
                        func={() => (window.location.href = '#/utils/conquest')}
                        funcResp={false}
                        content="Conquest"
                        color="white"
                        light
                    />
                </Grid>
            </Grid>
        </ContentTile>
        <Tile type="clear">
            <Typography
                type="body"
                textAlign="center"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </Tile>
    </>
)
