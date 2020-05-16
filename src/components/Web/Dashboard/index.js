import React from 'react';
import {
  FaShoppingBasket
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';
import Woman from '../../../assets/woman.jpg';

function Dashboard() {
  const userFirstName = localStorage.getItem('userFirstName');
  const userLastName = localStorage.getItem('userLastName');

  return (
    <div className="profileContainer">
      <aside className="profile">
        <Link to="/requestempty" className="shopping">
          <FaShoppingBasket className="shopping-icon" />
          <h1>Fazer compra</h1>
        </Link>
        
        {/**  <section className="notification">
            <h3>Notificações</h3>
            <FaChevronDown className="chevron" />
          </section>
          <section className="notification-card">
            <span>12 Ago 2020</span>
            <p>Nova compra efetuada no valor de 30.000 kz</p>
          </section>
          <section className="notification-card">
            <span>12 Ago 2020</span>
            <p>Nova compra efetuada no valor de 30.000 kz</p>
          </section> **/}
      </aside>

      <main className="profileMain">
        <section className="mainInfo">
          <h1>Dashboard de Gestão</h1>
          <h3>Gerencie melhor as suas contas</h3>
            <ul>
              <li><Link to="/">Todos</Link></li>
              <li><Link to="/">Em pagamento</Link></li>
              <li><Link to="/">Pagas</Link></li>
            </ul>
        </section>
    
        <section>
          <div className="profileCard">
            <span>Nome do produto</span>
            <p>Computador HP i7 8654</p>
            <span>Loja</span>
            <p>NCR Angola</p>
            <span>Data de aquisição</span>
            <p>12 Ago 2020</p>
          </div>
          <div className="profileCard">
            <span>Nome do produto</span>
            <p>Computador HP i7 8654</p>
            <span>Loja</span>
            <p>NCR Angola</p>
            <span>Data de aquisição</span>
            <p>12 Ago 2020</p>
          </div>
          <div className="profileCard">
            <span>Nome do produto</span>
            <p>Computador HP i7 8654</p>
            <span>Loja</span>
            <p>NCR Angola</p>
            <span>Data de aquisição</span>
            <p>12 Ago 2020</p>
          </div>
          <div className="profileCard">
            <span>Nome do produto</span>
            <p>Computador HP i7 8654</p>
            <span>Loja</span>
            <p>NCR Angola</p>
            <span>Data de aquisição</span>
            <p>12 Ago 2020</p>
          </div>
        </section>
      </main>  
      
      <aside className="profile profileAside">
        <div className="profileLink">
          <img src={Woman} alt="Perfil" />
        </div>
        <Link to="/editprofile">
          Editar perfil    
        </Link>

        <h2>{userFirstName} {userLastName}</h2>
        <h4>Conta Verificada</h4>
        <section className="dash-info">
          <div className="dash-info-card">
            <h3>Meu Salário</h3>
            <p>AOA 200.000,00</p>
          </div>
        </section>
      
          <section className="dash-info-bank">
            <span>Nome do Banco:</span>
            <p>Banco Millennium Atlantico</p>
            <span>IBAN:</span>
            <p>AO6 0000000000000022</p>
            <span>Nome do Banco:</span>
            <p>Banco Millennium Atlantico</p>
            <span>IBAN:</span>
            <p>AO6 0000000000000022</p>  
          </section>

        <section className="buttonOut">
          <Link to="/">Sair</Link>
        </section>  
      </aside>
    
      </div>   
  )
}

export default Dashboard;