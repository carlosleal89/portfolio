import { Dispatch, SetStateAction } from 'react';

export type IProject = {
  name: string;
  img: string;
  url: string;
  description: string;
}

export type IProjectData = IProject[]

export interface IProjectCardProps {
  projectData: IProject;
}

export interface IShowProjects {
  showProjects: boolean;
  setShowProjects: Dispatch<SetStateAction<boolean>>;
}

