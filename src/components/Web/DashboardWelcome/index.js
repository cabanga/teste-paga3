import React from 'react';
import {
  FaShoppingBasket,
  FaChevronDown,
  FaUserAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';
import Ballons from '../../../assets/ballons.svg';

function Dashboard() {
  return (
    <div className="dashboardContainer">
        <aside className="dashboardFlex">
          <section className="dashboardShopping">
            <FaShoppingBasket className="shoppingIcon" />
            <h1>Fazer compra</h1>
          </section>
          <section className="dashboardNotification">
            <h3>Notificações</h3>
            <FaChevronDown className="notificationChevron" />
          </section>
          <section className="notificationCard">
            <span>12 Ago 2020</span>
            <p>Nova compra efetuada no valor de 30.000 kz</p>
          </section>
      </aside>

        <main className="dashboardFlex">
          <section className="dashboard">
            <h1>Dashboard de Gestão</h1>
            <h3>Gerencie melhor as suas contas</h3>
            <ul>
              <li><Link to="/">Todos</Link></li>
              <li><Link to="/">Em pagamento</Link></li>
              <li><Link to="/">Pagas</Link></li>
            </ul>
          </section>
          <section className="dashboardWelcome">
            <img src={Ballons} alt=""/>
            <h1>Seja bem-vindo</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam in, praesentium asperiores neque sequi tempore animi cum incidunt nemo, vitae repudiandae minima eveniet at non cupiditate, inventore corporis delectus!
            </p>
          </section>
      </main>

      <aside className="dashboardProfile">
        <section className="dashboardProfileInfo">
          <p>Debora Leandro</p>
          <div className="userIcon">
            <FaUserAlt className="userAlt" />
          </div>
        </section>
        <section className="btn-home">
          <Link className="btn-sair" to="/">Sair</Link>
        </section> 
      </aside>
    </div> 
  )
}

export default Dashboard;