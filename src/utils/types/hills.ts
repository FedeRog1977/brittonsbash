// TODO: update naming convention within type
type Hill = {
  name: string;
  lat: number;
  lon: number;
  OSgrid: string;
  elevation: number;
  prominence: number;
  isolation: number;
  summit: string;
  image: string;
  // TODO: discontinue this one
  type?: string;
};

type Route = {
  name: string;
  distance: number;
  elevationgain: number;
  stdtime: number;
  type: string[];
  stage: string[];
  terraintype: string[];
  terraindiff: string[];
  gear: string[];
  munros: string[];
  munroTops: string[];
  corbetts: string[];
  corbettTops: string[];
  GPX: string;
};

type Landmass = {
  name: string;
  type: string;
  subtype: string;
  // TODO: change to subSubType
  subsubtype: string;
  routes: Route[];
  munros?: Hill[];
  munroTops?: Hill[];
  corbetts?: Hill[];
  corbettTops?: Hill[];
  // TODO: change to string[]
  corrie: { name: string }[];
  gully: boolean;
  lochain: boolean;
  waterfall: boolean;
  peatbog: boolean;
  mudbog: boolean;
  boulderfield: boolean;
  scree: boolean;
  shoulder: boolean;
  arete: boolean;
  humanfeatures: [];
  parentlandmass: string;
  parentpeak: string;
  region: string;
  subregion: string;
  informalregion: string;
};

type Description = {
  name: string;
  desc: string;
};

export type Hills = {
  // TODO: discontinue this one
  munros: Hill[];
  // TODO: discontinue this one
  corbetts: Hill[];
  landmasses: Landmass[];
  summitFeatures: string[];
  hillElements: Description[];
  routeElements: Description[];
  walkTypes: Description[];
  walkStages: Description[];
  terrainTypes: Description[];
  terrainSurfaces: string[];
};
