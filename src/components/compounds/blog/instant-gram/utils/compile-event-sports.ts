import { getSessionItem } from '../../../../../utils/api/index.js';
import { Project } from '../../sport/types/project.js';

export const compileEventSports = () => {
  const sport = getSessionItem('response-sport');
  const sportParsed: Project[] = [];

  sport[2024].projects.forEach((project: Project) => {
    sportParsed.push(project);
  });

  sport[2023].projects.forEach((project: Project) => {
    sportParsed.push(project);
  });

  sport[2022].projects.forEach((project: Project) => {
    sportParsed.push(project);
  });

  sport[2021].projects.forEach((project: Project) => {
    sportParsed.push(project);
  });

  sport[2020].projects.forEach((project: Project) => {
    sportParsed.push(project);
  });

  return sportParsed;
};
