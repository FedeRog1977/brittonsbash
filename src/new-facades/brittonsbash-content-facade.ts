import { ClientBrittonsBashContentService } from '../new-services';
import { UrlGroup } from '../utils/types';

type BrittonsBashContentFacadeTemp = {
  getLinks: () => Promise<UrlGroup[]>;
};

const getBrittonsBashContentFacade = (): BrittonsBashContentFacadeTemp => {
  return new ClientBrittonsBashContentService('https://raw.githubusercontent.com/FedeRog1977');
};

export const brittonsBashContentFacade = getBrittonsBashContentFacade();
