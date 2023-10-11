import React from 'react';
import Selfie from '../images/me.jpeg';
import SocialNetworks from './SocialNetworks';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

const Sidebar: React.FC = () => {
  return (
    <aside id='sidebar'>
      <img src={ Selfie } alt="Carlos Leal - profile picture" />
      <h2 id='main-title-mobile'>Carlos Leal</h2>
      <p className='job-title'>Desenvolvedor Web Full Stack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="/curriculoCarlosLeal.pdf" download="curriculoCarlosLeal.pdf" className='resume-btn'>

        Download Currículo
      </a>
    </aside>
  )
}

export default Sidebar