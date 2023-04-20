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
        description:
        | string
        | {
            type: string;
            content: string;
        }[];
        images: {
            url: string;
            alt: string;
            description: string;
        }[];
        routeNames?: string[];
        youthHostels?: string[];
    };
    sportEvent?: Array<{
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
    }>;
    showSportEvent?: boolean;
}

const InstantGramTile: FC<InstantGramTileProps> = (
    { event, sportEvent, showSportEvent }: any
) => {
    console.log(
        "---\nEvent:",
        event,
        "Sport Event(s):\n",
        sportEvent,
        "\n(Is In Array?:",
        Array.isArray(sportEvent),
        ")\n",
        showSportEvent,
        "\n---",
    );

    const distances: any[] = [];
    const elevs: any[] = [];
    const times: any[] = [];
    const islandsS: any[] = [];
    const munrosS: any[] = [];
    const munroTopsS: any[] = [];
    const corbettsS: any[] = [];
    const corbettTopsS: any[] = [];
    const grahamsS: any[] = [];
    const subTwosS: any[] = [];
    const donaldsS: any[] = [];

    distances.pop();
    elevs.pop();
    times.pop();
    islandsS.pop();
    munrosS.pop();
    munroTopsS.pop();
    corbettsS.pop();
    corbettTopsS.pop();
    grahamsS.pop();
    subTwosS.pop();
    donaldsS.pop();

    // INCOMPLETE
    for (var i in sportEvent) {
        distances.push(`${sportEvent[i].dist.toLocaleString("en-UK")}mi`);
        elevs.push(`${sportEvent[i].elev.toLocaleString("en-UK")}ft`);
        times.push(`${sportEvent[i].time}`);
        islandsS.push(`${sportEvent[i].islands.join(', ')}`);
        munrosS.push(`${sportEvent[i].munros.join(', ')}`);
        munroTopsS.push(`${sportEvent[i].munroTops.join(', ')}`);
        corbettsS.push(`${sportEvent[i].corbetts.join(', ')}`);
        corbettTopsS.push(`${sportEvent[i].corbettTops.join(', ')}`);
        grahamsS.push(`${sportEvent[i].grahams.join(', ')}`);
        subTwosS.push(`${sportEvent[i].subTwos.join(', ')}`);
        donaldsS.push(`${sportEvent[i].donalds.join(', ')}`);
    }

    var sportDist = distances.join(', ');
    var sportElev = elevs.join(', ');
    var sportTime = times.join(', ');
    var sportIslands = islandsS.length > 1 ? islandsS.join('; ') : `${sportEvent[0].islands.join(', ')}`;
    var sportMunros = munrosS.length > 1 ? munrosS.join('; ') : `${sportEvent[0].munros.join(', ')}`;
    var sportMunroTops = munroTopsS.join('; ');
    var sportCorbetts = corbettsS.join('; ');
    var sportCorbettTops = corbettTopsS.join('; ');
    var sportGrahams = grahamsS.join('; ');
    var sportSubTwos = subTwosS.join('; ');
    var sportDonalds = donaldsS.join('; ');

    var youthHostels = `${event.youthHostels.join(', ')}`;

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
                            <Typography type='body' fontFamily='sans-serif' content='Island(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportIslands} textAlign='center' inline />
                        </div>
                    }
                    {sportMunros &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Munro(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportMunros} textAlign='center' inline />
                        </div>
                    }
                    {sportMunroTops &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Munro Top(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportMunroTops} textAlign='center' inline />
                        </div>
                    }
                    {sportCorbetts &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Corbett(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportCorbetts} textAlign='center' inline />
                        </div>
                    }
                    {sportCorbettTops &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Corbett Top(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportCorbettTops} textAlign='center' inline />
                        </div>
                    }
                    {sportGrahams &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Graham(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportGrahams} textAlign='center' inline />
                        </div>
                    }
                    {sportSubTwos &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Sub 2000(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportSubTwos} textAlign='center' inline />
                        </div>
                    }
                    {sportDonalds &&
                        <div>
                            <Typography type='body' fontFamily='sans-serif' content='Donald(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportDonalds} textAlign='center' inline />
                        </div>
                    }
                </div>
            }
            <div className='instant-gram-tile-body'>
                {youthHostels &&
                    <Typography
                        type='body'
                        content={
                            <>
                                <Typography type='body' content='Youth Hostel(s): ' textAlign='left' boldFace inline />
                                <Typography type='body' content={youthHostels} textAlign='left' inline />
                            </>
                        }
                        textAlign='center'
                    />
                }
                {Array.isArray(event.description) ?
                    <>
                        {event.description.map(
                            ({ type, content }: any) => (
                                <Typography type={type} content={content} textAlign='justify' paragraphMargins />
                            )
                        )}
                    </>
                    :
                    <>
                        <Typography type='body' content={event.description} textAlign='justify' paragraphMargins />
                    </>
                }
            </div>
            <div className='instant-gram-tile-slider'>
                <ImageSlider slides={event.images} />
            </div>
        </div>
    )
}

export default InstantGramTile;