import { Miles } from './miles';
import { Project } from './project';
import { Roadie } from './roadie';

type AggregateSport = {
  roadies: Roadie[];
  projects: Project[];
  miles: Miles[];
};

export type Sport = {
  2020: AggregateSport;
  2021: AggregateSport;
  2022: AggregateSport;
  2023: AggregateSport;
  2024: AggregateSport;
  2025: AggregateSport;
};
