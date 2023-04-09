import '../../App.css';
import ImageSlider from '../../bashBlocks/elements/ImageSlider';
import { ImageSliderTestData } from '../../data/test/ImageSliderTestData';
import Background from '../../elements/page/Background';

function InstantGram() {
    return (
        <div>
            <Background text={"Instant Gram"} />
            <ImageSlider slides={ImageSliderTestData} />
        </div>
    );
}

export default InstantGram;