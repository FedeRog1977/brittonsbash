import { useState } from 'react'
import { articleTestData } from '../../../../data'
import { Typography } from '../..'
import { Article, ArticleProps, DropDown, Tile } from '..'

export const DropDownStories = () => {
    const [showDropDown, setShowDropDown] = useState(false)

    const handleClick = () => {
        if (showDropDown === false) {
            setShowDropDown(true)
        } else {
            setShowDropDown(false)
        }
    }

    return (
        <>
            <Tile type="clear-condensed">
                <Typography
                    type="t1"
                    fontFamily="sans-serif"
                    content="Drop-Down"
                    textAlign="center"
                    paragraphMargins
                />
            </Tile>
            <Tile type="solid">
                <>
                    <DropDown
                        backgroundType="regular-clear"
                        func={handleClick}
                        funcResp={showDropDown}
                    />
                    {showDropDown && (
                        <Article
                            sections={
                                articleTestData as ArticleProps['sections']
                            }
                            fontFamily="serif"
                            textAlign="justify"
                        />
                    )}
                </>
            </Tile>
        </>
    )
}