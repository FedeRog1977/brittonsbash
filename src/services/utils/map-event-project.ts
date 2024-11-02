import { toMiles, toSum, toFeet } from '../../utils/helpers';
import { MappedEventProject, Project } from '../../utils/types';

export const mapEventProject = (projects: Project[]): MappedEventProject => {
  const distances: number[] = [];
  const elevations: number[] = [];
  const times: string[] = [];
  const companionships: number[] = [];
  const islands: string[] = [];
  const munros: string[] = [];
  const munroTops: string[] = [];
  const corbetts: string[] = [];
  const corbettTops: string[] = [];
  const grahams: string[] = [];
  const subTwos: string[] = [];
  const donalds: string[] = [];

  projects.forEach((project: Project) => {
    distances.push(project.distance);
    elevations.push(project.elevation);
    times.push(project.time);
    companionships.push(project.companionship);
    project.islands?.forEach((island: string) => {
      islands.push(island);
    });
    project.munros?.forEach((munro: string) => {
      munros.push(munro);
    });
    project.munroTops?.forEach((munroTop: string) => {
      munroTops.push(munroTop);
    });
    project.corbetts?.forEach((corbett: string) => {
      corbetts.push(corbett);
    });
    project.corbettTops?.forEach((corbettTop: string) => {
      corbettTops.push(corbettTop);
    });
    project.grahams?.forEach((graham: string) => {
      grahams.push(graham);
    });
    project.subTwos?.forEach((subTwo: string) => {
      subTwos.push(subTwo);
    });
    project.donalds?.forEach((donald: string) => {
      donalds.push(donald);
    });
  });

  return {
    name: projects.map(({ name }) => `${name}`).join(', '),
    distance: toMiles(distances.reduce(toSum)),
    elevation: toFeet(elevations.reduce(toSum)),
    time: times.join(', '),
    companionship: companionships.join(', '),
    islands: islands.sort().join(', '),
    munros: munros.sort().join(', '),
    munroTops: munroTops.sort().join(', '),
    corbetts: corbetts.sort().join(', '),
    corbettTops: corbettTops.sort().join(', '),
    grahams: grahams.sort().join(', '),
    subTwos: subTwos.sort().join(', '),
    donalds: donalds.sort().join(', '),
  };
};
