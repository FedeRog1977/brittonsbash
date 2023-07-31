import { ArticleProps } from '..'
import { articleTestData } from '../../../data'
import { useDropDown } from '../../../scripts'
import { Tile, Typography, Button, Article } from '../components'

export const ButtonStories = () => {
    const { showDropDown, setShowDropDown } = useDropDown()

    return (
        <>
            <Tile type="clear-condensed">
                <Typography
                    type="t1"
                    fontFamily="sans-serif"
                    content="Button"
                    textAlign="center"
                    paragraphMargins
                />
            </Tile>
            <Tile type="solid">
                <Button
                    buttonType="regular-clear"
                    func={() => setShowDropDown(!showDropDown)}
                    funcResp={showDropDown}
                    textAlign="left"
                />
                {showDropDown && (
                    <Article
                        sections={articleTestData as ArticleProps['sections']}
                        fontFamily="serif"
                        textAlign="justify"
                    />
                )}
            </Tile>
        </>
    )
}