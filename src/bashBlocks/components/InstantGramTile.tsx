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
    var sportDist = `${sportEvent.dist.toLocaleString("en-UK")}mi`;
    var sportElev = `${sportEvent.elev.toLocaleString("en-UK")}ft`;
    var sportTime = `${sportEvent.time}`;
    var sportIslands = `${sportEvent.islands.join(', ')}`;
    var sportMunros = `${sportEvent.munros.join(', ')}`;
    var sportMunroTops = `${sportEvent.munroTops.join(', ')}`;
    var sportCorbetts = `${sportEvent.corbetts.join(', ')}`;
    var sportCorbettTops = `${sportEvent.corbettTops.join(', ')}`;
    var sportGrahams = `${sportEvent.grahams.join(', ')}`;
    var sportSubTwos = `${sportEvent.subTwos.join(', ')}`;
    var sportDonalds = `${sportEvent.donalds.join(', ')}`;

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
                    <div>
                        <Typography type='body' fontFamily='sans-serif' content='Distance: ' textAlign='center' boldFace inline />{' '}
                        <Typography type='body' fontFamily='sans-serif' content={sportDist} textAlign='center' inline />{' '}
                        <Typography type='body' fontFamily='sans-serif' content='Elevation: ' textAlign='center' boldFace inline />{' '}
                        <Typography type='body' fontFamily='sans-serif' content={sportElev} textAlign='center' inline />{' '}
                        <Typography type='body' fontFamily='sans-serif' content='Time: ' textAlign='center' boldFace inline />{' '}
                        <Typography type='body' fontFamily='sans-serif' content={sportTime} textAlign='center' inline />
                    </div>
                    {sportIslands &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Islands: ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportIslands} textAlign='center' inline />
                        </div>
                    }
                    {sportMunros &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Munros: ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportMunros} textAlign='center' inline />
                        </div>
                    }
                    {sportMunroTops &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Munro Tops: ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportMunroTops} textAlign='center' inline />
                        </div>
                    }
                    {sportCorbetts &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Munro Tops: ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportCorbetts} textAlign='center' inline />
                        </div>
                    }
                    {sportCorbettTops &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Munro Tops: ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportCorbettTops} textAlign='center' inline />
                        </div>
                    }
                    {sportGrahams &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Munro Tops: ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportGrahams} textAlign='center' inline />
                        </div>
                    }
                    {sportSubTwos &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Munro Tops: ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportSubTwos} textAlign='center' inline />
                        </div>
                    }
                    {sportDonalds &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Munro Tops: ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportDonalds} textAlign='center' inline />
                        </div>
                    }
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