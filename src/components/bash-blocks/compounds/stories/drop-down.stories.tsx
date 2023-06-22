import { useState } from 'react'
import { articleTestData } from '../../../../data'
import { Typography } from '../..'
import { Article, ArticleProps, DropDown, Tile } from '..'
import { useDropDown } from '../../../../scripts'

export const DropDownStories = () => {
    const { showDropDown, setShowDropDown } = useDropDown()

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
                        func={() => setShowDropDown(!showDropDown)}
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
