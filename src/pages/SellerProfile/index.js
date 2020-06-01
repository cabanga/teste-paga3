import React  from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff, FaTrash } from 'react-icons/fa';

import Woman from '../../assets/woman.jpg';
import './style.css';

function SellerProfile() {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="product">
      <aside className="product-profile">
        <div className="seller-picture">
          <img src={Woman} alt="Logotipo da empresa" />
        </div>
        <p><Link to="/edit-info-seller">Editar perfil</Link></p>
      </aside>

      <main className="main-profile">
        <span>NCR Angola</span>
        <header>
          <Link className="add-store" to="/seller/new-store">Adicionar Loja</Link>
          <button onClick={handleLogout} type="button" className="button">
          <FaPowerOff size={18} color="#F94545" />
        </button>
        </header>
        <h1>Lojas cadastradas</h1>
        <ul>
          <li>
            <Link to="/store/dashboard">
              <strong>Nome da Loja</strong>
              <p>NCR Angola Online</p>
              <strong>Categória</strong>
              <p>Informática</p>
              <strong>Localização</strong>
              <p>Talatona</p>
            </Link>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <Link to="/store/dashboard">
              <strong>Nome da Loja</strong>
              <p>NCR Angola Online</p>
              <strong>Categória</strong>
              <p>Informática</p>
              <strong>Localização</strong>
              <p>Talatona</p>
            </Link>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <Link to="/store/dashboard">
              <strong>Nome da Loja</strong>
              <p>NCR Angola Online</p>
              <strong>Categória</strong>
              <p>Informática</p>
              <strong>Localização</strong>
              <p>Talatona</p>
            </Link>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <Link to="/store/dashboard">
              <strong>Nome da Loja</strong>
              <p>NCR Angola Online</p>
              <strong>Categória</strong>
              <p>Informática</p>
              <strong>Localização</strong>
              <p>Talatona</p>
            </Link>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default SellerProfile;