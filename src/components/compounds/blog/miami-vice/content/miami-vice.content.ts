import {
    BackgroundProps,
    FootnoteTileProps,
    VideoTileProps,
} from '../../../../bash-blocks'

type MiamiViceProps = {
    background: BackgroundProps
    tileOne: {
        season1: VideoTileProps[]
        season2: VideoTileProps[]
        season3: VideoTileProps[]
        season4: VideoTileProps[]
        season5: VideoTileProps[]
    }
    tileTwo: FootnoteTileProps
}

export const miamiViceContent: MiamiViceProps = {
    background: { type: 'miami', content: 'MIAMI VICE' },
    tileOne: {
        season1: [
            {
                heading: 'Miss You – The Rolling Stones',
                subHeading: 'Brother’s Keeper',
                video: '-00smlSOaDE',
            },
            {
                heading: 'Body Talk – The Deele',
                subHeading: 'Brother’s Keeper',
                video: 'qrk9zYyBvwo',
            },
            {
                heading: 'Miami Vice Theme (Pilot) – Jan Hammer',
                subHeading: 'Brother’s Keeper',
                video: 'biRolWtDN-k',
            },
            {
                heading: 'Somebody’s Watching Me – Rockwell',
                subHeading: 'Brother’s Keeper',
                video: 'eMwkT3SNGFo',
            },
            {
                heading: 'All Night Long – Lionel Richie',
                subHeading: 'Brother’s Keeper',
                video: 'qEtj2zTRGHk',
            },
            {
                heading: 'In The Air Tonight – Phil Collins',
                subHeading: 'Brother’s Keeper',
                video: '05TRO9JlnI4',
            },
        ],
        season2: [],
        season3: [],
        season4: [],
        season5: [],
    },
    tileTwo: {
        content:
            'Filmed with Panavision® Panaflex® Cameras and Lenses (1972). Dolby Stereo® in selected theatres',
    },
}
