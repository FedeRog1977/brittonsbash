import { FC } from "react";
import ImageSlider from "../elements/ImageSlider";
import Typography from "../elements/Typography";
import InstantGramTileSport from "./InstantGramTileSport";
import "./styles/InstantGramTile.css";
// import InstantGramTitleSportProps from './InstantGramTileSport'

interface InstantGramTileProps {
    event: {
        id: string;
        namePrefix?: string;
        nameSuffix: string;
        startDate: string;
        endDate?: string;
        description: string;
        images: {
            url: string;
            alt: string;
            description: string;
        }[];
        routeNames?: string[];
        youthHostels?: string[];
    };
    sportEvent?: {};
}

const InstantGramTile: FC<InstantGramTileProps> = (
    { event, sportEvent }: any
) => {

    return (
        <div className='instant-gram-tile'>
            <div style={{ textAlign: 'center' }}>
                {event.namePrefix &&
                    <>
                        <Typography type='h1' content={event.namePrefix} textAlign='left' inline />
                        {': '}
                    </>
                }
                <Typography type='h1' content={event.nameSuffix} textAlign='left' inline />
            </div>
            <div style={{ textAlign: 'center' }}>
                <Typography type='h3' content={event.startDate} textAlign='left' inline />
                {event.endDate &&
                    <>
                        <Typography type='h3' content={<>{' '}&#8212;{' '}</>} textAlign='left' inline />
                        <Typography type='h3' content={event.endDate} textAlign='left' inline />
                    </>
                }
            </div>
            {sportEvent &&
                <InstantGramTileSport sportEvent={sportEvent} />
            }
            <div className='instant-gram-tile-body'>
                {/* Incomplete */}
                {event.youthHostels.length > 0 &&
                    <>
                        <Typography type='body' content='Youth Hostels: ' textAlign='left' boldFace inline />
                        {event.youthHostels.map(({ hostel, idx }: any) => {
                            return (
                                <div key={idx}>
                                    <Typography type='body' content={hostel} textAlign='left' boldFace inline />
                                </div>
                            )
                        })}
                    </>
                }
                <Typography type='body' content={event.description} textAlign='justify' />
            </div>
            <div className='instant-gram-tile-slider'>
                <ImageSlider slides={event.images} />
            </div>
        </div>
    )
}

export default InstantGramTile;