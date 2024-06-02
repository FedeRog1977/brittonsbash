import {
  MiamiVice as MiamiViceComponent,
  miamiViceContent,
} from '../../compounds';
import { FootnoteTile, PageLayout } from '../../bash-blocks';

export const MiamiVice = () => (
  <PageLayout background={miamiViceContent.background}>
    <MiamiViceComponent />
    <FootnoteTile {...miamiViceContent.tileTwo} />
  </PageLayout>
);
