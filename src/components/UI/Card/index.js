import React from 'react';
import { FaGlobe } from 'react-icons/fa';

import './styles.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Facilitando o seu dia</h1>
      <p>Es os nossos diferenciais para melhorar o seu pagamento de contas.</p>
      <div className="card">
        <FaGlobe className="icon" />
        <h2>Burocracia</h2>
        <p>Encurtamos distâncias, maior parte do processo feito por cliques, plataforma interativa.</p>
      </div>
      <div className="card">
      <FaGlobe className="icon" />
        <h2>Segurança</h2>
        <p>Encurtamos distâncias, maior parte do processo feito por cliques, plataforma interativa.</p>
      </div>
      <div className="card">
      <FaGlobe className="icon" />
        <h2>Rapidez</h2>
        <p>Encurtamos distâncias, maior parte do processo feito por cliques, plataforma interativa.</p>
      </div>
    </div>
  )
}

export default Cards;