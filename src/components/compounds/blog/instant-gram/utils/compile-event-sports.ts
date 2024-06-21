import { getSessionItem } from '../../../../../utils/api';
import { Project } from '../types/project';

export const compileEventSports = () => {
  const sport = getSessionItem('response-sport');
  const sportParsed: Project[] = [];

  sport[2024].projects.forEach((event: Project) => {
    sportParsed.push(event);
  });

  sport[2023].projects.forEach((event: Project) => {
    sportParsed.push(event);
  });

  sport[2022].projects.forEach((event: Project) => {
    sportParsed.push(event);
  });

  sport[2021].projects.forEach((event: Project) => {
    sportParsed.push(event);
  });

  sport[2020].projects.forEach((event: Project) => {
    sportParsed.push(event);
  });

  return sportParsed;
};
