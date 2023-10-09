import React from 'react'

import { IProject, IProjectCardProps  } from '../interfaces/IProject';



const ProjectCard: React.FC<IProjectCardProps> = ({ projectData }) => {
  const { name, img, description, url }: IProject = projectData;
  return (
          <div id='projects-card'>
            <p id='project-name'> { name }</p>
            <img src={ img } id='project-img' alt='preview project image' />
            <a href={ url } id='project-url' target="_blank">{ name }</a>
            <p id='project-description'>{ description }</p>
          </div>
          )
}

export default ProjectCard;