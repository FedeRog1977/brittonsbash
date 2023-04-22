import { FC, useState } from "react";
import Button from "../../../bashBlocks/elements/Button";
import ImageSlider from "../../../bashBlocks/components/ImageSlider";
import Typography from "../../../bashBlocks/elements/Typography";
import "./styles/InstantGramTile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Article from "../../../bashBlocks/components/Article";
import Tile from "../../../bashBlocks/components/Tile";

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

    for (var i in sportEvent) {
        distances.push(`${sportEvent[i].dist.toLocaleString("en-UK")}mi`);
        elevs.push(`${sportEvent[i].elev.toLocaleString("en-UK")}ft`);
        times.push(`${sportEvent[i].time}`);
        for (var k in sportEvent[i].islands) {
            islandsS.push(sportEvent[i].islands[k]);
        }
        for (var l in sportEvent[i].munros) {
            munrosS.push(sportEvent[i].munros[l]);
        }
        for (var m in sportEvent[i].munroTops) {
            munroTopsS.push(sportEvent[i].munroTops[m]);
        }
        for (var n in sportEvent[i].corbetts) {
            corbettsS.push(sportEvent[i].corbetts[n]);
        }
        for (var o in sportEvent[i].corbettTops) {
            corbettTopsS.push(sportEvent[i].corbettTops[o]);
        }
        for (var p in sportEvent[i].grahams) {
            grahamsS.push(sportEvent[i].grahams[p]);
        }
        for (var q in sportEvent[i].subTwos) {
            subTwosS.push(sportEvent[i].subTwos[q]);
        }
        for (var r in sportEvent[i].donalds) {
            donaldsS.push(sportEvent[i].donalds[r]);
        }
    }

    var sportDist = distances.join(', ');
    var sportElev = elevs.join(', ');
    var sportTime = times.join(', ');
    var sportIslands = islandsS.join(', ');
    var sportMunros = munrosS.join(', ')
    var sportMunroTops = munroTopsS.join(', ');
    var sportCorbetts = corbettsS.join(', ');
    var sportCorbettTops = corbettTopsS.join(', ');
    var sportGrahams = grahamsS.join(', ');
    var sportSubTwos = subTwosS.join(', ');
    var sportDonalds = donaldsS.join(', ');

    var youthHostels = `${event.youthHostels.join(', ')}`;

    console.log(
        "------\nEvent:",
        event,
        "Sport Event(s):\n",
        sportEvent,
        "\n(Is In Array?:",
        Array.isArray(sportEvent),
        ")\n",
        showSportEvent,
        "\n---\n",
        "Youth Hostels:",
        youthHostels,
        "\n---\n",
        "Island List:\n",
        islandsS,
        "\nMunro List:\n",
        munrosS,
        "\nMunro Top List:\n",
        munroTopsS,
        "\nCorbett List:\n",
        corbettsS,
        "\nCorbett Top List:\n",
        corbettTopsS,
        "\nGraham List:\n",
        grahamsS,
        "\nSubTwo List:\n",
        subTwosS,
        "\nDonald List:\n",
        donaldsS,
        "\n------",
    );

    const [showDescription, setShowDescription] = useState(false);

    const handleClick = () => {
        if (showDescription === false) {
            setShowDescription(true);
        } else {
            setShowDescription(false);
        }
    }

    return (
        <Tile type='solid'
            content={
                <>
                    <div className='instant-gram-tile-title'>
                        {event.namePrefix &&
                            <>
                                <Typography type='h1' content={event.namePrefix} textAlign='left' inline />
                                <Typography type='h1' content=': ' textAlign='left' inline />
                            </>
                        }
                        <Typography type='h1' content={event.nameSuffix} textAlign='left' inline />
                    </div>
                    <div className='instant-gram-tile-title'>
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
                                <Typography type='body' fontFamily='sans-serif' content={sportDist} textAlign='center' inline />
                                <Typography type='body' fontFamily='sans-serif' content={<>&nbsp;&#124;&nbsp;</>} textAlign='center' inline />
                                <Typography type='body' fontFamily='sans-serif' content='Elevation: ' textAlign='center' boldFace inline />{' '}
                                <Typography type='body' fontFamily='sans-serif' content={sportElev} textAlign='center' inline />
                                <Typography type='body' fontFamily='sans-serif' content={<>&nbsp;&#124;&nbsp;</>} textAlign='center' inline />
                                <Typography type='body' fontFamily='sans-serif' content='Time: ' textAlign='center' boldFace inline />{' '}
                                <Typography type='body' fontFamily='sans-serif' content={sportTime} textAlign='center' inline />
                            </div>
                            {sportIslands &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' fontFamily='sans-serif' content='Island(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' fontFamily='sans-serif' content={sportIslands} textAlign='center' inline />
                                </div>
                            }
                            {sportMunros &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' fontFamily='sans-serif' content='Munro(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' fontFamily='sans-serif' content={sportMunros} textAlign='center' inline />
                                </div>
                            }
                            {sportMunroTops &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' fontFamily='sans-serif' content='Munro Top(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' fontFamily='sans-serif' content={sportMunroTops} textAlign='center' inline />
                                </div>
                            }
                            {sportCorbetts &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' fontFamily='sans-serif' content='Corbett(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' fontFamily='sans-serif' content={sportCorbetts} textAlign='center' inline />
                                </div>
                            }
                            {sportCorbettTops &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' fontFamily='sans-serif' content='Corbett Top(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' fontFamily='sans-serif' content={sportCorbettTops} textAlign='center' inline />
                                </div>
                            }
                            {sportGrahams &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' fontFamily='sans-serif' content='Graham(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' fontFamily='sans-serif' content={sportGrahams} textAlign='center' inline />
                                </div>
                            }
                            {sportSubTwos &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' fontFamily='sans-serif' content='Sub 2000(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' fontFamily='sans-serif' content={sportSubTwos} textAlign='center' inline />
                                </div>
                            }
                            {sportDonalds &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' fontFamily='sans-serif' content='Donald(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' fontFamily='sans-serif' content={sportDonalds} textAlign='center' inline />
                                </div>
                            }
                        </div>
                    }
                    {youthHostels &&
                        <div className='instant-gram-tile-body'>
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
                        </div>
                    }
                    <div className='instant-gram-tile-body'>
                        <Button
                            className='instant-gram-expand'
                            func={handleClick}
                            content={<FontAwesomeIcon icon={faChevronDown} />}
                        />
                    </div>
                    {showDescription &&
                        <div className='instant-gram-tile-body'>
                            {Array.isArray(event.description) ?
                                <Article sections={event.description} fontFamily='sans-serif' textAlign='justify' />
                                :
                                <Typography type='body' content={event.description} textAlign='justify' />
                            }
                        </div>
                    }
                    <div className='instant-gram-tile-body'>
                        <ImageSlider slides={event.images} />
                    </div>
                </>
            }
        />
    )
}

export default InstantGramTile;