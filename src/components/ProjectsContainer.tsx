import React from 'react';

const ProjectsContainer: React.FC = () => {
  return (
    <section id='projects-container'>
      <h2>Projetos</h2>
      <p>
      No desenvolvimento front-end, utilizo Redux e Context API para gerenciar estados no React,<br />
      além de explorar ciclos de vida de componentes, hooks e técnicas para evitar prop drilling.
      <br />
      Nos projetos back-end, desenvolvo APIs com TypeScript no formato REST usando Express para manipulação de rotas, Sequelize como ORM e MySQL como banco de dados.
      <br />
      Adoto uma arquitetura de camadas MSC, focando em testes unitários e de integração para garantir <br /> a qualidade do código.
      </p>
      <a href='https://github.com/carlosleal89' className='projects-btn' target='_blank'>
        Ver Projetos
      </a>
    </section>
  )
}

export default ProjectsContainer;