import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { ImageTile as ImageTileComponent } from './image-tile.component'
import introTileImg from '../../../../media/images/pages/intro-tile.jpg'

const meta: ComponentMeta<typeof ImageTileComponent> = {
    title: 'BashBlocks / ImageTile',
    component: ImageTileComponent,
    args: {
        img: { url: introTileImg, alt: 'intro-tile-image' },
        gradient: {
            value: 'dark',
            opacity: 40,
            start: 'left',
        },
        heading: 'Welcome to BrittonsBashRC',
        subHeading: 'Where autism aligns at its finest',
        body: 'Congratulations, you’ve found yourself in BrittonsBashRC. Rogue one. If you ended up here through any other path then my personal recommendation, I would love to know how. What is the point of this website? Well knowing me, I could be offed, booked, locked-up, fall off a Munro top, or fire too many bullets, at any moment. So, my thought was, why not put everything that’s ever gone through my mind right here? Head on with it at your own risk, and either follow the links to the right for my main projects (and Projects), or keep reading to dive into the deeper and darker realms.',
        ctas: [
            { content: 'Instant Gram', href: '#/blog/instant-gram' },
            { content: 'Sport', href: '#/blog/sport' },
            { content: 'BritonsFoodRC', href: '#/blog/brittons-foodrc' },
            { content: 'Weather', href: '#/utils/weather' },
            { content: 'Conquest', href: '#/utils/conquest' },
        ],
        invert: true,
    },
}

export default meta

export const ImageTile: ComponentStory<typeof ImageTileComponent> = (args) => (
    <ImageTileComponent {...args} />
)
