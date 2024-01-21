import {
    MiamiVice as MiamiViceComponent,
    miamiViceContent,
} from '../../compounds'
import { PageLayout } from '../../bash-blocks/templates'
import { FootnoteTile } from '../../bash-blocks'

export const MiamiVice = () => (
    <PageLayout background={miamiViceContent.background}>
        <MiamiViceComponent />
        <FootnoteTile {...miamiViceContent.tileTwo} />
    </PageLayout>
)
