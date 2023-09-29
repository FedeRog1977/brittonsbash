import { SportResultTile } from './sport-result-tile.component'
import { SportSearchTile } from './sport-search-tile.component'

export const Sport: React.FC = () => {
    return (
        <>
            <SportSearchTile />
            <SportResultTile />
        </>
    )
}
