import { imageSliderTestData } from '../../../data/test/ImageSliderTestData';
import Typography from '../../elements/Typography';
import ImageSlider from '../ImageSlider';
import Tile from '../Tile';

function ImageSliderStories() {
    return (
        <>
            <Tile
                type='clear-condensed'
                content={
                    <>
                        <Typography type='t1' fontFamily='sans-serif' content='Image Slider' textAlign='center' paragraphMargins />
                        <Typography type='h1' fontFamily='sans-serif' content='With Description' textAlign='center' paragraphMargins />
                    </>
                }
            />
            <Tile
                type='solid'
                content={
                    <ImageSlider slides={imageSliderTestData.withDesc} />
                }
            />
            <Tile
                type='clear-condensed'
                content={
                    <Typography type='h1' fontFamily='sans-serif' content='Without Description' textAlign='center' paragraphMargins />
                }
            />
            <Tile
                type='solid'
                content={
                    <ImageSlider slides={imageSliderTestData.withoutDesc} />
                }
            />
        </>
    );
}

export default ImageSliderStories;