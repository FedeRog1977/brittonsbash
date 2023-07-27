import { articleTestData } from '../../../../data'
import { Button, Typography } from '../..'
import { Article, ArticleProps, Tile } from '../../compounds'
import { useDropDown } from '../../../../scripts'

export const ButtonStories = () => {
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
                <Button
                    buttonType="regular-clear"
                    func={() => setShowDropDown(!showDropDown)}
                    funcResp={showDropDown}
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
