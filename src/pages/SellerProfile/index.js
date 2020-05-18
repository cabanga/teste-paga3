import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import Woman from '../../assets/woman.jpg';
import './style.css';

function SellerProfile() {
  const sellerName = localStorage.getItem('sellerName');
  const sellerIban = localStorage.getItem('sellerIban');
  const sellerAddress = localStorage.getItem('sellerAddress');

  return (
    <div className="product">
      <aside className="product-profile">
        <img src={Woman} alt="Logotipo da empresa" />
        <span>Empresa</span>
        <h1>{sellerName}</h1>
        <span>IBAN</span>
        <h1>{sellerIban}</h1>
        <span>Endereço</span>
        <h1>{sellerAddress}</h1>

        <button type="button" className="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </aside>

      <main className="main-profile">
        <header>
          <span>{sellerName}</span>

          <Link className="add-product" to="/product/new">Adicionar produto</Link>
        </header>
        <h1>Produtos cadastrados</h1>
        <ul>
          <li>
            <strong>Produto</strong>
            <p>Teste</p>
            <strong>Imagem</strong>
            <p>Teste</p>
            <strong>Descrição</strong>
            <p>Teste</p>
            <strong>Código do Produto</strong>
            <p>Teste</p>
            <strong>Preço</strong>
            <p>AOA 20000,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
          </li>
          <li>
            <strong>Produto</strong>
            <p>Teste</p>
            <strong>Imagem</strong>
            <p>Teste</p>
            <strong>Descrição</strong>
            <p>Teste</p>
            <strong>Código do Produto</strong>
            <p>Teste</p>
            <strong>Preço</strong>
            <p>AOA 20000,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
          </li>
          <li>
            <strong>Produto</strong>
            <p>Teste</p>
            <strong>Imagem</strong>
            <p>Teste</p>
            <strong>Descrição</strong>
            <p>Teste</p>
            <strong>Código do Produto</strong>
            <p>Teste</p>
            <strong>Preço</strong>
            <p>AOA 20000,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
          </li>
          <li>
            <strong>Produto</strong>
            <p>Teste</p>
            <strong>Imagem</strong>
            <p>Teste</p>
            <strong>Descrição</strong>
            <p>Teste</p>
            <strong>Código do Produto</strong>
            <p>Teste</p>
            <strong>Preço</strong>
            <p>AOA 20000,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default SellerProfile;