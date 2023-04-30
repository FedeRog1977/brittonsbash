import { useState } from 'react';
import { articleTestData } from '../../../data/test/ArticleTestData';
import Typography from '../../elements/Typography';
import Article from '../Article';
import DropDown from '../DropDown';
import Tile from '../Tile';

function DropDownStories() {
    const [showDropDown, setShowDropDown] = useState(false);

    const handleClick = () => {
        if (showDropDown === false) {
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }
    }

    return (
        <>
            <Tile
                type='clear-condensed'
                content={
                    <Typography type='t1' fontFamily='sans-serif' content='Drop-Down' textAlign='center' paragraphMargins />
                }
            />
            <Tile
                type='solid'
                content={
                    <>
                        <DropDown className='regular' func={handleClick} funcResp={showDropDown} />
                        {showDropDown &&
                            <Article
                                sections={articleTestData}
                                fontFamily='serif'
                                textAlign='justify'
                            />
                        }
                    </>
                }
            />
        </>
    );
}

export default DropDownStories;