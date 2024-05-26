import { BackgroundProps, FootnoteTileProps } from '../../../../bash-blocks'

type InstantGramProps = {
    background: BackgroundProps
    tileOne: FootnoteTileProps
}

export const instantGramContent: InstantGramProps = {
    background: { type: 'ig', content: 'Instant Gram' },
    tileOne: {
        content: [
            {
                variant: 'body',
                children:
                    'All images presented on this page were captured on devices used in the observed scenarios by either myself or someone I know',
            },
            {
                variant: 'body',
                children:
                    'This collection includes a few series’ / collections of events, These including:\n\n* *Glencoe*\n\n* *Cairngorms*\n\n* *Fort William And Mallaig*\n\n* *Lui*\n\n* *Dùran Dùran*\n\n* *Turning 30*\n\n* *The Big Four-O*\n\n* *Beinn England*\n\n* *Duncarnock*\n\n* *Simulated Failed Project*\n\n* *The Final Two’er*\n\n* *The Gentlemen Who Café Present*\n\n* *Different Kind Hol-e-day*',
            },
        ],
    },
}
