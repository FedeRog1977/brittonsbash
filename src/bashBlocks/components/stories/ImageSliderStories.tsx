import { imageSliderTestData } from '../../../data/test/ImageSliderTestData';
import Typography from '../../elements/Typography';
import ImageSlider from '../ImageSlider';
import Tile from '../Tile';

function ImageSliderStories() {
    return (
        <>
            <Tile type='clear-condensed'>
                <>
                    <Typography type='t1' fontFamily='sans-serif' content='Image Slider' textAlign='center' paragraphMargins />
                    <Typography type='h1' fontFamily='sans-serif' content='With Description' textAlign='center' paragraphMargins />
                </>
            </Tile>
            <Tile type='solid'>
                <ImageSlider slides={imageSliderTestData.withDesc} />
            </Tile>
            <Tile type='clear-condensed'>
                <Typography type='h1' fontFamily='sans-serif' content='Without Description' textAlign='center' paragraphMargins />
            </Tile>
            <Tile type='solid'>
                <ImageSlider slides={imageSliderTestData.withoutDesc} />
            </Tile>
        </>
    );
}

export default ImageSliderStories;