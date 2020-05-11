import React from 'react';
import { Link } from 'react-router-dom';

import Woman from '../../../assets/woman.jpg';
import Fall from '../../../assets/fall.svg';
import './styles.css';

function Product() {
  return (
    <div className="product-three">
      <div className="product-content-three">
        <aside className="product-profile-three">
          <div className="product-content-three">
            <img src={Woman} alt="Mulher" />
            <span>Gerente</span>
            <h1>Debora Leandro</h1>
            <p>Redifinir palavra-passe</p>
          </div>
          <div className="product-menu-three">
            <span>Menu</span>
            <ul>
              <li><Link to="/">Gestão de vendas</Link></li>
              <li><Link to="/">Gestão de funcionarios</Link></li>
              <li><Link to="/">Gestão de produto</Link></li>
            </ul>
          </div>
        </aside>
      </div>
      <main className="main-three">
        <div className="main-content-three">
          <h1>Adicionar produto a loja</h1>
          <h3>Gerencie aqui os produtos da loja</h3>
        </div>

        <div className="btn-product-three">
          <input type="button" value="Adicionar novo produto" />
        </div>

        <div className="main-search-three">
          <input type="search" placeholder="Pesquisar Por Produtos" />
          <input type="button" value="Encontrar"/>
        </div>
        <div className="main-product-three">
          <img src={Fall} alt="" />
          <p>Não foi encontrado o produto que procura</p>
        </div>
      </main>
    </div>
  )
}

export default Product;