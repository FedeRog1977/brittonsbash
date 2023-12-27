import { Background, Tile, Typography } from '../bash-blocks'
import { ContentTile } from '../bash-blocks'
import introTileImg from '../../media/images/pages/intro-tile.jpg'

export const Home = () => (
    <>
        <Background type="logo" content="BrittonsBashRC" />
        <ContentTile
            img={introTileImg}
            heading="Welcome to BrittonsBashRC"
            subHeading="Where autism aligns at its finest"
            body={[
                {
                    type: 'body',
                    content:
                        'Congratulations, you’ve found yourself in BrittonsBashRC. Rogue one. If you ended up here through any other path then my personal recommendation, I would love to know how. What is the point of this website? Well knowing me, I could be offed, booked, locked-up, fall off a Munro top, or fire too many bullets, at any moment. So, my thought was, why not put everything that’s ever gone through my mind right here?',
                    color: 'white',
                    light: true,
                    shadow: true,
                },
                {
                    type: 'body',
                    content:
                        'My hobbies are of a very obscure and unique variety. My proudest achievement to date is, without doubt, my 13.5 hour, 23.94 mile, 9,162 foot expedition in The Playground. Some close seconds include: my 130k+ feet of elevation gain in both cycling and hiking, in 2021; my bicycle century in 2021; my ascent of Curved Ridge in 2021 which broke a few fears; and of course, this website! Some other proud moments extend to obtaining a top-100 ranking in Gotham’s Greatest in the video game Batman: Arkham Knight, across 2,500 hours of playtime in 2020; and, developing and maintaining a sustainable Linux system from 2020. So yes, obscure is probably the right word. But it’s the word which sums me up perfectly. The question is: am I a Monster-drinking goomer? Or, has my love for a strike at an RF Legacy, a spin on RoGeR the Giant TCR Advanced 1, lacing up the 4.5k mile brekked Asics for Waterfoot, yet another conquer of The Playground, and pride in personal hygiene prevented a route down this slippery slope? I am the FOUNDER and CEO of The Sell, BrittonsBashRC, Burning Roots, The Playground, The A82 Run-Out and its components, and that old meme Virtuous Truffle Company.',
                    color: 'white',
                    light: true,
                    shadow: true,
                },
            ]}
            textAlign="left"
            ctas={[
                { content: 'Instant Gram', href: '#/blog/instant-gram' },
                { content: 'Sport', href: '#/blog/sport' },
                { content: 'BritonsFoodRC', href: '#/blog/brittons-foodrc' },
                { content: 'Conquest', href: '#/utils/conquest' },
            ]}
        />
        <Tile type="clear">
            <Typography
                type="body"
                textAlign="center"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </Tile>
    </>
)
