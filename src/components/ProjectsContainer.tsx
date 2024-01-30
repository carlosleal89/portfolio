import React from 'react';

import { IShowProjects } from '../interfaces/IProject';

const ProjectsContainer: React.FC<IShowProjects> = ({ showProjects, setShowProjects }) => {  
  return (
    <section id='projects-container'>
      <h2>Projetos</h2>
      <p>
      No desenvolvimento front-end, utilizo Redux e Context API para gerenciar estados no React,
      além de explorar ciclos de vida de componentes, hooks e técnicas para evitar prop drilling.
      No desenvolvimento back-end, desenvolvo APIs REST com Node e Python. Nos projetos com Node, 
      utilizo Express para manipulação de rotas e Sequelize como ORM. Adoto uma arquitetura de camadas MSC,
      focando em testes unitários e de integração para garantir a qualidade do código.
      Já nos projetos com Python, utilizo Flask ou Django para aplicações server-side rendering e Django Rest Framework. 
      Também adoto uma arquitetura MVC e utilizo MySQL ou MongoDB como banco de dados, dependendo da aplicação.
      </p>
      <button className='projects-btn' onClick={ () => setShowProjects(!showProjects) }>
        Ver Projetos
      </button>
    </section>
  )
}

export default ProjectsContainer;