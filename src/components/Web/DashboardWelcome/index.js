import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Ballons from '../../../assets/ballons.svg';

function DashboardWelcome() {
  const userFirstName = localStorage.getItem('userFirstName');
  const userLastName = localStorage.getItem('userLastName');

  return (
    <div className="dashboardContainer">
      <main className="dashboardFlex">
        <section className="dashboardWelcome">
          <img src={Ballons} alt=""/>
          <h1>Olá {userFirstName} {userLastName}!</h1>
          <h2>Seja bem-vindo</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam in, praesentium asperiores neque sequi tempore animi cum incidunt nemo, vitae repudiandae minima eveniet at non cupiditate, inventore corporis delectus!
          </p>
          <Link className="profileBtn" to="/dashboard">Acesse seu perfil</Link>
        </section>
      </main>
    </div> 
  )
}

export default DashboardWelcome;