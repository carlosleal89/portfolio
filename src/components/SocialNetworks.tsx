import React from 'react';
import socialIcons from '../data/socialIcons.tsx';
import IIcon from '../interfaces/IIcon.ts';

import '../styles/components/socialnetworks.sass'


const SocialNetworks: React.FC = () => {
  return (
    <section id='social-networks'>
      {
        socialIcons.map((netIcon: IIcon ) => (
          <a href={netIcon.data} className='social-btn' id={netIcon.name} key={netIcon.name} target="_blank">{
            netIcon.icon
          }</a>
        ))
      }
    </section>
  )
}

export default SocialNetworks