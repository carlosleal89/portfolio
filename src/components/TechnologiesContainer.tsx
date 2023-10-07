import React from 'react'
import IIcon from '../interfaces/IIcon.ts';
import techIcons from '../data/technologiesIcons.tsx';

import '../styles/components/technologiescontainer.sass';

const TechnologiesContainer: React.FC = () => {
  return (
    <section className='tech-container'>
      <h2>Tecnologias</h2>
      <div className='tech-grid'>
        {
          techIcons.map((iconEl: IIcon) => (
            <div className='tech-card' id={ iconEl.name } key={ iconEl.name }>
              <div className='tech-icon'>
              { iconEl.icon }
              </div>
              <div className='tech-info'>
                <h3>{ iconEl.name }</h3>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default TechnologiesContainer;