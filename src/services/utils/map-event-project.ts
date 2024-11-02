import { toMiles, toSum, toFeet } from '../../utils/helpers';
import { MappedEventProject, Project } from '../../utils/types';

export const mapEventProject = (project: Project[]): MappedEventProject => {
  const distances: number[] = [];
  const elevations: number[] = [];

  project.forEach(({ distance, elevation }) => {
    distances.push(distance);
    elevations.push(elevation);
  });

  return {
    name: project.map(({ name }) => `${name}`).join(', '),
    distance: toMiles(distances.reduce(toSum)),
    elevation: toFeet(elevations.reduce(toSum)),
    time: project.map(({ time }) => `${time}`).join(', '),
    companionship: project.map(({ companionship }) => `${companionship}`).join(', '),
    islands: project.map(({ islands }) => `${islands}`).join(', '),
    munros: project.map(({ munros }) => `${munros}`).join(', '),
    munroTops: project.map(({ munroTops }) => `${munroTops}`).join(', '),
    corbetts: project.map(({ corbetts }) => `${corbetts}`).join(', '),
    corbettTops: project.map(({ corbettTops }) => `${corbettTops}`).join(', '),
    grahams: project.map(({ grahams }) => `${grahams}`).join(', '),
    subTwos: project.map(({ subTwos }) => `${subTwos}`).join(', '),
    donalds: project.map(({ donalds }) => `${donalds}`).join(', '),
  };
};
