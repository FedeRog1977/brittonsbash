import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { VideoTile as VideoTileComponent } from './video-tile.component'

const meta: ComponentMeta<typeof VideoTileComponent> = {
    title: 'BashBlocks / VideoTile',
    component: VideoTileComponent,
    args: {
        heading: 'Welcome to BrittonsBashRC',
        subHeading: 'Where autism aligns at its finest',
        video: 'mcAs8Fbxtvo',
    },
}

export default meta

export const ImageTile: ComponentStory<typeof VideoTileComponent> = (args) => (
    <VideoTileComponent {...args} />
)
