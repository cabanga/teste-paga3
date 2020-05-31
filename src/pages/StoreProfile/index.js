import React  from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

import Woman from '../../assets/woman.jpg';
import './styles.css';

function StoreProfile() {
  return (
    <div className="store-container">
      <aside className="store-content">
        <div className="store-picture">
          <img src={Woman} alt="Logotipo da empresa" />
        </div>
        <p><Link to="/edit-info-store">Editar perfil</Link></p>
      </aside>

      <main className="store-profile">
        <span>Talatona</span>
        <header>
          <Link className="add-store" to="/new/product">Adicionar Loja</Link>
        </header>
        <h1>Produtos cadastrados</h1>
        <ul>
          <li>
            <strong>Nome do produto</strong>
            <p>iPhone 5s</p>
            <strong>Preço</strong>
            <p>250.000,00 AOA</p>
            <strong>Código do produto</strong>
            <p>AS2DGA</p>
            <strong>Prestações</strong>
            <p>3</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome do produto</strong>
            <p>iPhone 5s</p>
            <strong>Preço</strong>
            <p>250.000,00 AOA</p>
            <strong>Código do produto</strong>
            <p>AS2DGA</p>
            <strong>Prestações</strong>
            <p>3</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome do produto</strong>
            <p>iPhone 5s</p>
            <strong>Preço</strong>
            <p>250.000,00 AOA</p>
            <strong>Código do produto</strong>
            <p>AS2DGA</p>
            <strong>Prestações</strong>
            <p>3</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome do produto</strong>
            <p>iPhone 5s</p>
            <strong>Preço</strong>
            <p>250.000,00 AOA</p>
            <strong>Código do produto</strong>
            <p>AS2DGA</p>
            <strong>Prestações</strong>
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

export default StoreProfile;