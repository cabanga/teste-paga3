import React from 'react';
import {
  FaTimes,
  FaShoppingBasket,
  FaChevronDown
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';
import Woman from '../../../assets/woman.jpg';

function Dashboard() {
  return (
    <div className="dash-container">
      <div className="dash-content">
        <aside className="dashflex dashgrid">
          <div className="shopping">
            <FaShoppingBasket className="shopping-icon" />
            <h1>Fazer compra</h1>
          </div>
          <div className="notification">
            <h3>Notificações</h3>
            <FaChevronDown className="chevron" />
          </div>
          <div className="notification-card">
            <span>12 Ago 2020</span>
            <p>Nova compra efetuada no valor de 30.000 kz</p>
          </div>
          <div className="notification-card">
            <span>12 Ago 2020</span>
            <p>Nova compra efetuada no valor de 30.000 kz</p>
          </div>
      </aside>

        <main className="dashflex dashgrid">
          <div className="dash">
            <h1>Dashboard de Gestão</h1>
            <h3>Gerencie melhor as suas contas</h3>
            <ul>
              <li><Link to="/">Todos</Link></li>
              <li><Link to="/">Em pagamento</Link></li>
              <li><Link to="/">Pagas</Link></li>
            </ul>
          </div>
    
          <div className="dash-card">
            <span>Nome do produto</span>
            <p>Computador HP i7 8654</p>
            <span>Loja</span>
            <p>NCR Angola</p>
            <span>Data de aquisição</span>
            <p>12 Ago 2020</p>
          </div>
          <div className="dash-card">
            <span>Nome do produto</span>
            <p>Computador HP i7 8654</p>
            <span>Loja</span>
            <p>NCR Angola</p>
            <span>Data de aquisição</span>
            <p>12 Ago 2020</p>
          </div>
      </main>  
      
        <aside className="dashflex dashgray dashgrid">
          <div className="dash-profile">
            <p>Debora Leandro</p>
            <img className="profile" src={Woman} alt="Perfil" />
            <span className="time-icon"><FaTimes /></span>  
          </div>
      
        <h2>Debora Emanuel Leandro</h2>
        <h4>Conta Verificada</h4>
        <div className="dash-info">
            <div className="dash-info-card">
              <h3>Salário</h3>
              <p>150.2 m</p>
            </div>
            <div className="dash-info-card">
              <h3>Salário</h3>
              <p>150.2 m</p>
            </div>
        </div>
      
          <div className="dash-info-bank">
            <span>Nome do Banco:</span>
            <p>Banco Millennium Atlantico</p>
            <span>IBAN:</span>
            <p>AO6 0000000000000022</p>
            <span>Nome do Banco:</span>
            <p>Banco Millennium Atlantico</p>
            <span>IBAN:</span>
            <p>AO6 0000000000000022</p>  
          </div>

        <section className="btn-out">
          <Link className="btn-red" to="/">Sair</Link>
        </section>  
      </aside>
    
      </div>   
    </div>
  )
}

export default Dashboard;