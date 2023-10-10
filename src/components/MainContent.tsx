import React, { useState } from 'react'

import '../styles/components/maincontent.sass';
import AboutContainer from './AboutContainer';
import TechnologiesContainer from './TechnologiesContainer';
import ProjectsContainer from './ProjectsContainer';
import ProjectsGridContainer from './ProjectsGridContainer';

const MainContent: React.FC = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <main id='main-content'>
      {
        !showProjects &&
      <>
        <AboutContainer />
        <TechnologiesContainer />
        <ProjectsContainer showProjects={ showProjects } setShowProjects={ setShowProjects }/>
      </>
      }
      {
        showProjects &&
        <ProjectsGridContainer showProjects={ showProjects } setShowProjects={ setShowProjects } />
      }
    </main>
  )
}

export default MainContent;