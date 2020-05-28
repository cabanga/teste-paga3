import React from 'react';
import {
  FaShoppingBasket,
  FaPowerOff,
  FaTrash
} from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';

import './style.css';
import Woman from '../../assets/woman.jpg';

function Dashboard() {
  const userFirstName = localStorage.getItem('userFirstName');
  const userLastName = localStorage.getItem('userLastName');

  const history = useHistory();
  
  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profileContainer">
      <aside className="profile">
        <Link to="/comprar" className="shopping">
          <FaShoppingBasket className="shopping-icon" />
          <h1>Fazer compra</h1>
        </Link>
      </aside>

      <main className="profileMain">
        <section className="mainInfo">
          <h1>Dashboard de Gestão</h1>
          <h3>Gerencie melhor as suas contas</h3>
        </section>
    
        <ul>
          <li>
            <strong>Nome do Produto</strong>
            <p>Teste</p>
            <strong>Loja</strong>
            <p>Teste</p>
            <strong>Data</strong>
            <p>Ago 20.02.2020</p>

            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome do Produto</strong>
            <p>Teste</p>
            <strong>Loja</strong>
            <p>Teste</p>
            <strong>Data</strong>
            <p>Ago 20.02.2020</p>

            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome do Produto</strong>
            <p>Teste</p>
            <strong>Loja</strong>
            <p>Teste</p>
            <strong>Data</strong>
            <p>Ago 20.02.2020</p>

            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome do Produto</strong>
            <p>Teste</p>
            <strong>Loja</strong>
            <p>Teste</p>
            <strong>Data</strong>
            <p>Ago 20.02.2020</p>

            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
        </ul>
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

        <button onClick={handleLogout} type="button" className="button">
          <FaPowerOff size={18} />
        </button> 
      </aside>
    
      </div>   
  )
}

export default Dashboard;