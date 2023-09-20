import { ArticleProps } from '..'
import { articleTestData } from '../../../data'
import { useShowElement } from '../../../scripts'
import { Tile, Typography, Button, Article } from '../components'

export const ButtonStories = () => {
    const { showElement, setShowElement } = useShowElement()

    return (
        <>
            <Tile type="clear">
                <Typography
                    type="t1"
                    fontFamily="sansSerif"
                    content="Button"
                    textAlign="center"
                />
            </Tile>
            <Tile type="solid">
                <Button
                    buttonType="regular-clear"
                    func={() => setShowElement(!showElement)}
                    funcResp={showElement}
                />
                {showElement && (
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
