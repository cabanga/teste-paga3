import React from 'react';

import Button from '../Button/';
import Analitics from '../../../assets/analitics.svg';

import './styles.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1>
            As melhores tecnologias em programação, direto ao ponto e do jeito certo.
          </h1>
          <p>
            No meio de tanta informação e da quantidade de ferramentas que
            surgem todos os dias, você precisa de alguém que te leve na direção
            certa.
          </p>
          <Button />
        </div>
        <img src={Analitics} alt="Analise" />
      </div>
    </section>
  )
}

export default Hero;