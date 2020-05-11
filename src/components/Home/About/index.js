import React, { Fragment } from 'react';

import Fall from '../../../assets/fall.svg';

import './styles.css';

export default function About() {
  return (
    <Fragment>
      <section className="about">
        <img src={Fall} alt="Imagem de Background" className="img" />
        <div className="about-content">
          <h1>Quem somos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laboriosam distinctio maxime dignissimos et ut? Et sequi dolorum aut saepe nemo dolor odio libero laborum, minima temporibus reprehenderit incidunt perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut commodi voluptatem rerum libero cumque, sunt quo explicabo blanditiis reprehenderit, sed harum expedita! Culpa expedita ut quam veritatis, in illum ipsam?
          </p>
        </div>
      </section>
    </Fragment>
  )
}
