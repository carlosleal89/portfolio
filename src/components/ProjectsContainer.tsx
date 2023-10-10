import React from 'react';

import { IShowProjects } from '../interfaces/IProject';

const ProjectsContainer: React.FC<IShowProjects> = ({ showProjects, setShowProjects }) => {  
  return (
    <section id='projects-container'>
      <h2>Projetos</h2>
      <p>
      No desenvolvimento front-end, utilizo Redux e Context API para gerenciar estados no React,
      além de explorar ciclos de vida de componentes, hooks e técnicas para evitar prop drilling.
      Nos projetos back-end, desenvolvo APIs com TypeScript no formato REST usando Express para manipulação de rotas,
      Sequelize como ORM e MySQL como banco de dados.
      Adoto uma arquitetura de camadas MSC, focando em testes unitários e de integração para garantir a qualidade do código.
      </p>
      <button className='projects-btn' onClick={ () => setShowProjects(!showProjects) }>
        Ver Projetos
      </button>
    </section>
  )
}

export default ProjectsContainer;