import { Background } from '../../bash-blocks'
import { Sport as SportComponent } from '../../compounds'

export const Sport = () => (
    <>
        <Background
            content="Sport"
            className="background-text background-text-sport"
        />
        <SportComponent />
    </>
)
