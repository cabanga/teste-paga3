import React from 'react';
import { Link } from 'react-router-dom';

import Woman from '../../../assets/woman.jpg';
import Computer from '../../../assets/pc.jpeg';
import './styles.css';

function Product() {
  return (
    <div className="product-two">
      <div className="product-content-two">
        <aside className="product-profile-two">
          <div className="product-content-two">
            <img src={Woman} alt="Mulher" />
            <span>Gerente</span>
            <h1>Debora Leandro</h1>
            <p>Redifinir palavra-passe</p>
          </div>
          <div className="product-menu-two">
            <span>Menu</span>
            <ul>
              <li><Link to="/">Gestão de vendas</Link></li>
              <li><Link to="/">Gestão de funcionarios</Link></li>
              <li><Link to="/">Gestão de produto</Link></li>
            </ul>
          </div>
        </aside>
      </div>
      <main className="main-two">
        <div className="main-content-two">
          <h1>Adicionar produto a loja</h1>
          <h3>Gerencie aqui os produtos da loja</h3>
        </div>

        <div className="btn-product-two">
          <input type="button" value="Adicionar novo produto" />
        </div>

        <div className="main-search">
          <input type="search" placeholder="Pesquisar Por Produtos" />
          <input type="button" value="Encontrar"/>
        </div>
        <div className="main-form-two">
          <img src={Computer} alt="Computador" />
          <form>
            <label>Nome do produto</label>
            <input type="text" value="Computador HP i7 8654" />
            <label>Código do produto</label>
            <input type="text" placeholder="Código de refêrencia" />
            <label>Preço</label>
            <input type="text" value="A0A 250.000,00"/>
          </form>
        </div>
        <div className="main-form-two">
          <img src={Computer} alt="Computador" />
          <form>
            <label>Nome do produto</label>
            <input type="text" value="Computador HP i7 8654" />
            <label>Código do produto</label>
            <input type="text" placeholder="Código de refêrencia" />
            <label>Preço</label>
            <input type="text" value="A0A 250.000,00"/>
          </form>
        </div>
        <div className="main-form-two">
          <img src={Computer} alt="Computador" />
          <form>
            <label>Nome do produto</label>
            <input type="text" value="Computador HP i7 8654" />
            <label>Código do produto</label>
            <input type="text" placeholder="Código de refêrencia" />
            <label>Preço</label>
            <input type="text" value="A0A 250.000,00"/>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Product;