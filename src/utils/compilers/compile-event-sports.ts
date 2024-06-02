import { getSessionItem } from '../api';
import { ProjectProps } from './types';

export const compileEventSports = () => {
  const sport = getSessionItem('response-sport');
  const sportParsed: ProjectProps[] = [];

  sport[2024].projects.forEach((event: ProjectProps) => {
    sportParsed.push(event);
  });

  sport[2023].projects.forEach((event: ProjectProps) => {
    sportParsed.push(event);
  });

  sport[2022].projects.forEach((event: ProjectProps) => {
    sportParsed.push(event);
  });

  sport[2021].projects.forEach((event: ProjectProps) => {
    sportParsed.push(event);
  });

  sport[2020].projects.forEach((event: ProjectProps) => {
    sportParsed.push(event);
  });

  return sportParsed;
};
