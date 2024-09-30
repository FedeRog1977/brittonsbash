import { Region } from './region';

export type Regions = {
  counties: Region[];
  regions: {
    name: string;
    subRegions: {
      name: string;
      subSubRegions: Region[];
    }[];
  }[];
};
