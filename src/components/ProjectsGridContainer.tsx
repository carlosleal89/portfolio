import React from 'react'
import projectData from '../data/projectsData.json';
import { IProject, IProjectData, IShowProjects } from '../interfaces/IProject';
import ProjectCard from './ProjectCard';
import '../styles/components/projectsGridConteiner.sass';

const ProjectsGridContainer: React.FC<IShowProjects> = ({ showProjects, setShowProjects }) => {
  const data: IProjectData = projectData;
  return (    
    <div className='projects-grid-conteiner'>
      <h2>Projetos</h2>
      <div className='projects-grid'>
        {
          data.map((projectEl: IProject) => 
              (
                <ProjectCard projectData = { projectEl } key={ projectEl.name } />
              )
            )
        }
      </div>
      <button className='return-btn' onClick={ () => setShowProjects(!showProjects) }>
        Voltar
      </button>
    </div>  
  )
}

export default ProjectsGridContainer;