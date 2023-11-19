import { Background, Button, Tile, Typography } from '../bash-blocks'
import { ActionTile } from '../bash-blocks/action-tile'
import introTileImg from '../../media/images/pages/intro-tile.jpg'

export const Home = () => (
    <>
        <Background type="logo" content="BrittonsBashRC" />
        <ActionTile
            img={introTileImg}
            heading="Welcome to Autism"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
            <Button
                typeType="h3"
                type="inverse"
                func={() => (window.location.href = '#/blog/instant-gram')}
                funcResp={false}
                content="Instant Gram"
                color="white"
                light
            />
            <Button
                typeType="h3"
                type="inverse"
                func={() => (window.location.href = '#/blog/sport')}
                funcResp={false}
                content="Sport"
                color="white"
                light
            />
            <Button
                typeType="h3"
                type="inverse"
                func={() => (window.location.href = '#/blog/brittons-foodrc')}
                funcResp={false}
                content="BritonsFoodRC"
                color="white"
                light
            />
            <Button
                typeType="h3"
                type="inverse"
                func={() => (window.location.href = '#/library')}
                funcResp={false}
                content="Library"
                color="white"
                light
            />
        </ActionTile>
        <Tile type="clear">
            <Typography
                type="body"
                textAlign="center"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </Tile>
    </>
)
