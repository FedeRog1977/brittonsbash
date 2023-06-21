import { Background } from '../../elements'
import { SportResultTile } from '../../compounds'

export const Sport = () => (
    <div>
        <Background
            content="Sport"
            className="background-text background-text-sport"
        />
        <SportResultTile />
    </div>
)
