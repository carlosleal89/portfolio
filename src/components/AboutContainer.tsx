import React from 'react'
// import '../styles/components/aboutcontainer.sass';

const AboutContainer: React.FC = () => {
  return (
    <section className='about-container'>
      <h2>Sobre</h2>
      <p>
      Hi there. I'm Carlos! 👋
      <br />
      Sou Desenvolvedor Web Full Stack formado pela Trybe.
      Durante meu processo de formação, desenvolvi projetos individuais e em grupo usando tecnologias como
      JavaScript, React, Redux, Node.js, TypeScript, Express, Sequelize, Python, Flask, Django, SQL, MongoDB,
      Docker e Git. Na seção de projetos você encontra alguns trabalhos onde posso mostrar um pouco dos meus
      conhecimentos.
      <br />
      Além das hard skills, também prezo pelo desenvolvimento de soft skills como colaboração, pensamento
      crítico, trabalho em equipe, comunicação e escuta ativa. 
      <br />
      Já trabalhei na área de tecnologia, como técnico em informática, onde tive a oportunidade de coordenar uma
      equipe de TI que realizava atendimentos ao cliente.
      </p>
    </section>
  )
}

export default AboutContainer;