import React from 'react';

import Fall from '../../../assets/fall.svg';

import './styles.css';

function About() {
  return (
    <section className="about">
      <div className="container">
         <img src={Fall} alt="Analise" />
        <div>
          <h1>
            Sobre Nós
          </h1>
          <p>
            No meio de tanta informação e da quantidade de ferramentas que
            surgem todos os dias, você precisa de alguém que te leve na direção
            certa.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
