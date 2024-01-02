import { Background, Tile, Typography } from '../bash-blocks'
import { ImageTile } from '../bash-blocks'
import introTileImg from '../../media/images/pages/intro-tile.jpg'

export const Home = () => (
    <>
        <Background type="logo" content="BrittonsBashRC" />
        <ImageTile
            img={{ url: introTileImg, alt: 'intro-tile-image' }}
            gradient={{
                value: 'dark',
                opacity: 40,
                start: 'left',
            }}
            heading="Welcome to BrittonsBashRC"
            subHeading="Where autism aligns at its finest"
            // body={[
            //     {
            //         type: 'body',
            //         content:
            //             'Congratulations, you’ve found yourself in BrittonsBashRC. Rogue one. If you ended up here through any other path then my personal recommendation, I would love to know how. What is the point of this website? Well knowing me, I could be offed, booked, locked-up, fall off a Munro top, or fire too many bullets, at any moment. So, my thought was, why not put everything that’s ever gone through my mind right here?',
            //         color: 'darkerGrey90',
            //         light: true,
            //     },
            //     {
            //         type: 'body',
            //         content:
            //             'Those who know me know there’s a bunch of random nonsense I could start spewing out here already, but let’s keep it high level right now and you can dive into the a*tisme as much as you want at your leisure. There are eight focuses of this website really, meaning there are eight things that sum up my f*cked personality: sport, exploration and travel, computers, academic crap, cooking, design, automotive interests, and other media. I have some trademarks, too many to get into here but you will be seeing a lot of hill Projects, including my greatest achievement of The Playground; Roadie Miles, including my century and various Strathavens and Fenwick + Wind Farms; and, Miles Miles, which these days tends to only extend to my never-ending Waterfoot streak. You can also browse all of my travel and explorations, shall we call them, on my rebellion against Instagram: Instant Gram. And feel free to steal any of the recipes you find in BrittonsFoodRC too. There’s also plenty of weird ass dev stuff in Linux, LaTeX, and web development. Also, not to forget the ThinkPads. If you are to venture into the unknown, check out Conquest (Burning Roots) and get a proj on the go in my experimental Ordance-Survey-based mapping app. So yeah, good luck, have fun.',
            //         color: 'darkerGrey90',
            //         light: true,
            //     },
            // ]}
            body="Congratulations, you’ve found yourself in BrittonsBashRC. Rogue one. If you ended up here through any other path then my personal recommendation, I would love to know how. What is the point of this website? Well knowing me, I could be offed, booked, locked-up, fall off a Munro top, or fire too many bullets, at any moment. So, my thought was, why not put everything that’s ever gone through my mind right here? Head on with it at your own risk, and either follow the links to the right for my main projects (and Projects), or keep reading to dive into the deeper and darker realms."
            ctas={[
                { content: 'Instant Gram', href: '#/blog/instant-gram' },
                { content: 'Sport', href: '#/blog/sport' },
                { content: 'BritonsFoodRC', href: '#/blog/brittons-foodrc' },
                { content: 'Weather', href: '#/utils/weather' },
                { content: 'Conquest', href: '#/utils/conquest' },
            ]}
            invert
        />
        <Tile type="clear">
            <Typography
                type="h1"
                textAlign="center"
                content="Those who know, those who fear"
                light
                paragraphMargins
            />
            <Typography
                type="body"
                textAlign="justify"
                content="Those who know me know there’s a bunch of random nonsense I could start spewing out here already, but let’s keep it high level right now and you can dive into the a*tisme as much as you want at your leisure. There are eight focuses of this website really, meaning there are eight things that sum up my f*cked personality: sport, exploration and travel, computers, academic crap, cooking, design, automotive interests, and other media. I have some trademarks, too many to get into here but you will be seeing a lot of hill Projects, including my greatest achievement of The Playground; Roadie Miles, including my century and various Strathavens and Fenwick + Wind Farms; and, Miles Miles, which these days tends to only extend to my never-ending Waterfoot streak. You can also browse all of my travel and explorations, shall we call them, on my rebellion against Instagram: Instant Gram. And feel free to steal any of the recipes you find in BrittonsFoodRC too. There’s also plenty of weird ass dev stuff in Linux, LaTeX, and web development. Also, not to forget the ThinkPads. If you are to venture into the unknown, check out Conquest (Burning Roots) and get a proj on the go in my experimental Ordance-Survey-based mapping app. So yeah, good luck, have fun."
                light
            />
        </Tile>
    </>
)
