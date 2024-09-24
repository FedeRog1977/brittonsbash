import { AggregationAlphabetical, AggregationNumerical } from '../../../../bash-blocks/index.js';
import { Roadie } from './roadie.js';

export type CompiledRoadie = {
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
