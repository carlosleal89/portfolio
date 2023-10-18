import React from 'react'
import contactIcons from '../data/contactIcons.tsx';
import IIcon from '../interfaces/IIcon.ts';

import '../styles/components/informationcontainer.sass';

const InformationContainer: React.FC = () => {
  return (
    <section id='information-container'>
      {
        contactIcons.map((iconEl: IIcon) => (
          <>
            <div className='info-card' key={ iconEl.name }>
                {iconEl.icon}
              <div>
                <h3>{iconEl.name}</h3>
                <p>{iconEl.data}</p>
              </div>
            </div>
          </>  
        ))
      }
    </section>
  )
}

export default InformationContainer;