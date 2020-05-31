import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff, FaTrash } from 'react-icons/fa';

import Woman from '../../assets/woman.jpg';
import './style.css';

import api from '../../services/api';

function SellerProfile() {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="product">
      <aside className="product-profile">
        <img src={Woman} alt="Logotipo da empresa" />
        <p><Link to="/edit-info">Editar perfil</Link></p>
      </aside>

      <main className="main-profile">
        <header>
          <span>NCR Angola</span>

          <Link className="add-product" to="/product/new">Adicionar Loja</Link>
          <button onClick={handleLogout} type="button" className="button">
          <FaPowerOff size={18} color="#F94545" />
        </button>
        </header>
        <h1>Lojas cadastradas</h1>
        <ul>
          <li>
            <strong>Nome da Loja</strong>
            <p>NCR Angola Online</p>
            <strong>Localização</strong>
            <p>Talatona</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome da Loja</strong>
            <p>NCR Angola Online</p>
            <strong>Localização</strong>
            <p>Talatona</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome da Loja</strong>
            <p>NCR Angola Online</p>
            <strong>Localização</strong>
            <p>Talatona</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome da Loja</strong>
            <p>NCR Angola Online</p>
            <strong>Localização</strong>
            <p>Talatona</p>
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