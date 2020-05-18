import React from 'react';
import Button from '../Button/';

import Analytics from '../../../assets/analitics.svg';
import './styles.css';

function Banner() {
  return (
    <>
      <section className="banner">
        <div className="banner-content">
          <h1>
            Ajudamos nas suas vendas & Suavizamos suas Despesas
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae quisquam aperiam? Corrupti reiciendis.
          </p>
        </div>
        <div className="banner-image">
          <img src={Analytics} alt="Background"/>
        </div>
      </section>
      <Button />
    </>
  )
}

export default Banner;