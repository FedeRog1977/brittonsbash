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
}

const InstantGramTile: FC<InstantGramTileProps> = (
    { event }: any
) => {

    return (
        <div className='instant-gram-tile'>
            <div style={{ textAlign: 'center' }}>
                {event.namePrefix &&
                    <>
                        <Typography type='h1' fontFamily='sans-serif' content={event.namePrefix} textAlign='left' inline />
                        {': '}
                    </>
                }
                <Typography type='h1' fontFamily='sans-serif' content={event.nameSuffix} textAlign='left' inline />
            </div>
            <div style={{ textAlign: 'center' }}>
                <Typography type='h3' fontFamily='sans-serif' content={event.startDate} textAlign='left' inline />
                {event.endDate &&
                    <>
                        <Typography type='h3' fontFamily='sans-serif' content={<>{' '}&#8212;{' '}</>} textAlign='left' inline />
                        <Typography type='h3' fontFamily='sans-serif' content={event.endDate} textAlign='left' inline />
                    </>
                }
            </div>
            <div style={{ margin: '0 20px 0 20px' }}>
                {/* Incomplete */}
                {event.youthHostels.length > 0 &&
                    <>
                        <Typography type='body' fontFamily='sans-serif' content='Youth Hostels: ' textAlign='left' boldFace inline />
                        {event.youthHostels.map(({ hostel, idx }: any) => {
                            return (
                                <div key={idx}>
                                    <Typography type='body' fontFamily='sans-serif' content={hostel} textAlign='left' boldFace inline />
                                </div>
                            )
                        })}
                    </>
                }
                <Typography type='body' fontFamily='sans-serif' content={event.description} textAlign='justify' />
            </div>
            <ImageSlider slides={event.images} />
        </div >
    )
}

export default InstantGramTile;