import { AggregationNumerical, AggregationAlphabetical } from '../../../../components';
import { Project } from './project';

export type CompiledProject = {
  projects: {
    2020: Project[];
    2021: Project[];
    2022: Project[];
    2023: Project[];
    2024: Project[];
  };
  number: AggregationNumerical;
  distance: AggregationAlphabetical;
  elevation: AggregationAlphabetical;
  islands: {
    names: AggregationAlphabetical;
    number: AggregationNumerical;
  };
  munros: {
    names: AggregationAlphabetical;
    number: AggregationNumerical;
  };
  munroTops: {
    names: AggregationAlphabetical;
    number: AggregationNumerical;
  };
  corbetts: {
    names: AggregationAlphabetical;
    number: AggregationNumerical;
  };
  corbettTops: {
    names: AggregationAlphabetical;
    number: AggregationNumerical;
  };
  grahams: {
    names: AggregationAlphabetical;
    number: AggregationNumerical;
  };
  subTwos: {
    names: AggregationAlphabetical;
    number: AggregationNumerical;
  };
  donalds: {
    names: AggregationAlphabetical;
    number: AggregationNumerical;
  };
};
