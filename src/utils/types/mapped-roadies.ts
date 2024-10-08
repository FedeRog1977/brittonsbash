import { AggregationAlphabetical } from './aggregation-alphabetical';
import { AggregationNumerical } from './aggregation-numerical';
import { Roadie } from './roadie';

export type MappedRoadies = {
  roadies: {
    2020: Roadie[];
    2021: Roadie[];
    2022: Roadie[];
    2023: Roadie[];
    2024: Roadie[];
  };
  number: AggregationNumerical;
  distance: AggregationAlphabetical;
  elevation: AggregationAlphabetical;
  centuries: AggregationNumerical;
  strathavens: AggregationNumerical;
  fenwickWindfarms: AggregationNumerical;
  fenwicks: AggregationNumerical;
  windfarms: AggregationNumerical;
  thorntonhalls: AggregationNumerical;
};
