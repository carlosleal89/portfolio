import React from 'react';
import Selfie from '../images/me.jpeg';
import SocialNetworks from './SocialNetworks';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

const Sidebar: React.FC = () => {
  return (
    <aside id='sidebar'>
      <img src={ Selfie } alt="Carlos Leal - profile picture" />
      <p className='job-title'>Desenvolvedor Web Full Stack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href='' className='resume-btn'>
      {/* <a href="caminho/para/seu/curriculo.pdf" download="seu_curriculo.pdf">
      <button>Baixar Currículo</button>
      </a> */}
        Download Currículo
      </a>
    </aside>
  )
}

export default Sidebar