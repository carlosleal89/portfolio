import React from 'react'
import '../styles/components/aboutcontainer.sass';

const AboutContainer: React.FC = () => {
  return (
    <section className='about-container'>
      <h2>Sobre</h2>
      <p>
      Hi there. I'm Carlos! 👋
      <br />
      Atualmente estou em processo de transição de carreira. Sou desenvolver Web full stack formado pela Trybe.
      Durante meu processo de formação, desenvolvi projetos individuais e em grupo usando tecnologias como
      JavaScript, React, Node.js, Docker, SQL, TypeScript, Express e Sequelize. Na seção de projetos você encontra alguns trabalhos
      onde posso mostrar um pouco dos meus conhecimentos.
      <br />
      Já trabalhei na área de tecnologia, o que me proporcionou uma base sólida para a transição de carreira.
      Minha experiência mais recente foi como barbeiro, durante os últimos 6 anos. Nesse período pude desenvolver
      habilidades valiosas, como comunicação, gerenciamento de tempo, trabalho em equipe e liderança. 
      </p>
    </section>
  )
}

export default AboutContainer;