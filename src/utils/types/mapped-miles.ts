import { AggregationAlphabetical } from './aggregation-alphabetical';
import { AggregationNumerical } from './aggregation-numerical';
import { Miles } from './miles';

export type MappedMiles = {
  miles: {
    2020: Miles[];
    2021: Miles[];
    2022: Miles[];
    2023: Miles[];
    2024: Miles[];
  };
  number: AggregationNumerical;
  distance: AggregationAlphabetical;
  elevation: AggregationAlphabetical;
  windfarms: AggregationNumerical;
  thorntonhalls: AggregationNumerical;
  waterfoots: AggregationNumerical;
};
