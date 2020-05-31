import React  from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff, FaTrash, FaShoppingBasket } from 'react-icons/fa';

import Woman from '../../assets/woman.jpg';
import './style.css';

function UserProfile() {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="user">
      <aside className="user-profile">
        <img src={Woman} alt="Logotipo da empresa" />
        <p><Link to="/edit-info-user">Editar perfil</Link></p>
        <div className="user-info">
          <span>Fernando dos Santos</span>
        </div>
      </aside>

      <main className="main">
        <header>
          <Link className="btn-add" to="/comprar">
            <FaShoppingBasket size={32} color="#F1F3F6"/>
           <span>Comprar</span>
          </Link>
          <button onClick={handleLogout} type="button" className="button">
          <FaPowerOff size={18} color="#F94545" />
        </button>
        </header>

         <h1>Todos os produtos adquiridos</h1>
        <ul>
          <li>
            <strong>Nome do produto</strong>
            <p>Computador HP i7 8654</p>
            <strong>Categória</strong>
            <p>250.000,00 AOA</p>
            <strong>Loja</strong>
            <p>NCR Angola - Talatona</p>
            <strong>Número de prestações</strong>
            <p>3</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome do produto</strong>
            <p>Computador HP i7 8654</p>
            <strong>Valor do produto</strong>
            <p>Informática</p>
            <strong>Loja</strong>
            <p>NCR Angola - Talatona</p>
            <strong>Número de prestações</strong>
            <p>3</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome do produto</strong>
            <p>Computador HP i7 8654</p>
            <strong>Valor do produto</strong>
            <p>250.000,00 AOA</p>
            <strong>Loja</strong>
            <p>NCR Angola - Talatona</p>
            <strong>Número de prestações</strong>
            <p>3</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome do produto</strong>
            <p>Computador HP i7 8654</p>
            <strong>Valor do produto</strong>
            <p>250.000,00 AOA</p>
            <strong>Loja</strong>
            <p>NCR Angola - Talatona</p>
            <strong>Número de prestações</strong>
            <p>3</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default UserProfile;