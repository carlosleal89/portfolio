import React from 'react'
import projectData from '../data/projectsData.json';
import { IProject, IProjectData, IShowProjects } from '../interfaces/IProject';
import ProjectCard from './ProjectCard';

const ProjectsGridContainer: React.FC<IShowProjects> = ({ showProjects, setShowProjects }) => {
  const data: IProjectData = projectData;
  return (    
    <div id='projects-grid'>
      <p>Projetos</p>
    {
      data.map((projectEl: IProject) => 
          (
            <ProjectCard projectData = { projectEl } key={ projectEl.name } />
          )
        )
      }
      <button className='return-btn' onClick={ () => setShowProjects(!showProjects) }>
        Voltar
      </button>
    </div>  
  )
}

export default ProjectsGridContainer