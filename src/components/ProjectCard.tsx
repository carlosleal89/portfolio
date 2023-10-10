import React from 'react'

import { IProject, IProjectCardProps  } from '../interfaces/IProject';



const ProjectCard: React.FC<IProjectCardProps> = ({ projectData }) => {
  const { name, img, description, url }: IProject = projectData;
  return (
          <div className='project-card'>
            <a href={ url } id='project-url' target="_blank">
            <h3 id='project-name'> { name }</h3>
            <img src={ img } id='project-img' alt='preview project image' />            
            <p id='project-description'>{ description }</p>
            </a>
          </div>
          )
}

export default ProjectCard;