import { ArticleTileProps, BackgroundProps } from '../../../../bash-blocks'

type ThinkFlowProps = {
    background: BackgroundProps
    tileOne: ArticleTileProps
}

export const thinkFlowContent: ThinkFlowProps = {
    background: { content: 'ThinkFlow' },
    tileOne: {
        type: 'solid',
        heading: 'ThinkFlow (Patent Pending)',
        subHeading: 'My ThinkPads',
        body: '',
        imageMatrices: [
            {
                heading: 'Showcase',
                items: [
                    {
                        url: 'https://lewisbritton.com/blog/think-flow/t420.jpeg',
                        alt: 'T420',
                        description: 'Lenovo ThinkPad T420',
                    },
                    {
                        url: 'https://lewisbritton.com/blog/think-flow/x220.jpeg',
                        alt: 'X220',
                        description: 'Lenovo ThinkPad X220',
                    },
                    {
                        url: 'https://lewisbritton.com/blog/think-flow/r50e.jpeg',
                        alt: 'r50e',
                        description: 'IBM ThinkPad R50E',
                    },
                    {
                        url: 'https://lewisbritton.com/blog/think-flow/t42.jpeg',
                        alt: 'T42',
                        description: 'IBM ThinkPad T42',
                    },
                    {
                        url: 'https://lewisbritton.com/blog/think-flow/x30.jpeg',
                        alt: 'X30',
                        description: 'IBM ThinkPad X30',
                    },
                    {
                        url: 'https://lewisbritton.com/blog/think-flow/t23.jpeg',
                        alt: 'T23',
                        description: 'IBM ThinkPad T23',
                    },
                ],
            },
            {
                heading: 'ThinkFlow',
                items: [
                    {
                        url: 'https://lewisbritton.com/blog/think-flow/flow.png',
                        alt: 'T420',
                        description: 'ThinkFLow (Patent Pending)',
                    },
                ],
            },
        ],
    },
}
