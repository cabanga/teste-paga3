import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import Woman from '../../../assets/woman.jpg';
import Computer from '../../../assets/pc.jpeg';
import './styles.css';

function Product() {
  return (
    <div className="product-four">
      <div className="product-content-four">
        <aside className="product-profile-four">
          <div className="product-content-four">
            <img src={Woman} alt="Mulher" />
            <span>Gerente</span>
            <h1>Debora Leandro</h1>
            <p>Redifinir palavra-passe</p>
          </div>
          <div className="product-menu-four">
            <span>Menu</span>
            <ul>
              <li><Link to="/">Gestão de vendas</Link></li>
              <li><Link to="/">Gestão de funcionarios</Link></li>
              <li><Link to="/">Gestão de produto</Link></li>
            </ul>
          </div>
        </aside>
      </div>
      <main className="main-four">
        <div className="btn-back-four">
         <p><Link to="/">Voltar</Link></p> 
        </div>
        <div className="main-notification">
          <h2>Mais um produto adicionado com sucesso</h2>
          <FaTimes className="time-icon" />
        </div>
        <div className="main-content-four">
          <h1>Adicionar produto a loja</h1>
          <h3>Gerencie aqui os produtos da loja</h3>
        </div>

        <div className="main-form-four">
          <img src={Computer} alt="Computador" />
          <form>
            <input type="text" placeholder="Nome do Produto" />
            <input type="text" placeholder="Código de Referência" />
            <input type="text" placeholder="Preço"/>
          </form>
        </div>
        <div className="btn-product-four">
          <input type="button" value="Adicionar Novo Produto"/>
        </div>
      </main>
    </div>
  )
}

export default Product;