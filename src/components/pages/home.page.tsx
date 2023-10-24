import { Background, Button } from '../bash-blocks'
import { ActionTile } from '../bash-blocks/action-tile'
import introTileImg from '../../media/images/pages/intro-tile.jpg'

export const Home = () => (
    <>
        <Background type="logo" content="BrittonsBashRC" />
        <ActionTile
            img={introTileImg}
            heading="Welcome to Autism"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        >
            <Button
                typeType="h2"
                type="denseClear"
                func={() => (window.location.href = '#/blog/instant-gram')}
                funcResp={false}
                content="Instant Gram"
                color="white"
            />
            <Button
                typeType="h2"
                type="denseClear"
                func={() => (window.location.href = '#/blog/sport')}
                funcResp={false}
                content="Sport"
                color="white"
            />
            <Button
                typeType="h2"
                type="denseClear"
                func={() => (window.location.href = '#/blog/brittons-foodrc')}
                funcResp={false}
                content="BritonsFoodRC"
                color="white"
            />
            <Button
                typeType="h2"
                type="denseClear"
                func={() => (window.location.href = '#/library')}
                funcResp={false}
                content="Library"
                color="white"
            />
        </ActionTile>
    </>
)
