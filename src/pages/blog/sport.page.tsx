import { Background } from '../../elements'
import SportResultTile from '../../compounds/blog/sport/SportResultTile'

export const Sport = () => (
    <div>
        <Background
            content="Sport"
            className="background-text background-text-sport"
        />
        <SportResultTile />
    </div>
)
