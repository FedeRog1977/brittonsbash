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
        imageMatrices: [
            {
                heading: 'Showcase',
                items: [
                    {
                        url: 'https://lewisbritton.com/blog/think-flow/t420.jpeg',
                        alt: 'T420',
                        description:
                            '[Lenovo ThinkPad T420](https://download.lenovo.com/ibmdl/pub/pc/pccbbs/thinkcentre_pdf/0b03687.pdf)&nbsp;<sup>[[1](https://lewisbritton.com/)]</sup>',
                    },
                    {
                        url: 'https://lewisbritton.com/blog/think-flow/x220.jpeg',
                        alt: 'X220',
                        description:
                            '[Lenovo ThinkPad X220](https://download.lenovo.com/ibmdl/pub/pc/pccbbs/mobiles_pdf/0a60739_04.pdf)',
                    },
                    {
                        url: 'https://lewisbritton.com/blog/think-flow/r50e.jpeg',
                        alt: 'r50e',
                        description:
                            '[IBM ThinkPad R50e](https://download.lenovo.com/ibmdl/pub/pc/pccbbs/mobiles_pdf/39t2462.pdf)',
                    },
                    {
                        url: 'https://lewisbritton.com/blog/think-flow/t42.jpeg',
                        alt: 'T42',
                        description:
                            '[IBM ThinkPad T42](https://download.lenovo.com/ibmdl/pub/pc/pccbbs/mobiles_pdf/13n6243.pdf)',
                    },
                    {
                        url: 'https://lewisbritton.com/blog/think-flow/x30.jpeg',
                        alt: 'X30',
                        description:
                            '[IBM ThinkPad X30](https://download.lenovo.com/ibmdl/pub/pc/pccbbs/mobiles_pdf/39t6189.pdf) and [UltraBase X3](https://download.lenovo.com/ibmdl/pub/pc/pccbbs/options/62p8225.pdf) ([Repair](https://thinkwiki.de/UltraBase_X3))',
                    },
                    {
                        url: 'https://lewisbritton.com/blog/think-flow/t23.jpeg',
                        alt: 'T23',
                        description:
                            '[IBM ThinkPad T23](https://download.lenovo.com/ibmdl/pub/pc/pccbbs/mobiles_pdf/62p9631.pdf)',
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
