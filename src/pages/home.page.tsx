import { Article, Tile } from '../bash-blocks'
import { articleTestData } from '../data'
import { Background } from '../elements'

export const Home = () => (
    <div>
        <Background text="BrittonsBashRC" />
        <Tile type="solid">
            <Article
                sections={articleTestData}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </div>
)
