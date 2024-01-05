import { BackgroundProps, FootnoteTileProps } from '../../../../bash-blocks'

type InstantGramProps = {
    background: BackgroundProps
    tileOne: FootnoteTileProps
}

export const instantGramContent: InstantGramProps = {
    background: { type: 'ig', content: 'Instant Gram' },
    tileOne: {
        content:
            'All images presented on this page were captured on devices used in the observed scenarios by either myself or someone I know',
    },
}
