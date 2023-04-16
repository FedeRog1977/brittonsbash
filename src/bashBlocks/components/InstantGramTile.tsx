import { FC } from "react";
import ImageSlider from "../elements/ImageSlider";
import Typography from "../elements/Typography";
import "./styles/InstantGramTile.css";

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
    sportEvent?: {
        id: string;
        routeName: string;
        dist: number;
        elev: number;
        time: string;
        companionship: number;
        islands?: string[];
        munros?: string[];
        munroTops?: string[];
        corbetts?: string[];
        corbettTops?: string[];
        grahams?: string[];
        subTwos?: string[];
        donalds?: string[];
    };
    showSportEvent?: boolean;
}

const InstantGramTile: FC<InstantGramTileProps> = (
    { event, sportEvent, showSportEvent }: any
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
            {showSportEvent &&
                <div className='instant-gram-tile-sport'>
                    <p>{sportEvent.dist}, {sportEvent.elev}, {sportEvent.time}</p>
                </div>
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